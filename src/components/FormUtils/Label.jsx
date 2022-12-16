import React from 'react';

const Label = ({ title, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className='form__label'>
      {title}
    </label>
  );
};

export default Label;
