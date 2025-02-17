
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoffeeStampModal from '@/components/common/CoffeeStampModal';

const CoffeeStamp = () => {
  const navigate = useNavigate();

  return <CoffeeStampModal isOpen={true} onClose={() => navigate(-1)} />;
};

export default CoffeeStamp;
