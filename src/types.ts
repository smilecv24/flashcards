export type Category = 'animals' | 'food' | 'verbs';

export interface Flashcard {
  category: Category;
  ukrainian: string;
  english: string;
  quiz: {
    type: 'multiple-choice';
    options: string[];
  };
} 