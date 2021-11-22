import { useEffect } from 'react';

const useOutsideClick = ({filterRef, dropRef}, callback) => {
  
  const handleClick = (e) => {
    if (
      filterRef.current && 
      !filterRef.current.contains(e.target) && 
      dropRef.current && 
      !dropRef.current.contains(e.target) 
      ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  });
};

export default useOutsideClick;
