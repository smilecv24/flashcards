import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import styles from './HomePage.module.css';
import { capitalize } from '../utils/string';

const FlashcardPage = () => {
  const { category, mode } = useParams<{ category: string; mode: 'study' | 'quiz' }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = flashcards.filter((card) => card.category === category);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  if (!cards.length) {
    return (
      <div>
        <h2>No cards found for this category.</h2>
        <Link to={`/select/${mode}`} className={styles.link}>
          Select another category
        </Link>
      </div>
    );
  }

  if (currentIndex >= cards.length) {
    return (
      <div>
        <h2>Study session complete!</h2>
        <Link to={`/select/${mode}`} className={styles.link}>
          Choose another category
        </Link>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div>
      <h1>
        {capitalize(mode || '')}: {capitalize(category || '')}
      </h1>
      <Flashcard card={currentCard} key={currentCard.ukrainian} />
      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleNextCard} className={styles.link} style={{ marginRight: '1rem' }}>
          Next Card
        </button>
        <Link to={`/select/${mode}`} className={styles.link}>
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default FlashcardPage; 