
import React from 'react';

export const categories = [
  { id: 1, name: 'All', slug: 'all' },
  { id: 2, name: 'News', slug: 'news' },
  { id: 3, name: 'Culture', slug: 'culture' },
  { id: 4, name: 'Life', slug: 'life' },
  { id: 5, name: 'Team', slug: 'team' },
  { id: 6, name: 'Essay', slug: 'essay' },
  { id: 7, name: 'Film', slug: 'film' },
];

interface JournalCategoriesProps {
  activeCategory: string;
  onCategoryClick: (slug: string) => void;
}

const JournalCategories = ({ activeCategory, onCategoryClick }: JournalCategoriesProps) => {
  return (
    <nav className="flex space-x-4 px-4 py-3 overflow-x-auto whitespace-nowrap border-b">
      {categories.map((category) => (
        <button 
          key={category.id}
          onClick={() => onCategoryClick(category.slug)}
          className={`text-sm transition-colors ${
            activeCategory === category.slug 
              ? 'text-black font-medium' 
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
};

export default JournalCategories;
