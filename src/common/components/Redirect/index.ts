import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../enums';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(Routes.Active);
  });

  return null;
};

export { Redirect };
