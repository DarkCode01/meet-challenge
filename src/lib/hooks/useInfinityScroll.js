import { useEffect, useState } from 'react';

export const useIfinityScroll = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const onBottom = () => {
      const scrollTop = (document.documentElement
        && document.documentElement.scrollTop)
        || document.body.scrollTop;
      const scrollHeight = (document.documentElement
        && document.documentElement.scrollHeight)
        || document.body.scrollHeight;
  
        if (scrollTop + window.innerHeight >= scrollHeight) {
          setIsBottom(true);
        }
    }
    
    window.addEventListener('scroll', onBottom);

    return () => window.removeEventListener('scroll', onBottom);
  }, []);

  return { isBottom, setIsBottom };
}