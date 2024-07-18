import React, { useEffect, useState } from 'react';

const App = () => {
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto mt-10 space-y-10 ">
      {/* First Div */}
      <div className={`flex space-x-4 transition-transform duration-500 ${scrollDirection === 'down' ? '-translate-x-20' : '-translate-x-0'} ${scrollDirection === 'up' ? '-translate-x-20' : ''}`}>
        <img src="path_to_image1.jpg" alt="Image 1" className="w-32 h-32" />
        <img src="path_to_image2.jpg" alt="Image 2" className="w-32 h-32" />
        <img src="path_to_image3.jpg" alt="Image 3" className="w-32 h-32" />
        <img src="path_to_image4.jpg" alt="Image 4" className="w-32 h-32" />
        <img src="path_to_image5.jpg" alt="Image 5" className="w-32 h-32" />
      </div>
      {/* Second Div */}
      <div className={`flex space-x-4 transition-transform duration-500 ${scrollDirection === 'down' ? 'translate-x-20' : 'translate-x-0'} ${scrollDirection === 'up' ? '-translate-x-20' : ''}`}>
        <img src="path_to_image1.jpg" alt="Image 1" className="w-32 h-32" />
        <img src="path_to_image2.jpg" alt="Image 2" className="w-32 h-32" />
        <img src="path_to_image3.jpg" alt="Image 3" className="w-32 h-32" />
        <img src="path_to_image4.jpg" alt="Image 4" className="w-32 h-32" />
        <img src="path_to_image5.jpg" alt="Image 5" className="w-32 h-32" />
      </div>
    </div>
  );
};

export default App;
