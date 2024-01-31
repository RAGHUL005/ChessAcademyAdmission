// LeaderboardPage.js
import React, { useState } from 'react';
import LeaderboardCard from '../components/LeaderBoardCard';
import NavigationBarAdmin from '../components/NavigationBarAdmin';
import '../assets/css/Admin.css';
import '../assets/css/LeaderboardCard.css'


function LeaderboardPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [players, setPlayers] = useState([
    { id: 1, name: 'John', score: 100 },
    { id: 2, name: 'Mark', score: 90 },
    { id: 3, name: 'Robert', score: 80 },
    { id: 4, name: 'Elon', score: 75 },
    { id: 5, name: 'Ragnar', score: 70 },
    // Add more players as needed
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <NavigationBarAdmin toggleMenu={toggleMenu} showMenu={showMenu} />
      <div className="main-content">
        <h2>Welcome to the Leaderboard!</h2>
        <section className="leaderboard">
          {players.map((player) => (
            <LeaderboardCard key={player.id} player={player} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default LeaderboardPage;
