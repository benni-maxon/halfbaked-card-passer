import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ setFrom }) {
  const { selectedCard, to, from, passCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setFrom={setFrom} /> from {from} to {to}
    </div>
  );
}
