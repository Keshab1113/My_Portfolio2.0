import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CardStack — Aceternity-style sticky card deck
 *
 * Each card is positioned absolutely; as `offset` increases, the card slides
 * further down, scales down, and dims. The active card sits on top.
 *
 * Props:
 *   - items: array of card objects (any shape — rendered as-is inside)
 *   - offset: index offset added to each card's stacking position
 *   - activeIndex: which card should be the "top" one
 */
const CardStack = ({ items, offset = 6, activeIndex = 0 }) => {
  return (
    <div className="relative w-full h-[420px]">
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        const isFuture = i > activeIndex;

        let yOffset = 0;
        let scale = 1;
        let opacity = 1;

        if (isActive) {
          yOffset = 0;
          scale = 1;
          opacity = 1;
        } else if (isPast) {
          // Already shown — fly up and fade out
          yOffset = -120;
          scale = 0.92;
          opacity = 0;
        } else if (isFuture) {
          const distance = i - activeIndex;
          yOffset = distance * offset;
          scale = 1 - distance * 0.05;
          opacity = Math.max(0, 0.5 - distance * 0.12);
        }

        return (
          <motion.div
            key={item.id ?? i}
            animate={{
              y: yOffset,
              scale,
              opacity,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 24,
            }}
            style={{
              zIndex: items.length - i,
            }}
            className="absolute inset-0"
          >
            {item.content}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
