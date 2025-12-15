"use client";

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/page-header';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  schema: any;
}

export default function TestSEOPage() {
  const [url, setUrl] = useState('');
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [schemaValidation, setSchemaValidation] = useState<any>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  // Test için örnek ürün sayfaları
  const examplePages = [
    '/services/handrails-railings/railing-systems/rs10',
    '/services/handrails-railings/railing-systems/rs20',
    '/services/handrails-railings/railing-systems/rs30',
    '/services/handrails-railings/railing-systems/sq10',
    '/services/handrails-railings/railing-systems/sq20',
    '/services/handrails-railings/railing-systems/sq30',
    '/services/handrails-railings/glass-railing-systems/r6000',
    '/services/handrails-railings/glass-railing-systems/r6050',
    '/services/handrails-railings/glass-railing-systems/r6200',
    '/services/handrails-railings/glass-railing-systems/r1001',
    '/services/handrails-railings/glass-railing-systems/r6150',
    '/services/handrails-railings/glass-railing-systems/r1200',
  ];

  const extractSEOFromDOM = (doc: Document, htmlContent?: string) => {
    try {
      // Meta tags çıkar
      const title = doc.querySelector('title')?.textContent || '';
      const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const keywords = doc.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(',').map(k => k.trim()) || [];
      const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
      
      // Open Graph
      const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
      const ogDescription = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      
      // Twitter Card
      const twitterCard = doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';

      // Schema.org JSON-LD - Tüm script tag'lerini kontrol et
      const allScripts = Array.from(doc.querySelectorAll('script'));
      const schemaScripts = allScripts.filter(script => {
        const type = script.getAttribute('type');
        const id = script.getAttribute('id');
        // Next.js Script component'i type="application/ld+json" olarak eklenir
        // veya id'sinde "schema" geçen script'leri de kontrol et
        return type === 'application/ld+json' || 
               (id && (id.includes('schema') || id.includes('product') || id.includes('faq')));
      });
      
      const schemas: any[] = [];
      
      // HTML içinde JSON-LD arama (regex ile) - sadece htmlContent varsa
      if (htmlContent) {
        const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        const jsonLdMatches = [...htmlContent.matchAll(jsonLdRegex)];
        
        // Regex ile bulunan JSON-LD'leri parse et
        jsonLdMatches.forEach(match => {
          try {
            const jsonContent = match[1].trim();
            if (jsonContent) {
              const parsed = JSON.parse(jsonContent);
              schemas.push(parsed);
            }
          } catch (e) {
            console.warn('JSON-LD parse hatası:', e);
          }
        });
      }
      
      // Script tag'lerinden de oku
      schemaScripts.forEach(script => {
        try {
          const content = script.textContent || script.innerHTML || '';
          if (content.trim()) {
            const parsed = JSON.parse(content);
            // Duplicate kontrolü
            if (!schemas.some(s => JSON.stringify(s) === JSON.stringify(parsed))) {
              schemas.push(parsed);
            }
          }
        } catch (e) {
          console.warn('Schema parse hatası:', e);
        }
      });

      // Debug: Bulunan schema sayısını logla
      console.log('Bulunan Schema sayısı:', schemas.length);
      if (schemas.length > 0) {
        console.log('Schema tipleri:', schemas.map(s => s['@type']));
      } else {
        console.warn('Schema bulunamadı.');
        // Tüm script tag'lerini listele
        console.log('Tüm script tag sayısı:', allScripts.length);
        console.log('Schema script sayısı:', schemaScripts.length);
      }

      return {
        title,
        description,
        keywords,
        canonical,
        ogTitle,
        ogDescription,
        ogImage,
        twitterCard,
        schema: schemas,
      };
    } catch (err) {
      console.error('DOM parsing hatası:', err);
      return null;
    }
  };

  const fetchSEOData = async (pageUrl: string) => {
    setLoading(true);
    setError(null);
    setSeoData(null);
    setSchemaValidation(null);
    setIframeLoaded(false);

    try {
      // URL'yi düzelt (başında / varsa localhost ekle)
      const fullUrl = pageUrl.startsWith('http') 
        ? pageUrl 
        : `${window.location.origin}${pageUrl.startsWith('/') ? pageUrl : '/' + pageUrl}`;
      
      // Önce fetch ile deneyelim
      const response = await fetch(fullUrl, {
        headers: {
          'Accept': 'text/html',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Fetch ile SEO verilerini çıkar
      const seoDataFromFetch = extractSEOFromDOM(doc, html);
      
      // Eğer schema bulunamadıysa, iframe ile yükleyip tekrar dene
      if (seoDataFromFetch && seoDataFromFetch.schema.length === 0) {
        console.log('Fetch ile schema bulunamadı, iframe ile yükleniyor...');
        setIframeUrl(fullUrl);
        // iframe yüklendikten sonra extractSEOFromIframe çağrılacak
      } else if (seoDataFromFetch) {
        setSeoData(seoDataFromFetch);
        if (seoDataFromFetch.schema.length > 0) {
          validateSchema(seoDataFromFetch.schema[0]);
        }
        setLoading(false);
      } else {
        throw new Error('SEO verileri çıkarılamadı');
      }
    } catch (err) {
      setError('Sayfa yüklenirken bir hata oluştu. Lütfen geçerli bir URL girin.');
      console.error(err);
      setLoading(false);
    }
  };

  const extractSEOFromIframe = () => {
    const iframe = document.getElementById('seo-test-iframe') as HTMLIFrameElement;
    if (!iframe || !iframe.contentDocument) {
      console.warn('Iframe henüz yüklenmedi');
      return;
    }

    try {
      const doc = iframe.contentDocument;
      if (!doc) {
        throw new Error('Iframe document bulunamadı');
      }
      const seoData = extractSEOFromDOM(doc);
      
      if (seoData) {
        setSeoData(seoData);
        if (seoData.schema.length > 0) {
          validateSchema(seoData.schema[0]);
        }
      }
      setLoading(false);
    } catch (err) {
      console.error('Iframe DOM erişim hatası:', err);
      setError('Iframe içeriğine erişilemedi. CORS sorunu olabilir.');
      setLoading(false);
    }
  };

  const validateSchema = async (schema: any) => {
    // Schema.org validation için Google Rich Results Test API kullanılabilir
    // Ancak bu API key gerektirir, bu yüzden basit bir client-side validation yapıyoruz
    const validation = {
      isValid: true,
      errors: [] as string[],
      warnings: [] as string[],
    };

    // Temel validasyonlar
    if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
      validation.errors.push('Schema @context eksik veya hatalı');
      validation.isValid = false;
    }

    if (!schema['@type']) {
      validation.errors.push('Schema @type eksik');
      validation.isValid = false;
    }

    // Product schema için gerekli alanlar
    if (schema['@type'] === 'Product') {
      if (!schema.name) validation.warnings.push('Product name eksik');
      if (!schema.description) validation.warnings.push('Product description eksik');
      if (!schema.brand) validation.warnings.push('Product brand eksik');
      if (!schema.image || (Array.isArray(schema.image) && schema.image.length === 0)) {
        validation.warnings.push('Product image eksik');
      }
    }

    // FAQPage schema için gerekli alanlar
    if (schema['@type'] === 'FAQPage') {
      if (!schema.mainEntity || !Array.isArray(schema.mainEntity) || schema.mainEntity.length === 0) {
        validation.errors.push('FAQPage mainEntity eksik veya boş');
        validation.isValid = false;
      }
    }

    setSchemaValidation(validation);
  };

  const handleTest = () => {
    if (!url) {
      setError('Lütfen bir URL girin');
      return;
    }
    fetchSEOData(url);
  };

  const handleExampleClick = (exampleUrl: string) => {
    setUrl(exampleUrl);
    fetchSEOData(exampleUrl);
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="SEO & Schema Test Sayfası"
        description="Ürün sayfalarınızın SEO, Meta Tags ve Schema.org ayarlarını test edin"
      />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* URL Input Section */}
          <div className="mb-12 p-6 bg-gray-50 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>
              Sayfa URL'si Girin
            </h2>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Örnek: /services/handrails-railings/railing-systems/rs10"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleTest}
                disabled={loading}
                className="px-6 py-2 bg-[#333333] text-white rounded hover:bg-[#998675] transition-colors disabled:opacity-50"
              >
                {loading ? 'Test Ediliyor...' : 'Test Et'}
              </button>
            </div>
            
            {/* Örnek Sayfalar */}
            <div className="mt-4">
              <p className="text-sm mb-2" style={{ color: '#565656' }}>
                Örnek sayfalar:
              </p>
              <div className="flex flex-wrap gap-2">
                {examplePages.map((page) => (
                  <button
                    key={page}
                    onClick={() => handleExampleClick(page)}
                    className="px-3 py-1 text-sm bg-white border rounded hover:bg-gray-100 transition-colors"
                  >
                    {page.split('/').pop()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <p>Sayfa analiz ediliyor...</p>
              {iframeUrl && (
                <p className="text-sm mt-2" style={{ color: '#565656' }}>
                  Sayfa yükleniyor, Schema.org verileri kontrol ediliyor...
                </p>
              )}
            </div>
          )}

          {/* Hidden iframe for loading pages with client-side scripts */}
          {iframeUrl && (
            <iframe
              id="seo-test-iframe"
              src={iframeUrl}
              className="hidden"
              onLoad={() => {
                setIframeLoaded(true);
                // Biraz bekle ki script'ler inject edilsin
                setTimeout(() => {
                  extractSEOFromIframe();
                }, 1000);
              }}
            />
          )}

          {seoData && (
            <div className="space-y-6">
              {/* Meta Tags Section */}
              <div className="p-6 bg-white border rounded-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>
                  Meta Tags
                </h2>
                <div className="space-y-3">
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>Title:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.title || 'Eksik'}</p>
                  </div>
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>Description:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.description || 'Eksik'}</p>
                  </div>
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>Keywords:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>
                      {seoData.keywords.length > 0 ? seoData.keywords.join(', ') : 'Eksik'}
                    </p>
                  </div>
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>Canonical URL:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.canonical || 'Eksik'}</p>
                  </div>
                </div>
              </div>

              {/* Open Graph Section */}
              <div className="p-6 bg-white border rounded-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>
                  Open Graph (Facebook)
                </h2>
                <div className="space-y-3">
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>OG Title:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.ogTitle || 'Eksik'}</p>
                  </div>
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>OG Description:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.ogDescription || 'Eksik'}</p>
                  </div>
                  <div>
                    <strong className="text-sm" style={{ color: '#333' }}>OG Image:</strong>
                    <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.ogImage || 'Eksik'}</p>
                    {seoData.ogImage && (
                      <img src={seoData.ogImage} alt="OG Image" className="mt-2 max-w-xs rounded border" />
                    )}
                  </div>
                </div>
              </div>

              {/* Twitter Card Section */}
              <div className="p-6 bg-white border rounded-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>
                  Twitter Card
                </h2>
                <div>
                  <strong className="text-sm" style={{ color: '#333' }}>Card Type:</strong>
                  <p className="mt-1 text-base" style={{ color: '#565656' }}>{seoData.twitterCard || 'Eksik'}</p>
                </div>
              </div>

              {/* Schema.org Section */}
              <div className="p-6 bg-white border rounded-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>
                  Schema.org Structured Data
                </h2>
                {seoData.schema && seoData.schema.length > 0 ? (
                  <div className="space-y-4">
                    {seoData.schema.map((schema: any, index: number) => (
                      <div key={index} className="border rounded p-4">
                        <div className="mb-2">
                          <strong className="text-sm" style={{ color: '#333' }}>Schema Type:</strong>
                          <span className="ml-2 text-base" style={{ color: '#565656' }}>{schema['@type']}</span>
                        </div>
                        <details className="mt-2">
                          <summary className="cursor-pointer text-sm font-medium" style={{ color: '#998675' }}>
                            JSON-LD Görüntüle
                          </summary>
                          <pre className="mt-2 p-4 bg-gray-50 rounded overflow-auto text-xs">
                            {JSON.stringify(schema, null, 2)}
                          </pre>
                        </details>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-base" style={{ color: '#565656' }}>Schema.org structured data bulunamadı.</p>
                )}

                {/* Schema Validation */}
                {schemaValidation && (
                  <div className={`mt-4 p-4 rounded-lg border ${
                    schemaValidation.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <h3 className="font-bold mb-2" style={{ color: schemaValidation.isValid ? '#059669' : '#dc2626' }}>
                      Schema Validasyonu: {schemaValidation.isValid ? '✓ Geçerli' : '✗ Hatalı'}
                    </h3>
                    {schemaValidation.errors.length > 0 && (
                      <div className="mt-2">
                        <strong className="text-sm text-red-600">Hatalar:</strong>
                        <ul className="list-disc list-inside mt-1 text-sm text-red-600">
                          {schemaValidation.errors.map((error: string, i: number) => (
                            <li key={i}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {schemaValidation.warnings.length > 0 && (
                      <div className="mt-2">
                        <strong className="text-sm text-yellow-600">Uyarılar:</strong>
                        <ul className="list-disc list-inside mt-1 text-sm text-yellow-600">
                          {schemaValidation.warnings.map((warning: string, i: number) => (
                            <li key={i}>{warning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* SEO Checklist */}
              <div className="p-6 bg-white border rounded-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>
                  SEO Kontrol Listesi
                </h2>
                <div className="space-y-2">
                  {[
                    { label: 'Title tag mevcut', value: !!seoData.title },
                    { label: 'Description mevcut', value: !!seoData.description },
                    { label: 'Keywords mevcut', value: seoData.keywords.length > 0 },
                    { label: 'Canonical URL mevcut', value: !!seoData.canonical },
                    { label: 'OG Title mevcut', value: !!seoData.ogTitle },
                    { label: 'OG Description mevcut', value: !!seoData.ogDescription },
                    { label: 'OG Image mevcut', value: !!seoData.ogImage },
                    { label: 'Twitter Card mevcut', value: !!seoData.twitterCard },
                    { label: 'Schema.org structured data mevcut', value: seoData.schema && seoData.schema.length > 0 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className={item.value ? 'text-green-600' : 'text-red-600'}>
                        {item.value ? '✓' : '✗'}
                      </span>
                      <span className="text-base" style={{ color: '#565656' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

