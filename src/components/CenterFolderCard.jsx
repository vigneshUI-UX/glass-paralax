import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CenterFolderCard() {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    { id: 1, title: "Jananayagan", duration: "3:42", rotate: -15, x: -85, y: -90 },
    { id: 2, title: "Aura 10/10", duration: "2:50", rotate: -5, x: -20, y: -110 },
    { id: 3, title: "Thanga Poove", duration: "3:15", rotate: 12, x: 45, y: -95 },
  ];

  return (
    <div
      className="folder-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 1. Folder Back Body Layer */}
      <div className="folder-back" />

      {/* 2. Audio Cards Stored Inside the Folder */}
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ x: 0, y: -15, rotate: 0, opacity: 0.95 }}
          animate={
            isOpen
              ? { x: card.x, y: card.y, rotate: card.rotate, opacity: 1, scale: 1 }
              : { x: (index - 1) * 6, y: -20 - index * 6, rotate: (index - 1) * 3, opacity: 0.95, scale: 0.92 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="stacked-card"
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: "bold" }}>
            <span style={{ textOverflow: "ellipsis", overflow: "hidden", whitespace: "nowrap" }}>{card.title}</span>
            <span>♪</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", color: "rgba(255,255,255,0.7)" }}>
            <span>2:18</span>
            <span>{card.duration}</span>
          </div>
        </motion.div>
      ))}

      {/* 3. Transparent Front Glass Pocket Layer */}
      <motion.div
        animate={{ scale: isOpen ? 1.03 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="folder-front"
      >
        {/* Top Folder Lip & Brand Label */}
        <div className="folder-top-tab">
          <div className="brand-header">
            <span className="brand-dot" />
            <span className="brand-name">gaana</span>
          </div>
          <div className="folder-cutout-tab" />
        </div>

        {/* Embedded Player Inside Front Pocket */}
        <div className="mini-player">
          <div className="player-icon">♪</div>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: "bold" }}>Thanga Poove</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)" }}>2:45</div>
          </div>
        </div>

        <div className="card-subtitle" style={{ textAlign: "center", fontSize: "0.55rem" }}>
          Hover Folder to Expand
        </div>
      </motion.div>
    </div>
  );
}