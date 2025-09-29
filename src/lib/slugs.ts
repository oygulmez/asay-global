// URL slug mappings for different languages
export const slugMappings: Record<string, Record<string, string>> = {
  en: {
    // Main pages
    'home': '',
    'about': 'about',
    'services': 'services',
    'contact': 'contact',
    'dealers': 'dealers',
    
    // Service categories
    'aluminum-architectural-solutions': 'aluminum-architectural-solutions',
    'architectural-glass-solutions': 'architectural-glass-solutions',
    'interior-and-exterior-decorative-products': 'interior-and-exterior-decorative-products',
    'steel-framings': 'steel-framings',
    'u-pvc-systems': 'u-pvc-systems',
    
    // u-PVC subcategories
    'window-door-systems': 'window-door-systems',
    'sliding-systems': 'sliding-systems',
    
    // u-PVC products
    'hs76-sliding': 'hs76-sliding',
    'legend-art': 'legend-art',
    'legend-window-and-door-system': 'legend-window-and-door-system',
    'legend-sliding-plus': 'legend-sliding-plus',
    'pvc-sliding-door-system': 'pvc-sliding-door-system',
    'slimslide': 'slimslide',
    'zendow': 'zendow'
  },
  fr: {
    // Main pages
    'home': '',
    'about': 'a-propos',
    'services': 'services',
    'contact': 'contact',
    'dealers': 'revendeurs',
    
    // Service categories
    'aluminum-architectural-solutions': 'solutions-architecturales-aluminium',
    'architectural-glass-solutions': 'solutions-verre-architectural',
    'interior-and-exterior-decorative-products': 'produits-decoratifs-interieurs-exterieurs',
    'steel-framings': 'structures-acier',
    'u-pvc-systems': 'systemes-u-pvc',
    
    // u-PVC subcategories
    'window-door-systems': 'systemes-fenetres-portes',
    'sliding-systems': 'systemes-coulissants',
    
    // u-PVC products
    'hs76-sliding': 'hs76-coulissant',
    'legend-art': 'legend-art',
    'legend-window-and-door-system': 'systeme-fenetres-portes-legend',
    'legend-sliding-plus': 'legend-coulissant-plus',
    'pvc-sliding-door-system': 'systeme-portes-coulissantes-pvc',
    'slimslide': 'slimslide',
    'zendow': 'zendow'
  },
  es: {
    // Main pages
    'home': '',
    'about': 'sobre-nosotros',
    'services': 'servicios',
    'contact': 'contacto',
    'dealers': 'distribuidores',
    
    // Service categories
    'aluminum-architectural-solutions': 'soluciones-arquitectonicas-aluminio',
    'architectural-glass-solutions': 'soluciones-vidrio-arquitectonico',
    'interior-and-exterior-decorative-products': 'productos-decorativos-interiores-exteriores',
    'steel-framings': 'estructuras-acero',
    'u-pvc-systems': 'sistemas-u-pvc',
    
    // u-PVC subcategories
    'window-door-systems': 'sistemas-ventanas-puertas',
    'sliding-systems': 'sistemas-corredizos',
    
    // u-PVC products
    'hs76-sliding': 'hs76-corredizo',
    'legend-art': 'legend-art',
    'legend-window-and-door-system': 'sistema-ventanas-puertas-legend',
    'legend-sliding-plus': 'legend-corredizo-plus',
    'pvc-sliding-door-system': 'sistema-puertas-corredizas-pvc',
    'slimslide': 'slimslide',
    'zendow': 'zendow'
  }
};

// Reverse mappings for URL to key conversion
export const reverseSlugMappings: Record<string, Record<string, string>> = {
  en: Object.fromEntries(Object.entries(slugMappings.en).map(([key, slug]) => [slug, key])),
  fr: Object.fromEntries(Object.entries(slugMappings.fr).map(([key, slug]) => [slug, key])),
  es: Object.fromEntries(Object.entries(slugMappings.es).map(([key, slug]) => [slug, key]))
};

// Helper functions
export function getSlugForLocale(key: string, locale: 'en' | 'fr' | 'es'): string {
  return slugMappings[locale]?.[key] || slugMappings.en?.[key] || key;
}

export function getKeyFromSlug(slug: string, locale: 'en' | 'fr' | 'es'): string {
  return reverseSlugMappings[locale]?.[slug] || reverseSlugMappings.en?.[slug] || slug;
}

export function createLocalizedUrl(path: string, locale: 'en' | 'fr' | 'es'): string {
  if (locale === 'en') return path;
  
  // Split path into segments
  const segments = path.split('/').filter(Boolean);
  const localizedSegments = segments.map(segment => {
    const key = getKeyFromSlug(segment, 'en'); // Assume original path is in English
    return getSlugForLocale(key, locale);
  });
  
  return `/${locale}/${localizedSegments.join('/')}`;
}

export function parseLocalizedUrl(url: string): { locale: 'en' | 'fr' | 'es', path: string, key: string } {
  const segments = url.split('/').filter(Boolean);
  
  if (segments[0] === 'fr' || segments[0] === 'es') {
    const locale = segments[0] as 'fr' | 'es';
    const pathSegments = segments.slice(1);
    const key = pathSegments.map(segment => getKeyFromSlug(segment, locale)).join('/');
    return { locale, path: `/${pathSegments.join('/')}`, key };
  }
  
  // Default to English
  const key = segments.map(segment => getKeyFromSlug(segment, 'en')).join('/');
  return { locale: 'en', path: `/${segments.join('/')}`, key };
}
