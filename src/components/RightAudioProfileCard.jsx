import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RightAudioProfileCard() {
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
            display: "flex",
            flexDirection: "column",
            justifyAttribute: "center",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "2rem" }}>🎵</div>
          <div style={{ textAlign: "center" }}>
            <h3 className="card-title">Audio Profile</h3>
            <p className="card-subtitle">Hover to reveal specs</p>
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
            <div className="spec-header">
              <h3 className="card-title">AUDIO PROFILE</h3>
              <p className="card-subtitle">Sound Profile</p>
            </div>

            <div className="spec-grid">
              <span className="spec-label">File Format</span>
              <span className="spec-value">M4A / ALAC</span>

              <span className="spec-label">Bitrate</span>
              <span className="spec-value">936 kbps</span>

              <span className="spec-label">Sample Rate</span>
              <span className="spec-value">48.0 kHz</span>

              <span className="spec-label">File Size</span>
              <span className="spec-value">9.2 MB</span>

              <span className="spec-label">Key / Tempo</span>
              <span className="spec-value">F# Major / 92 BPM</span>
            </div>
          </div>

          <p className="card-subtitle" style={{ fontSize: "0.6rem" }}>LOSSLESS AUDIO CODEC</p>
        </div>
      </motion.div>
    </div>
  );
}