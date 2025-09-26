import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Dealers",
  description: "Find Asay Global's authorized dealers and partners worldwide for B2B procurement of u‑PVC, aluminum, glass and steel systems.",
};

export default function DealersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
