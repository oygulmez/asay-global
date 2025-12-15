import type { Metadata } from 'next';
import { dealersMetadata } from '../metadata';

export const metadata: Metadata = dealersMetadata;

export default function DealersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

