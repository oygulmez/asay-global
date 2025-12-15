/**
 * Schema.org structured data for About page
 */

const BASE_URL = 'https://www.asayglobal.com';

export function buildAboutSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${BASE_URL}/about#webpage`,
        url: `${BASE_URL}/about`,
        name: 'About Asay Global',
        description: 'Learn about Asay Global - 22+ years of expertise in premium building materials and structural solutions. Serving 38 countries across 5 continents.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/about#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/about#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: `${BASE_URL}/about`,
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/about#organization`,
        name: 'Asay Global',
        alternateName: 'Asay Real Global',
        foundingDate: '2002',
        description: 'Asay Global specializes in the production and supply of high-quality building materials for global markets. With 22+ years of industry experience, serving 38 countries across 5 continents.',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: '50-200',
        },
        address: [
          {
            '@type': 'PostalAddress',
            addressCountry: 'NL',
            addressLocality: 'Deventer',
            streetAddress: 'Keulenstraat 11 A',
            postalCode: '7418 ET',
          },
          {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressLocality: 'San Antonio',
            addressRegion: 'TX',
            streetAddress: '5835 Callaghan Rd. Ste 204',
            postalCode: '78228',
          },
          {
            '@type': 'PostalAddress',
            addressCountry: 'TR',
            addressLocality: 'Istanbul',
            addressRegion: 'Ataşehir',
            streetAddress: 'Atatürk Mahallesi Ertuğrul Gazi Sk. Metropol İstanbul, C Blok No2/131',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'info@asayglobal.com',
          availableLanguage: ['English', 'Turkish'],
        },
        areaServed: {
          '@type': 'Place',
          name: 'Global - 38 countries across 5 continents',
        },
        knowsAbout: [
          'Building Materials',
          'Structural Solutions',
          'u-PVC Systems',
          'Aluminum Architectural Solutions',
          'Architectural Glass',
          'Steel Framings',
          'Decorative Products',
          'Construction',
        ],
      },
    ],
  };
}

