
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default Main;
