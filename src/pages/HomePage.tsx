import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div>
      <h1>Ukrainian Flashcards</h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/select/study" className={styles.link}>
              Study Mode
            </Link>
          </li>
          <li>
            <Link to="/select/quiz" className={styles.link}>
              Quiz Mode
            </Link>
          </li>
          <li>
            <Link to="/stats" className={styles.link}>
              Stats Page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage; 