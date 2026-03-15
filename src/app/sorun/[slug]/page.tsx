import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProblemPageTemplate from "@/components/templates/ProblemPageTemplate";
import {
  getAllProblemSlugs,
  getProblemPageBySlug,
} from "@/data/seo/problem-pages";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import { siteConfig } from "@/data/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProblemSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProblemPageBySlug(slug);

  if (!page) return {};

  const canonicalUrl = getCanonicalUrlForKnownPath(`/sorun/${slug}`);

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: page.primaryIssue,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "article",
    },
  };
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProblemPageBySlug(slug);

  if (!page) notFound();

  return <ProblemPageTemplate data={page} />;
}
