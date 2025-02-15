
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface JournalListItemProps {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  views: number;
}

const JournalListItem = ({ id, image, category, title, date, views }: JournalListItemProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative aspect-square cursor-pointer" 
      onClick={() => navigate(`/journal/${id}`)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover rounded-sm"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
        <span className="text-xs">#{category}</span>
        <h3 className="text-base font-medium mt-1">{title}</h3>
        <p className="text-xs mt-1 text-gray-200">{date} 조회 {views}</p>
      </div>
    </div>
  );
};

export default JournalListItem;
