import type { Metadata } from 'next';
import { upvcSystemsMetadata } from '../../metadata';

export const metadata: Metadata = upvcSystemsMetadata;

export default function UPVCSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

