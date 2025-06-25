import { Link, useParams } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import styles from './HomePage.module.css';

const CategorySelectionPage = () => {
  const { mode } = useParams<{ mode: 'study' | 'quiz' }>();
  const categories = [...new Set(flashcards.map((card) => card.category))];

  const pageTitle = mode === 'study' ? 'Study Mode' : 'Quiz Mode';
  const linkPath = mode === 'study' ? '/study' : '/quiz';

  return (
    <div>
      <h1>{pageTitle}: Select a Category</h1>
      <ul className={styles.nav}>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`${linkPath}/${category}`}
              className={styles.link}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className={styles.link} style={{ marginTop: '2rem' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default CategorySelectionPage; 