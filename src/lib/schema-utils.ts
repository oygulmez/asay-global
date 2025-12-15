/**
 * Schema.org structured data utilities
 * Provides reusable functions for generating consistent JSON-LD schemas
 */

export const BASE_URL = "https://www.asayglobal.com";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
  category?: string;
  material?: string[];
}

/**
 * Build breadcrumb schema for any page
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

/**
 * Build product schema for individual product pages
 */
export function buildProductSchema(
  product: ProductItem & {
    url: string;
    brand?: string;
    category?: string;
    material?: string[];
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: product.url.startsWith("http")
      ? product.url
      : `${BASE_URL}${product.url}`,
    image: product.image.startsWith("http")
      ? product.image
      : `${BASE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: product.brand || "Asay Global",
    },
    category: product.category || "Building Material",
    material: product.material || ["Aluminum"],
    applicationCategory: "Building Material",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Asay Global",
      },
    },
  };
}

/**
 * Build collection page schema for product listing pages
 */
export function buildCollectionSchema(
  products: ProductItem[],
  meta: {
    name: string;
    description: string;
    url: string;
    image?: string;
    category?: string;
    material?: string[];
    breadcrumbs: BreadcrumbItem[];
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.name,
    description: meta.description,
    url: meta.url.startsWith("http") ? meta.url : `${BASE_URL}${meta.url}`,
    image: meta.image
      ? meta.image.startsWith("http")
        ? meta.image
        : `${BASE_URL}${meta.image}`
      : undefined,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          url: `${BASE_URL}${meta.url}/${product.slug}`,
          image: product.image.startsWith("http")
            ? product.image
            : `${BASE_URL}${product.image}`,
          brand: {
            "@type": "Brand",
            name: "Asay Global",
          },
          category: meta.category || "Building Material",
          material: meta.material || ["Aluminum"],
          applicationCategory: "Building Material",
        },
      })),
    },
    breadcrumb: buildBreadcrumbSchema(meta.breadcrumbs),
  };
}

