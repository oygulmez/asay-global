/**
 * Schema.org structured data for Dealers page
 */

const BASE_URL = 'https://www.asayglobal.com';

const dealers = [
  {
    country: 'Italy',
    company: 'New House Steel by Brescia Roberto',
    contact: 'Roberto Brescia',
    email: 'roberto@steelframings.com',
    phones: ['+39 329 611 7121'],
    address: 'Strada delle Canestrelle 17, 70124 Bari (BA), Italy',
  },
  {
    country: 'Greece',
    company: 'A Metal Komotini',
    email: 'a.metal.komotini@gmail.com',
    phones: ['+30 6934 975 252'],
    address: '1st km Komotini – Alexandroupoli Road (Opposite Lagakis Market) Kikidion, Komotini, Greece',
  },
  {
    country: 'Armenia',
    company: 'Arsham LLC',
    email: 'info@arshamtrade.com',
    phones: ['+37441657011', '+37433657011'],
    address: 'No.46/4 , Davtashen 2nd Bk , Yerevan, Armenia',
  },
  {
    country: 'Netherlands',
    company: 'Unit5 Bouw en Infra',
    contact: 'Ingemar Miguel',
    email: 'ingemar@unit5-bouw-infra.nl',
    phones: ['0031-(0)614831923'],
    address: 'Loevesteinlaan 41, 2533 AG Den Haag, The Netherlands',
  },
  {
    country: 'Peru',
    company: 'Haisa Grupo Inmobiliario S.A.C.',
    contact: 'Martín Gamarra Villaran',
    email: 'yanachagavillage@gmail.com',
    phones: ['+51 933 952 170'],
    address: 'Jr. Asuncion 555 Comas, Lima, Perú',
  },
];

export function buildDealersSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/dealers#webpage`,
        url: `${BASE_URL}/dealers`,
        name: 'Authorized Dealers - Asay Global',
        description: 'Find our trusted partners and authorized dealers worldwide. Connect with local experts for professional consultation and support.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/dealers#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/dealers#breadcrumb`,
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
            name: 'Authorized Dealers',
            item: `${BASE_URL}/dealers`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/dealers#dealers-list`,
        name: 'Asay Global Authorized Dealers',
        description: 'Authorized dealers and partners of Asay Global worldwide',
        numberOfItems: dealers.length,
        itemListElement: dealers.map((dealer, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'LocalBusiness',
            name: dealer.company,
            address: {
              '@type': 'PostalAddress',
              addressCountry: dealer.country,
              streetAddress: dealer.address,
            },
            ...(dealer.email && {
              email: dealer.email,
            }),
            ...(dealer.phones && dealer.phones.length > 0 && {
              telephone: dealer.phones[0],
            }),
            ...(dealer.contact && {
              contactPoint: {
                '@type': 'ContactPoint',
                name: dealer.contact,
              },
            }),
            areaServed: {
              '@type': 'Country',
              name: dealer.country,
            },
          },
        })),
      },
    ],
  };
}

