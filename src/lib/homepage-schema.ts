/**
 * Schema.org structured data for homepage
 * Optimized for search engines and AI engines
 */

const BASE_URL = 'https://www.asayglobal.com';

export function buildHomepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}#organization`,
        name: 'Asay Global',
        alternateName: 'Asay Real Global',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/images/asayglobal-background-img.webp`,
          width: 1200,
          height: 630,
        },
        description: 'Asay Global specializes in the production and supply of high-quality building materials for global markets. With 22+ years of industry experience, serving 38 countries across 5 continents.',
        foundingDate: '2002',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: '50-200',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: ['TR', 'US', 'GB'],
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'info@asayglobal.com',
          availableLanguage: ['English', 'Turkish'],
        },
        sameAs: [
          // Add social media links if available
        ],
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
          'Façade Systems',
          'Window Systems',
          'Door Systems',
        ],
      },
      // WebSite Schema
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}#website`,
        url: BASE_URL,
        name: 'Asay Global',
        description: 'Premium building materials and structural solutions for global construction projects',
        publisher: {
          '@id': `${BASE_URL}#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-US',
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL,
          },
        ],
      },
      // FAQPage Schema
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does Asay Global provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Asay Global provides premium building materials and structural solutions including u-PVC window and door systems, aluminum architectural solutions, architectural glass systems, steel framings, and interior/exterior decorative products. We serve B2B clients globally with 22+ years of experience.',
            },
          },
          {
            '@type': 'Question',
            name: 'In how many countries does Asay Global operate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Asay Global operates in 38 countries across 5 continents, providing building materials and structural solutions to clients worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of building materials does Asay Global supply?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Asay Global supplies u-PVC systems (windows, doors, sliding systems), aluminum architectural solutions (curtain walls, windows, doors), architectural glass solutions, steel framings (structural steel, frameworks, industrial buildings), and decorative products (wall panels, cladding, decking).',
            },
          },
          {
            '@type': 'Question',
            name: 'How long has Asay Global been in business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Asay Global has been operating for over 22 years, with extensive experience in the building materials and construction industry.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Asay Global provide B2B services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Asay Global is a B2B partner specializing in structural solutions, providing building materials and construction services to businesses, contractors, architects, and developers worldwide.',
            },
          },
        ],
      },
      // Service Schema (Aggregate)
      {
        '@type': 'Service',
        '@id': `${BASE_URL}#service`,
        serviceType: 'Building Materials Supplier',
        provider: {
          '@id': `${BASE_URL}#organization`,
        },
        areaServed: {
          '@type': 'Place',
          name: 'Global - 38 countries',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Building Materials & Structural Solutions',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'u-PVC Systems',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'u-PVC Window & Door Systems',
                    description: 'Premium u-PVC window and door systems with high energy efficiency',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'u-PVC Sliding Systems',
                    description: 'High-performance sliding systems for large openings',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Aluminum Architectural Solutions',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Aluminum Curtain Walls',
                    description: 'Modern curtain wall systems for facades',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Aluminum Windows & Doors',
                    description: 'Premium aluminum window and door systems',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Architectural Glass Solutions',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Energy-Efficient Glass',
                    description: 'Advanced glazing systems for thermal and acoustic performance',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Steel Framings',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Structural Steel',
                    description: 'High-performance steel structures for commercial and industrial projects',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Decorative Products',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Interior & Exterior Decorative Products',
                    description: 'Premium decorative materials for modern architecture',
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  };
}

