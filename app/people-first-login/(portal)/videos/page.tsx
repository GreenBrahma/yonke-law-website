import Link from "next/link";
import { requirePortalUser } from "@/lib/portal/session";
import { PREP_VIDEOS } from "@/lib/portal/source";
import { Card, PortalPage } from "@/components/portal/PortalPage";

export default async function PreparationVideos() {
  await requirePortalUser();
  return (
    <PortalPage title="Preparation Videos" lead="Short videos from Yonke Law. Watch them before the moment they cover.">
      <div className="space-y-5">
        {PREP_VIDEOS.map((v) => (
          <Card key={v.id}>
            <section id={v.id} className="scroll-mt-24">
              <h2 className="text-white font-semibold text-lg">{v.title}</h2>
              <p className="mt-1 mb-4 text-sm text-white/80">{v.description}</p>
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                {v.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <video controls preload="metadata" poster={v.poster} className="h-full w-full">
                    <source src={v.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </section>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/80">
        Prefer to read?{" "}
        <Link href="/how-to-prepare-for-a-deposition" className="text-muted-gold underline underline-offset-4">
          How to prepare for a deposition
        </Link>
      </p>
    </PortalPage>
  );
}
