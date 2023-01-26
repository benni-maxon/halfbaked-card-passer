import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import CardList from './CardList';

export default function Player({ player, setTo, hand }) {
  const { to } = useContext(GameContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
