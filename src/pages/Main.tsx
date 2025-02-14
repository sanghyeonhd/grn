
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/granshop');
  }, [navigate]);

  return null;
};

export default Main;
