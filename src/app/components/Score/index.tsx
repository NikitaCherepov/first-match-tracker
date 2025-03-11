'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScoreProps {
  matchId: string,
  awayScore: number,
  homeScore: number
}

export default function Score({ matchId, awayScore, homeScore }: ScoreProps) {
  const [prevScores, setPrevScores] = useState<Record<string, string>>({});

  useEffect(() => {
    setPrevScores(prev => {
      const newScore = `${awayScore}:${homeScore}`;

      if (prev[matchId] !== newScore) {
        return { ...prev, [matchId]: newScore };
      }

      return prev;
    });
  }, [awayScore, homeScore, matchId]);

  return (
    <AnimatePresence mode="wait">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      transition={{ duration: 0.2 }}
      key={prevScores[matchId]}
    >
      {prevScores[matchId] ?? `${awayScore}:${homeScore}`}
    </motion.p>
    </AnimatePresence>
  );
}
