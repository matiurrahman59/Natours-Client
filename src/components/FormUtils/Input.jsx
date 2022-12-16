import React from 'react';

const Input = ({ type, placeholder, minLength, onChange, value, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      minLength={minLength}
      onChange={onChange}
      name={name}
      value={value}
      className='form__input'
      autoComplete='on'
      required
    />
  );
};

export default Input;
