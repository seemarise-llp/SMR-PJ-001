import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the website",
};

export default function Home() {
  return <div className="text-red-500">Home Landing Page</div>;
}
