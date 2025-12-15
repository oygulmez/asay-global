import type { Metadata } from 'next';
import { glassSolutionsMetadata } from '../../metadata';

export const metadata: Metadata = glassSolutionsMetadata;

export default function GlassSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

