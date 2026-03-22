"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

function AutoplayVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked by browser — user can still use controls
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-800">
        {label}
      </div>
      <video
        ref={videoRef}
        className="w-full"
        muted
        loop
        playsInline
        controls
        preload="metadata"
        src={src}
      />
    </div>
  );
}

const highlights = [
  "İnsan algılama ile gereksiz bildirimleri azaltır",
  "Akıllı olay senaryoları ile daha verimli izleme sağlar",
  "Telefon uygulamasına daha anlamlı anlık uyarılar gönderir",
  "İşyeri, mağaza ve depo için daha kullanışlı güvenlik deneyimi sunar",
];

export default function VideoAutoplaySection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
              Akıllı algılama demoları
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              İnsan ve Hareket Algılama ile Daha Anlamlı Güvenlik
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Modern IP kamera sistemleri sadece görüntü kaydetmez. Uygun
              senaryolarda insan algılama, hareket analizi ve daha doğru
              bildirim akışı sunarak yanlış alarm yükünü azaltır.
            </p>

            <div className="mt-6 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <AutoplayVideo
              src="/videos/insan-algilama-demo-video.mp4"
              label="Gerçek kurulum görüntüsü — İnsan algılama"
            />
            <AutoplayVideo
              src="/videos/Hareketli-Arac-plaka-gorus-demosu.mp4"
              label="Gerçek kurulum görüntüsü — Hareket halinde plaka netliği"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
