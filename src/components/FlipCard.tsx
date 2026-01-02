"use client";
import React, { useState } from "react";

type Tag = { icon?: string; label: string; url?: string };

type FlipCardProps = {
  deploymentUrl?: string;
  frontImage: string;
  title?: string;
  tags?: Tag[];
  description?: string;
  techIcons?: string[];
  className?: string;
  height?: string;
};

export default function FlipCard({
  deploymentUrl,
  frontImage,
  title,
  tags = [],
  description,
  techIcons = [],
  className = "",
  height = "h-[380px]",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card w-full ${height} ${className}`}
      
      style={{ perspective: 1000 }}
      onClick={() => window.open(deploymentUrl, "_blank")}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((s) => !s);
      }}
    >
      <div
        className="flip-card-inner h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          className="flip-card-front h-full"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "2px solid rgba(255,255,255,0.25)",
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 24,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div className="flex flex-col w-full h-full gap-1">
            <img className="rounded-xl h-[280px] object-cover" src={frontImage} alt={title} />
            {title ? (
              <p className="text-white text-2xl mt-4 font-semibold">{title}</p>
            ) : null}
          </div>
        </div>

        <div
          className="flip-card-back h-full"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "2px solid rgba(255,255,255,0.25)",
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 24,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              {tags.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full text-white hover:cursor-pointer hover:text-black hover:bg-white bg-[#1C1C1C] py-2 px-3"
                  {...(t.url ? { onClick: () => window.open(t.url, "_blank") } : {})}>
                  {t.icon ? <img src={t.icon} className="w-6" alt="" /> : null}
                  <p>{t.label}</p>
                </div>
              ))}
            </div>

            {description ? (
              <p className="text-white text-justify">{description}</p>
            ) : null}
          </div>

          <div className="flex gap-2">
            {techIcons.map((src, i) => (
              <img key={i} className="h-10" src={src} alt="tech" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
