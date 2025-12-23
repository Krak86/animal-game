import { useState, useEffect } from "react";

export interface UseMilestoneDetectionReturn {
  milestoneReached: boolean;
  currentMilestone: number;
  celebratingMilestone: boolean;
  resetCelebration: () => void;
}

export const useMilestoneDetection = (
  score: number
): UseMilestoneDetectionReturn => {
  const [lastMilestoneScore, setLastMilestoneScore] = useState<number>(0);
  const [celebratingMilestone, setCelebratingMilestone] =
    useState<boolean>(false);

  // Calculate current milestone (10, 20, 30, ...)
  const currentMilestone = Math.floor(score / 10) * 10;

  // Check if score is exactly at a milestone (10, 20, 30, etc)
  const isAtMilestone = score > 0 && score % 10 === 0;

  // Detect if we reached a new milestone
  const milestoneReached =
    isAtMilestone &&
    currentMilestone > lastMilestoneScore &&
    currentMilestone > 0;

  useEffect(() => {
    // Only trigger when we're exactly at a new milestone
    if (isAtMilestone && currentMilestone > lastMilestoneScore && currentMilestone > 0) {
      setLastMilestoneScore(currentMilestone);
      setCelebratingMilestone(true);
    }
  }, [score, isAtMilestone, currentMilestone, lastMilestoneScore]);

  const resetCelebration = () => {
    setCelebratingMilestone(false);
  };

  return {
    milestoneReached,
    currentMilestone,
    celebratingMilestone,
    resetCelebration,
  };
};
