import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorForward = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/error');
  }, [navigate]);

  return <div></div>;
};

export default ErrorForward;
