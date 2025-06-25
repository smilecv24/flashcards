import { useState } from 'react';
import type { Flashcard as FlashcardType } from '../data/flashcards';
import styles from './Flashcard.module.css';

interface FlashcardProps {
  card: FlashcardType;
}

const Flashcard = ({ card }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleFlip}
      data-testid="flashcard"
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <p>{card.ukrainian}</p>
        </div>
        <div className={styles.cardBack}>
          <p>{card.english}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 