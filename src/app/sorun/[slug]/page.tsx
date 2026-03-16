import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProblemPageTemplate from "@/components/templates/ProblemPageTemplate";
import {
  getAllProblemSlugs,
  getProblemPageBySlug,
} from "@/data/seo/problem-pages";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import { siteConfig } from "@/data/site-config";
import { buildSeoMetadata } from "@/lib/seo/metadata";

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

  return buildSeoMetadata({
    title: page.title,
    description: page.metaDescription,
    canonical: canonicalUrl,
    type: "article",
    openGraph: {
      title: page.primaryIssue,
      description: page.metaDescription,
      siteName: siteConfig.name,
    },
  });
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProblemPageBySlug(slug);

  if (!page) notFound();

  return <ProblemPageTemplate data={page} />;
}
