import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudyCategorySelectionPage from './pages/StudyCategorySelectionPage';
import QuizCategorySelectionPage from './pages/QuizCategorySelectionPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study" element={<StudyCategorySelectionPage />} />
      <Route path="/quiz" element={<QuizCategorySelectionPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
}

export default App;
