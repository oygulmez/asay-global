import type { Metadata } from 'next';
import { aluminumSolutionsMetadata } from '../../metadata';

export const metadata: Metadata = aluminumSolutionsMetadata;

export default function AluminumSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

