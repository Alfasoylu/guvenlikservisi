# GuvenlikServisi Critical SEO Risk Analysis

This document records the structural SEO and lead-generation risks that can damage long-term growth if the platform scales before the architecture is controlled. The analysis is based on the current repository state, especially `src/app`, `src/data/seo`, `src/lib/seo`, `src/lib/service-page-factory.ts`, `src/lib/sitemap.ts`, `src/app/api/*`, and the repo docs.

## Thin Content Risk
- Explanation: Thin content appears when a page exists mainly because the route can be generated, not because the page contains enough unique local, commercial, or operational value to justify indexing. In this project, that risk is not theoretical because the architecture is already optimized for scalable city x service expansion and is planned to grow into city x district x service.
- Where it could appear in this project: Current `/<city>` pages, current `/<city>/<service>` pages, future district pages, future segment pages, and any future service hub layer that reuses the same blocks with only location or keyword swaps.
- Evidence from current architecture:
  - `src/lib/service-page-factory.ts` contains `getSEOContentBlocks(city)`, which returns generic camera-installation-oriented blocks and is not service-specific. That means non-camera services can inherit broad, repetitive explanatory content.
  - `src/app/[city]/[service]/page.tsx` contains `buildDefaultServiceSpecificContent(...)`, which falls back to generic copy patterns when service-specific depth is missing.
  - `src/app/[city]/page.tsx` is a reusable city hub pattern that can become shallow if city-level intros, service-area nuance, and city-specific differentiators do not scale with route growth.
  - `docs/ARCHITECTURE.md` already notes that "programmatic sayfalarda icerik varyasyonu sinirli".
  - `docs/SEO_STRATEGY.md` explicitly warns that limited content variation can create programmatic thin content risk.
- Severity: High now, Critical if district and segment route layers are added without stronger uniqueness controls.
- Early warning signals:
  - Multiple indexed pages with near-identical body structure, FAQ patterns, and CTA wording.
  - Search Console impressions growing faster than clicks or conversions for new route layers.
  - Google indexing far fewer pages than are published, or cycling pages in and out of the index.
  - Pages ranking only for branded or ultra-long-tail queries but failing to hold core local-commercial terms.
  - Manual spot checks showing that changing the city or service slug leaves most visible copy materially unchanged.
- Mitigation strategy:
  - Gate new indexable route families behind a uniqueness threshold, not just route availability.
  - Make service-page content blocks depend on service business intent, segment targets, and local pain points, not only city name injection.
  - Require every indexable page to carry a meaningful combination of local context, operational pain points, pricing/scope cues, trust proof, FAQ differentiation, and internal-link role.
  - Keep future district pages noindex until they have district-specific demand and enough unique operational content.
  - Track content reuse ratios across city/service pages before publishing large new sets.

## Duplicate Content Risk
- Explanation: Duplicate content risk appears when multiple URLs target the same search job with highly similar titles, metadata, body copy, FAQs, and internal-link context. Canonical tags help, but if Google sees pages as near-clones or weakly differentiated, canonical can be ignored.
- Where it could appear in this project: Between static service pages and `/<city>/<service>` pages, future service hubs and segment pages, future district pages, legacy slug variants, and similar `/teklif/*` or service-supporting pages if more variants are added around the same topic.
- Evidence from current architecture:
  - `src/lib/seo/metadata.ts` centralizes canonical generation cleanly, but canonical alone does not solve similarity when body content and intent are too close.
  - `src/lib/service-page-factory.ts` builds metadata descriptions with repeatable templates, which is efficient but increases similarity risk across many route variants.
  - `src/data/seo/segments.ts` and `src/data/seo/services.ts` now make future segment/service combinations easy to generate; that is good for scale but raises duplication risk if one segment page and one city/service page target the same commercial query set.
  - `docs/PAGE_VALUE_MAP.md` already records concrete duplication risks such as `/istanbul-guvenlik-sistemi-kurulumu`, `kartli-gecis-ve-turnike-sistemi` vs `kartli-gecis-sistemi-kurulumu`, and overlapping `/teklif/istanbul-ip-kamera-montaji` variants.
  - `src/app/[city]/[service]/page.tsx` uses a large shared route template. If future district or segment routes reuse the same trust, process, FAQ, and CTA patterns, similarity will rise quickly.
- Severity: High.
- Early warning signals:
  - Two or more route families ranking intermittently for the same query cluster.
  - Search Console showing query cannibalization across pages with the same service intent.
  - Canonicalized pages still receiving impressions as independent URLs.
  - Google selecting a different canonical than the one declared in metadata.
  - Large overlaps in title tags, H1s, descriptions, FAQ questions, and internal anchor text between related pages.
- Mitigation strategy:
  - Define a single primary URL pattern for each commercial search job before creating new page families.
  - Do not launch service hubs, segment pages, or district pages unless their search intent is materially different from existing city/service pages.
  - Enforce explicit route-to-intent mapping in source-of-truth data before publication.
  - Use canonicals only as cleanup, not as permission to publish near-clones.
  - Maintain a duplication audit for legacy routes, slug mismatches, and overlapping landing pages.

## Crawl Budget Risk
- Explanation: Crawl budget risk appears when the platform publishes more URLs than Google can or should crawl regularly. The problem is not raw page count alone; it is page count relative to page value, freshness, uniqueness, and internal discovery quality.
- Where it could appear in this project: The current city and city/service network, and especially any future city x district x service expansion, segment expansion, troubleshooting pages, and service-support pages.
- Evidence from current architecture:
  - `src/lib/sitemap.ts` already auto-includes all city pages and all city/service pages through `getAllCityPaths()` and `getAllCityServicePaths()`.
  - Repo context and docs describe future expansion toward district pages and additional service/segment layers.
  - `src/data/seo/services.ts`, `src/data/seo/segments.ts`, and `src/data/seo/keywords.ts` now make large-scale route generation easier, which is strategically useful but increases crawl-surface risk.
  - `docs/INTERNAL_LINK_ENGINE.md` shows that the current graph is strong for city/service discovery, but future district and segment link paths are not yet defined.
- Severity: Medium today, Critical once district and segment route families go live at scale.
- Early warning signals:
  - Search Console crawl stats rising while indexed useful pages do not improve proportionally.
  - New route families staying discovered but not indexed for long periods.
  - Important money pages being crawled less frequently after mass route expansion.
  - Large sitemap growth without matching growth in qualified leads.
- Mitigation strategy:
  - Keep only proven money pages and strong support pages indexable.
  - Treat district, segment, and troubleshooting expansions as staged rollouts with crawl and index KPIs.
  - Do not automatically add every future route family to the sitemap on day one.
  - Create explicit inclusion rules: city/service pages first, recurring-revenue pages next, only then selectively expand.
  - Maintain a crawl-priority map tied to business value, not only to route existence.

## Index Bloat Risk
- Explanation: Index bloat happens when too many low-value, weak, overlapping, or low-conversion pages become indexable. That dilutes the platform's overall quality signals and can reduce the ranking strength of the money pages that actually matter.
- Where it could appear in this project: Future district pages, weak informational pages generated from traffic keywords, low-differentiation service variants, low-unique segment pages, and any thin support page that enters the sitemap by default.
- Evidence from current architecture:
  - `src/lib/sitemap.ts` currently includes homepage, blog, static pages, city pages, and city/service pages. That is manageable today, but the pattern becomes risky if weak future page families are added without quality gates.
  - `src/data/seo/keywords.ts` includes both `seo-traffic` and `lead-opportunity` records. If all keyword types later receive indexable pages, index quality can deteriorate quickly.
  - `docs/PAGE_VALUE_MAP.md` already distinguishes true money pages from support pages, which means the repo already knows not every page type should be treated equally.
  - `/teklif/*` has already been excluded from sitemap and indexing, which is a strong precedent for intentional index control.
- Severity: High.
- Early warning signals:
  - Indexed page count rising faster than lead-producing page count.
  - Traffic shifting toward low-value blog or helper pages while high-intent page growth stalls.
  - Important city/service pages losing average position after broad low-value expansion.
  - Search Console showing many "crawled - currently not indexed" or weak-performance support pages.
- Mitigation strategy:
  - Keep a strict indexability policy by page family.
  - Prioritize indexation for `/<city>/<service>`, recurring-revenue pages, and strong city hubs.
  - Keep low-uniqueness district pages, experimental segment variants, and weak support pages noindex until they prove value.
  - Separate "publishable" from "indexable" in future content operations.
  - Review sitemap additions against business value and content uniqueness, not only engineering readiness.

## Wrong Keyword Selection Risk
- Explanation: Wrong keyword selection risk means the system ranks for terms that produce traffic but not profitable leads. For this business, that is a direct growth failure because pageviews without qualified calls, quotes, maintenance contracts, or service requests do not compound revenue.
- Where it could appear in this project: In keyword-driven page planning, metadata decisions, blog expansion, future troubleshooting pages, and any future route generation based on `seo-traffic` records rather than `lead-opportunity` records.
- Evidence from current architecture:
  - `src/data/seo/keywords.ts` explicitly separates `opportunityType` into `seo-traffic` and `lead-opportunity`, and also classifies `keywordIntent`, `businessValue`, and `leadIntentLevel`.
  - The keyword dataset includes low-lead informational terms such as `ip kamera nedir`, `alarm sistemi nasil calisir`, and other supporting queries alongside high-intent terms such as `ip kamera montaji`, `kamera ariza servisi`, and price/offer terms.
  - `docs/SEO_STRATEGY.md` separates `Ticari`, `Fiyat`, `Bilgilendirici`, and `Segment` intent clusters and already warns against building for volume first.
  - `src/lib/seo/page-factory.ts` exposes selectors such as `getHighIntentLeadServices()` and `getPageBusinessSummary()`, which is strong infrastructure, but it also means future teams could still misuse the data if page creation is not governed.
- Severity: High business risk.
- Early warning signals:
  - Organic sessions grow while quote volume, call volume, and maintenance leads do not.
  - New content ranks mainly for "nedir", "nasil", "kac metre", or DIY-style searches.
  - Blog and informational pages dominate Search Console clicks while city/service money pages stagnate.
  - High traffic clusters show weak time-to-lead, weak phone click rate, or weak form-start rate.
- Mitigation strategy:
  - Use `lead-opportunity` keywords as the primary expansion queue and `seo-traffic` keywords only as support assets.
  - Tie keyword prioritization to page type, conversion path, and business value.
  - Require every new keyword cluster to state whether it exists to generate revenue directly or to support authority/internal linking.
  - Review keyword targets against actual lead quality, not only search volume.
  - Build reports by keyword opportunity type so the business can see revenue by query class.

## Weak Internal Linking Risk
- Explanation: Weak internal linking risk appears when the site architecture creates many pages but fails to move authority, crawl discovery, and users toward the pages that matter most. In a programmatic SEO system, internal links are part of the ranking model, not just navigation.
- Where it could appear in this project: Between city pages, city/service pages, static service pages, blog content, future segment pages, and future district pages.
- Evidence from current architecture:
  - `docs/INTERNAL_LINK_ENGINE.md` shows a solid current lattice for city hubs and city/service pages:
    - city hub -> city/service
    - city/service -> city hub
    - city/service -> same city other services
    - city/service -> same service other cities
  - The same doc also lists missing future layers such as blog -> money pages, service-page deep links, and weighted commercial linking.
  - `src/app/[city]/page.tsx` and `src/app/[city]/[service]/page.tsx` already use internal-link helpers, but the network is still concentrated around the city/service lattice.
  - `src/lib/seo/page-factory.ts` now knows business priority, recurring revenue, and high-LTV segments, but the internal-link graph does not yet fully exploit those signals.
- Severity: High.
- Early warning signals:
  - Important recurring-revenue or repair pages receiving weak internal links relative to lower-value pages.
  - Blog traffic failing to pass users and authority into city/service money pages.
  - Future segment or district pages becoming isolated leaves rather than participating in hubs.
  - Crawl depth increasing as new route families are added.
- Mitigation strategy:
  - Evolve the internal-link engine from route adjacency to business-priority linking.
  - Ensure maintenance, fault-repair, monitoring, and high-LTV segment pages receive deliberate contextual links from relevant hubs.
  - Link informational/supporting content into commercial pages using intent-aligned anchors.
  - When district pages launch, make sure they connect upward to city/service hubs and sideways only where intent is truly adjacent.
  - Periodically audit internal link distribution by business value, not just by route count.

## Low Conversion Traffic Risk
- Explanation: Low-conversion traffic risk means the platform attracts visitors who are curious, educational, DIY-oriented, or product-shopping, but not ready to request service, maintenance, diagnosis, or a quote. This creates vanity growth without profitable demand capture.
- Where it could appear in this project: Blog posts, future troubleshooting content, informational keyword pages, broad educational service pages, and any SEO page built from supporting keywords without a clear conversion role.
- Evidence from current architecture:
  - `src/data/seo/keywords.ts` contains many supporting informational terms that are useful for topical authority but weak as direct lead drivers.
  - `docs/PAGE_VALUE_MAP.md` explicitly says blog is mainly traffic and authority support, not a direct money layer.
  - `docs/SEO_STRATEGY.md` says the business should not optimize for page count or vanity traffic and should let Ads validate winners before SEO scale.
  - `src/lib/seo/page-factory.ts` already exposes business-priority helpers, which confirms that the architecture understands value differences even though traffic misuse remains possible operationally.
- Severity: High business risk.
- Early warning signals:
  - Growing organic traffic with flat lead counts.
  - High engagement on informational content but weak CTA clicks, weak phone taps, or weak form completions.
  - Search Console growth dominated by low-intent educational queries.
  - Sales feedback indicating low-fit or price-shopping-only traffic.
- Mitigation strategy:
  - Keep informational content in a supporting role with strong internal links to commercial pages.
  - Prioritize maintenance, repair, monitoring, city/service, and high-LTV segment query families over generic education.
  - Measure page success with qualified lead rate, not sessions alone.
  - Avoid launching standalone pages around DIY or pure curiosity keywords unless they clearly support the money-page network.

## Spam / Fake Lead Risk
- Explanation: Public forms attract junk submissions, fake phone numbers, repeated retries, bot traffic, and low-quality intent. This hurts operator trust in the lead pipeline, wastes sales time, and can pollute Google Sheets so badly that real lead analysis becomes unreliable.
- Where it could appear in this project: `/api/lead`, `/api/quote`, all public quote forms, Google Sheets duplicate checks, and any paid-traffic landing page with direct public form access.
- Evidence from current architecture:
  - `src/lib/lead-security.ts` already includes honeypot checks, in-memory throttling, and a recent-duplicate store. That proves the repo has seen this risk already.
  - `src/app/api/lead/route.ts` and `src/app/api/quote/route.ts` enforce honeypot rejection, throttling, local duplicate suppression, and downstream failure logging.
  - `src/lib/check-duplicate-lead.ts` checks duplicates through the Google Sheets webhook, but it only checks by phone.
  - `src/lib/lead-logging.ts` improves server-side visibility, but logging is still lightweight and operationally local.
  - `docs/ARCHITECTURE.md` previously flagged weak duplicate and spam protection as a lead-layer weakness.
- Severity: Medium-High today, because protections exist, but they are lightweight and not strongly distributed.
- Early warning signals:
  - Sudden spikes in honeypot hits, validation failures, or throttled submissions.
  - Many leads with invalid or recycled phone patterns.
  - Duplicate suppression events rising faster than real lead volume.
  - Sales team feedback that Sheets contains junk, unreachable contacts, or repeated fake service requests.
  - Partial delivery failures where one downstream system succeeds and the other fails.
- Mitigation strategy:
  - Treat current protections as a first line, not a final anti-spam system.
  - Move toward serverless-safe or shared-store rate limiting before paid traffic scales materially.
  - Improve duplicate signals beyond phone-only checks when safe for the current workflow.
  - Build simple monitoring around throttles, honeypots, duplicate suppression, and downstream failures.
  - Periodically audit lead-quality ratios by source, page type, and campaign.

## Template Spam Risk
- Explanation: Template spam risk appears when the platform publishes many pages that are technically unique URLs but operationally the same page with a different city, district, segment, or keyword label. For Google, this can look like doorway behavior rather than useful local-commercial coverage.
- Where it could appear in this project: Current `/<city>/<service>` routes, future district pages, future segment pages, future troubleshooting route families, and any automated page expansion that relies more on slugs than on differentiated user value.
- Evidence from current architecture:
  - `src/app/[city]/[service]/page.tsx` is a very large shared route template that already handles many services through one compositional system.
  - `src/lib/service-page-factory.ts` and `src/lib/seo/page-factory.ts` make future scale easier, which is strategically correct but also increases the risk of "city name swapped" page generation.
  - `src/data/seo/services.ts`, `src/data/seo/segments.ts`, and `src/data/seo/keywords.ts` are now strong source-of-truth layers. That is valuable, but it also means page generation can accelerate faster than differentiation if publishing discipline is weak.
  - `docs/SEO_STRATEGY.md` explicitly states that multiplying pages by only changing words is forbidden.
  - `docs/ARCHITECTURE.md` already notes limited content variation.
- Severity: Critical at future scale.
- Early warning signals:
  - Rapid route growth without equivalent growth in differentiated content blocks, visuals, FAQs, trust angles, or page purpose.
  - Search Console indexing instability across newly generated route groups.
  - Similar H1s, sections, FAQs, and CTAs across cities, districts, and segments.
  - Strong impressions for many pages but weak sustained rankings and weak lead yield.
- Mitigation strategy:
  - Use programmatic SEO only where source-of-truth data can produce materially different user value.
  - Define uniqueness requirements per route family before allowing indexation.
  - Publish new route classes in small cohorts and measure indexing, rankings, and conversions before full rollout.
  - Keep segment and district pages out of mass production until there is enough real local/operational differentiation.
  - Treat page factories as controlled generators, not automatic permissions to publish every combinational route.
