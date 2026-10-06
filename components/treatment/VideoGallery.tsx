import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import type { VideoGalleryData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./VideoGallery.module.css";

type VideoGalleryProps = {
  data: VideoGalleryData;
  tone?: "white" | "ivory";
};

/** Responsive YouTube embeds; privacy-enhanced domain and lazy-loaded so they don't block the page. */
export default function VideoGallery({ data, tone = "white" }: VideoGalleryProps) {
  return (
    <section id={data.id} className={`${ui.section} ${ui[tone]}`}>
      <div className={ui.container}>
        <div className={ui.headerCenter}>
          <span className={ui.eyebrow}>{data.eyebrow}</span>
          <h2 className={ui.title}>{data.title}</h2>
          {data.intro && <p className={ui.lead}>{data.intro}</p>}
        </div>

        <div className={`${styles.grid} ${data.videos.length === 1 ? styles.single : ""}`}>
          {data.videos.map((video) => (
            <figure key={video.youtubeId} className={styles.card}>
              <div className={styles.frame}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.title}>{video.title}</span>
                {video.note && (
                  <span className={styles.note}>
                    <Icon name="translate" className={styles.noteIcon} />
                    {video.note}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {data.moreLink && (
          <div className={styles.more}>
            <CtaLink cta={data.moreLink} variant="secondary" />
          </div>
        )}
      </div>
    </section>
  );
}
