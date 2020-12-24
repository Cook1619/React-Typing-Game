import React, { useState, useEffect } from 'react';
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from '../styled/Game';
import { Strong } from '../styled/Random';

export default function Game() {
  const [score, setScore] = useState(0);

  useEffect(() => {}, [score]);
  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time is: <Strong>00:00</Strong>
      </StyledTimer>
    </StyledGame>
  );
}
