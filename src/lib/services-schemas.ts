/**
 * Schema.org structured data for service pages
 */

const BASE_URL = 'https://www.asayglobal.com';

export function buildUPVCSystemsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/services/u-pvc-systems#webpage`,
        url: `${BASE_URL}/services/u-pvc-systems`,
        name: 'u-PVC Systems | Asay Global',
        description: 'u-PVC product families covering window, door and sliding systems engineered for durability, energy efficiency and low maintenance.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/services/u-pvc-systems#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/services/u-pvc-systems#breadcrumb`,
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
            name: 'Services',
            item: `${BASE_URL}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'u-PVC Systems',
            item: `${BASE_URL}/services/u-pvc-systems`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/services/u-pvc-systems#products`,
        name: 'u-PVC Systems Products',
        description: 'Premium u-PVC window, door and sliding systems',
        numberOfItems: 2,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'u-PVC Window & Door Systems',
              description: 'Premium u-PVC window and door systems offering excellent thermal insulation, sound reduction and long-term durability.',
              url: `${BASE_URL}/services/u-pvc-systems/window-door-systems`,
              category: 'u-PVC Systems',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              name: 'u-PVC Sliding Systems',
              description: 'Smooth, space-saving sliding solutions designed for wide openings with enhanced sealing options.',
              url: `${BASE_URL}/services/u-pvc-systems/sliding-systems`,
              category: 'u-PVC Systems',
            },
          },
        ],
      },
    ],
  };
}

export function buildAluminumSolutionsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/services/aluminum-architectural-solutions#webpage`,
        url: `${BASE_URL}/services/aluminum-architectural-solutions`,
        name: 'Aluminum Architectural Solutions | Asay Global',
        description: 'High-performance aluminum systems for façades, windows, doors and curtain walls—strength, corrosion resistance and design flexibility for modern projects.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/services/aluminum-architectural-solutions#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/services/aluminum-architectural-solutions#breadcrumb`,
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
            name: 'Services',
            item: `${BASE_URL}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Aluminum Architectural Solutions',
            item: `${BASE_URL}/services/aluminum-architectural-solutions`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/services/aluminum-architectural-solutions#service`,
        serviceType: 'Aluminum Architectural Solutions',
        provider: {
          '@id': `${BASE_URL}#organization`,
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Aluminum Architectural Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Aluminum Windows',
                description: 'Versatile aluminium windows with optimal functionality, excellent design, safety and energy efficiency.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Aluminum Doors',
                description: 'Robust, highly secure and fully customisable aluminium doors with unlimited design freedom.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Sliding & Folding Systems',
                description: 'Sliding doors with large glazed surfaces, motorised variants and integrated flyscreens.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Conservatories',
                description: 'Conservatories from non-insulated to highly insulated glazed structures.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Façades',
                description: 'Stick façades, unitised façades and window walls for all building needs.',
              },
            },
          ],
        },
      },
    ],
  };
}

export function buildGlassSolutionsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/services/architectural-glass-solutions#webpage`,
        url: `${BASE_URL}/services/architectural-glass-solutions`,
        name: 'Architectural Glass Solutions | Asay Global',
        description: 'Energy-efficient and specialty glazing for façades, skylights and interiors—thermal, acoustic and safety performance for contemporary architecture.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/services/architectural-glass-solutions#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/services/architectural-glass-solutions#breadcrumb`,
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
            name: 'Services',
            item: `${BASE_URL}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Architectural Glass Solutions',
            item: `${BASE_URL}/services/architectural-glass-solutions`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/services/architectural-glass-solutions#service`,
        serviceType: 'Architectural Glass Solutions',
        provider: {
          '@id': `${BASE_URL}#organization`,
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Architectural Glass Technologies',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Insulating Glass',
                description: 'Advanced double or triple-pane glass systems with sealed spaces filled with dry air or inert gases.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Colorless Flat Glass',
                description: 'Premium float glass with exceptional optical clarity and uniform thickness.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Tentesol Glass',
                description: 'High-performance solar control glass with reflective coatings reducing solar heat gain by up to 60%.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Painted Glass',
                description: 'Ceramic-painted architectural glass available in unlimited colors.',
              },
            },
          ],
        },
      },
    ],
  };
}

export function buildDecorativeProductsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/services/interior-and-exterior-decorative-products#webpage`,
        url: `${BASE_URL}/services/interior-and-exterior-decorative-products`,
        name: 'Interior & Exterior Decorative Products | Asay Global',
        description: 'B2B decorative solutions for interiors and facades—wall, ceiling and cladding systems engineered for durability, aesthetics and fast installation.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/services/interior-and-exterior-decorative-products#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/services/interior-and-exterior-decorative-products#breadcrumb`,
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
            name: 'Services',
            item: `${BASE_URL}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Interior & Exterior Decorative Products',
            item: `${BASE_URL}/services/interior-and-exterior-decorative-products`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/services/interior-and-exterior-decorative-products#service`,
        serviceType: 'Decorative Products',
        provider: {
          '@id': `${BASE_URL}#organization`,
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Decorative Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Wall Panels',
                description: 'Versatile interior and exterior wall panel systems combining modern aesthetics with superior performance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Composite Decking',
                description: 'High-quality composite decking profiles providing slip-resistant surfaces with natural wood appearance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Facade Systems',
                description: 'Weather-resistant facade cladding systems offering superior protection and contemporary design.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Interior Cladding',
                description: 'Elegant interior cladding solutions providing warmth and sophistication to indoor spaces.',
              },
            },
          ],
        },
      },
    ],
  };
}

