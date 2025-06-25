import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function StatsPage() {
  return (
    <div>
      <h1>Statistics</h1>
      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}

export default StatsPage; 