import React, { useState } from 'react';
import axios from 'axios';
// internal import
import Input from '../components/FormUtils/Input';
import Label from '../components/FormUtils/Label';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../store/user/user.action';
import { useLocation, useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [err, setErr] = useState();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/v1/users/login',
        data: {
          email,
          password,
        },
      });
      dispatch(setCurrentUser(res.data.data.user));
      setErr(null);
      resetFormFields();
      navigate('/');
    } catch (err) {
      if (err.response.status === 401) setErr('Incorrect email or password!');
      if (err.response.status === 400)
        setErr('Please provide email and password!');
    }
  };

  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
        <form onSubmit={onSubmit} className='form'>
          <div className='form__group'>
            <Label title='Email address' htmlFor='email' />
            <Input
              type='email'
              placeholder='you@example.com'
              onChange={onChange}
              name='email'
              value={email}
            />
          </div>
          <div className='form__group ma-bt-md'>
            <Label title='Password' htmlFor='password' />
            <Input
              type='password'
              placeholder='********'
              minLength='8'
              onChange={onChange}
              name='password'
              value={password}
            />
          </div>
          {err && (
            <span className='form__label' style={{ color: 'red' }}>
              {err}
            </span>
          )}
          <div className='form__group'>
            <button type='submit' className='btn btn--green'>
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LogIn;
