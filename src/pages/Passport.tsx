
import React from 'react';
import PassportModal from '@/components/common/PassportModal';
import { useNavigate } from 'react-router-dom';

const Passport = () => {
  const navigate = useNavigate();

  return <PassportModal isOpen={true} onClose={() => navigate(-1)} />;
};

export default Passport;
