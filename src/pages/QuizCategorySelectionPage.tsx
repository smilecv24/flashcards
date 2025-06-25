import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function QuizCategorySelectionPage() {
  return (
    <div>
      <h1>Quiz Mode: Category Selection</h1>
      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}

export default QuizCategorySelectionPage; 