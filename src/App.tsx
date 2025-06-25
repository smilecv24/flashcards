import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import FlashcardPage from './pages/FlashcardPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select/:mode" element={<CategorySelectionPage />} />
      <Route path="/study/:category" element={<FlashcardPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
}

export default App;
