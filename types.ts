export interface VocabItem {
  it: string;       // Portuguese word
  pron: string;     // Pronunciation
  es: string;       // Spanish translation
  context: string;  // Context label
  fraseIt: string;  // Example phrase Portuguese
  fraseEs: string;  // Example phrase Spanish
  frasePron: string;// Phrase pronunciation
  color?: string;   // Optional hex color override for card background
  text?: string;    // Text color override ('white' or 'black')
  icon?: string;    // Emoji icon
  border?: boolean; // Whether to show a border (for white cards)
}

export interface Category {
  id: string;
  title: string;
  desc: string;
  items: VocabItem[];
}

export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

export type ViewState = 'home' | 'quiz' | string; // 'string' allows for category IDs