import React, { useEffect, useState } from 'react';

const useEmpty = (input) => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (input === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [input]);

  return { isEmpty };
};

export default useEmpty;
