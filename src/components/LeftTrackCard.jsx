import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LeftTrackCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ width: "270px", height: "320px", cursor: "pointer" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className="glass-card"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop"
            alt="Track Media"
            className="track-media-img"
          />
          <div style={{ textAlign: "center" }}>
            <h3 className="card-title">Track Media</h3>
            <p className="card-subtitle">Hover to reveal info</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="glass-card"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="card-title" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>
              TRACK MEDIA
            </h3>
            <div className="info-list">
              <p><span className="info-label">Title:</span> Jananayagan</p>
              <p><span className="info-label">Album:</span> Thalapathy 69</p>
              <p><span className="info-label">Artist:</span> Anirudh Ravichander</p>
              <p><span className="info-label">Duration:</span> 3:42</p>
              <p><span className="info-label">Format:</span> Master Audio</p>
            </div>
          </div>
          <p className="card-subtitle" style={{ fontSize: "0.6rem" }}>STATUS: ACTIVE PLAYBACK</p>
        </div>
      </motion.div>
    </div>
  );
}