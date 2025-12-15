import type { Metadata } from 'next';
import { decorativeProductsMetadata } from '../../metadata';

export const metadata: Metadata = decorativeProductsMetadata;

export default function DecorativeProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

