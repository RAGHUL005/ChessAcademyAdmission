// LeaderboardCard.js
import React, { useState } from 'react';

const LeaderboardCard = ({ player }) => {
  return (
    <div className="leaderboard-card">
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  );
};

export default LeaderboardCard;
