import { useEffect } from 'react';

const useOutsideClick = ({filterRef, dropRef}, callback) => {
  
  const handleClick = (e) => {
    console.log('dref',dropRef.current)
    console.log(e.target)
    console.log(dropRef.current && !dropRef.current.contains(e.target))
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
