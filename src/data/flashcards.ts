export interface Flashcard {
  category: string;
  ukrainian: string;
  english: string;
  quiz: {
    type: 'multiple-choice';
    options: string[];
  };
}

export const flashcards: Flashcard[] = [
  // Animals
  {
    category: 'animals',
    ukrainian: 'кіт',
    english: 'cat',
    quiz: {
      type: 'multiple-choice',
      options: ['dog', 'bird', 'cat', 'fish'],
    },
  },
  {
    category: 'animals',
    ukrainian: 'собака',
    english: 'dog',
    quiz: {
      type: 'multiple-choice',
      options: ['cat', 'dog', 'lion', 'tiger'],
    },
  },
  {
    category: 'animals',
    ukrainian: 'птах',
    english: 'bird',
    quiz: {
      type: 'multiple-choice',
      options: ['fish', 'snake', 'bird', 'lizard'],
    },
  },
  // Food
  {
    category: 'food',
    ukrainian: 'хліб',
    english: 'bread',
    quiz: {
      type: 'multiple-choice',
      options: ['water', 'cheese', 'bread', 'butter'],
    },
  },
  {
    category: 'food',
    ukrainian: 'вода',
    english: 'water',
    quiz: {
      type: 'multiple-choice',
      options: ['juice', 'milk', 'water', 'tea'],
    },
  },
  {
    category: 'food',
    ukrainian: 'яблуко',
    english: 'apple',
    quiz: {
      type: 'multiple-choice',
      options: ['orange', 'banana', 'apple', 'grape'],
    },
  },
  // Verbs
  {
    category: 'verbs',
    ukrainian: 'читати',
    english: 'to read',
    quiz: {
      type: 'multiple-choice',
      options: ['to write', 'to speak', 'to read', 'to run'],
    },
  },
  {
    category: 'verbs',
    ukrainian: 'писати',
    english: 'to write',
    quiz: {
      type: 'multiple-choice',
      options: ['to draw', 'to type', 'to write', 'to sing'],
    },
  },
  {
    category: 'verbs',
    ukrainian: 'говорити',
    english: 'to speak',
    quiz: {
      type: 'multiple-choice',
      options: ['to listen', 'to shout', 'to speak', 'to whisper'],
    },
  },
]; 