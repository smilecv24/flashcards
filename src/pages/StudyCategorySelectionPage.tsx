import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function StudyCategorySelectionPage() {
  return (
    <div>
      <h1>Study Mode: Category Selection</h1>
      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}

export default StudyCategorySelectionPage; 