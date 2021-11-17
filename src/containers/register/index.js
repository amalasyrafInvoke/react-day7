import React, { useRef, useEffect } from 'react';
import logo from '../../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../reducer/register';

const Register = () => {
  const dispatch = useDispatch();
  let emailRef = useRef();
  let passwordRef = useRef();
  let nameRef = useRef();
  const registeredUsers = useSelector((state) => state.register.registeredUsers);

  const submitRegister = () => {
    if (!emailRef.value || !passwordRef.value || !nameRef.value) {
      alert('All fields must be filled');
      return;
    }

    const data = {
      email: emailRef.value,
      password: passwordRef.value,
      name: nameRef.value
    };

    dispatch(register(data));
    emailRef.value = '';
    passwordRef.value = '';
    nameRef.value = '';

  };

  useEffect(() => {
    alert('New users successfully created');
  }, [registeredUsers])

  return (
    <div className='min-h-screen min-w-full bg-gray-200'>
      {/* Blur Background Image Div */}
      <div></div>
      {/* Login Card */}
      <div className='min-h-screen flex flex-col items-center justify-start'>
        <div className='flex flex-col items-center justify-center my-8'>
          <img src={logo} alt='Logo' height={120} width={120} />
          <h1 className='text-3xl font-semibold my-2'>Sign up!</h1>
          <p>
            Or{' '}
            <Link to='/'>
              <span className='text-blue-400 hover:underline'>click here to login</span>
            </Link>
          </p>
        </div>
        {/* The input card */}
        <div className='flex flex-col items-center justify-center my-2 w-1/2 rounded-lg shadow-lg p-8 bg-gray-200'>
          <div className='flex flex-col items-start justify-center my-2 w-full px-6'>
            <label className='text-gray-700' htmlFor='email'>
              Email Address
            </label>
            <input
              className='w-full p-2 text-center rounded-md my-4 shadow-md bg-gray-100'
              type='email'
              id='email'
              placeholder='Enter your email'
              ref={(el) => (emailRef = el)}
            />
          </div>
          <div className='flex flex-col items-start justify-center my-2 w-full px-6'>
            <label className='text-gray-700' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full p-2 text-center rounded-md my-4 shadow-md bg-gray-100'
              type='text'
              id='name'
              placeholder='Enter your name'
              ref={(el) => (nameRef = el)}
            />
          </div>
          <div className='flex flex-col items-start justify-center my-2 w-full px-6'>
            <label className='text-gray-700' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full p-2 text-center rounded-md my-4 shadow-md bg-gray-100'
              type='password'
              id='password'
              placeholder='Enter your password'
              ref={(el) => (passwordRef = el)}
            />
          </div>
          <div className='flex items-center justify-center w-full px-6 my-4'>
            <button
              onClick={() => submitRegister()}
              className='p-2 rounded-md bg-indigo-800 text-indigo-50 w-full'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
