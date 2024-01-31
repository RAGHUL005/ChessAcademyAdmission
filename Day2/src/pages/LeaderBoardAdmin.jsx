import React, { useState } from 'react';
import LeaderboardCard from '../components/LeaderBoardAdminCard';
import NavigationBarAdmin from '../components/NavigationBarAdmin';
import '../assets/css/Admin.css';

function LeaderboardAdmin() {
  const [showMenu, setShowMenu] = useState(false);
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', score: 100 },
    { id: 2, name: 'Player 2', score: 90 },
    // Add more players as needed
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleEditPlayer = (id, editedName, editedScore) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, name: editedName, score: editedScore } : player
      )
    );
  };

  const handleDeletePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
  };

  return (
    <div>
      <NavigationBarAdmin toggleMenu={toggleMenu} showMenu={showMenu} />
      <div className="main-content">
        <h2>Welcome to the Leaderboard!</h2>
        <section className="leaderboard">
          {players.map((player) => (
            <LeaderboardCard
              key={player.id}
              player={player}
              onEdit={handleEditPlayer}
              onDelete={handleDeletePlayer}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default LeaderboardAdmin;
