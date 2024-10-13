import React, { useState, useEffect } from 'react';

const Filter = ({ buttonContent, setCategory, category }) => {
  const [activeButtonId, setActiveButtonId] = useState(null);

  useEffect(() => {
    if (!category) {
      setCategory('All'); 
    }
  }, [category, setCategory]);

  const handleButtonClick = (id, title) => {
    setActiveButtonId(id);
    filterHandler(title);
  };

  function filterHandler(title) {
    setCategory(title); 
  }

  return (
    <div className="buttonClass">
      {buttonContent.map((data) => (
        <button
          className={`btn-main
            ${activeButtonId === data.id ? 'highlight' : ''}`}
          key={data.id}
          onClick={() => handleButtonClick(data.id, data.title)} 
        >
          {data.title}   {/* content of the button **/}
        </button>
      ))}
    </div>
  );
};

export default Filter;
