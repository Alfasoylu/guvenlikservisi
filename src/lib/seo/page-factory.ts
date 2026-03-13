import type { FaqItem } from "@/data/seo/faq-bank";

export function getCityLocative(cityName: string) {
  const normalized = cityName.toLocaleLowerCase("tr-TR");
  const lastVowel = [...normalized].reverse().find((char) => "aeıioöuü".includes(char));
  const suffix = lastVowel && "eiöü".includes(lastVowel) ? "de" : "da";
  return `${cityName}'${suffix}`;
}

export function dedupeFaqItems(baseItems: FaqItem[], extraItems: FaqItem[]) {
  return [
    ...baseItems,
    ...extraItems.filter(
      (candidate) =>
        !baseItems.some(
          (existing) => existing.question.toLocaleLowerCase("tr-TR") === candidate.question.toLocaleLowerCase("tr-TR")
        )
    ),
  ];
}
