import { useEffect } from 'react';

const useOutsideClick = ({filterRef, dropRef}, callback) => {
  
  const handleClick = (e) => {
    if (
      filterRef.current && 
      !filterRef.current.contains(e.target) && 
      dropRef.current && 
      !dropRef.current.contains(e.currentTarget) 
      ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
