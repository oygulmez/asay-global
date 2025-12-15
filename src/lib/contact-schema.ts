/**
 * Schema.org structured data for Contact page
 */

const BASE_URL = 'https://www.asayglobal.com';

export function buildContactSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${BASE_URL}/contact#webpage`,
        url: `${BASE_URL}/contact`,
        name: 'Contact Asay Global',
        description: 'Contact Asay Global for B2B inquiries about structural solutions, building materials, pricing, and partnerships. Reach our team for u-PVC, aluminum, glass and steel systems.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/contact#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/contact#breadcrumb`,
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
            name: 'Contact Us',
            item: `${BASE_URL}/contact`,
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/contact#organization`,
        name: 'Asay Global',
        email: 'info@asayglobal.com',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'info@asayglobal.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Turkish'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Head Office (Europe)',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'NL',
              addressLocality: 'Deventer',
              streetAddress: 'Keulenstraat 11 A',
              postalCode: '7418 ET',
            },
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Head Office (USA)',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'US',
              addressLocality: 'San Antonio',
              addressRegion: 'TX',
              streetAddress: '5835 Callaghan Rd. Ste 204',
              postalCode: '78228',
            },
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Head Office (Turkey)',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'TR',
              addressLocality: 'Istanbul',
              addressRegion: 'Ataşehir',
              streetAddress: 'Atatürk Mahallesi Ertuğrul Gazi Sk. Metropol İstanbul, C Blok No2/131',
            },
          },
        ],
      },
    ],
  };
}

