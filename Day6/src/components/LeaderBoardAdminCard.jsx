import React, { useState } from 'react';

const LeaderboardCard = ({ player, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(player.name);
  const [editedScore, setEditedScore] = useState(player.score);

  const handleEditSave = () => {
    onEdit(player.id, editedName, editedScore);
    setIsEditing(false);
  };

  return (
    <div className="leaderboard-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="number"
            value={editedScore}
            onChange={(e) => setEditedScore(e.target.value)}
          />
          <button onClick={handleEditSave}>Save</button>
        </>
      ) : (
        <>
          <p>{player.name}</p>
          <p>{player.score}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(player.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default LeaderboardCard;
