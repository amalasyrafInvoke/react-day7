import React, { useRef, useEffect } from 'react';
import logo from '../../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../reducer/login';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let emailRef = useRef();
  let passwordRef = useRef();
  const registeredUsers = useSelector(
    (state) => state.register.registeredUsers
  );
  const { email, name, isAuthenticated } = useSelector(
    (state) => state.login
  );

  const submitLogin = () => {
    if (!emailRef.value || !passwordRef.value) {
      alert('Email and Password must be filled');
      return;
    }

    const data = {
      loginData: {
        email: emailRef.value,
        password: passwordRef.value,
      },
      userList: registeredUsers,
    };

    dispatch(loginAction(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('user', JSON.stringify({ email: email, name: name, isAuthenticated: isAuthenticated }));
      navigate('/home');
    }
  }, [isAuthenticated]);

  return (
    <div className='min-h-screen min-w-full bg-gray-200'>
      {/* Blur Background Image Div */}
      <div></div>
      {/* Login Card */}
      <div className='min-h-screen flex flex-col items-center justify-start'>
        <div className='flex flex-col items-center justify-center my-8'>
          <img src={logo} alt='Logo' height={120} width={120} />
          <h1 className='text-3xl font-semibold my-2'>
            Sign in to your account
          </h1>
          <p>
            Or{' '}
            <Link to='/register'>
              <span className='text-blue-400 hover:underline'>
                you can register here
              </span>
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
          <div className='flex items-center justify-between w-full px-6 my-2'>
            <div>
              <input
                className='mx-2'
                type='checkbox'
                name='remember-me'
                id='remember-me'
              />
              <label className='text-gray-700' htmlFor='remember-me'>
                Remember Me
              </label>
            </div>
            <p className='text-blue-700'>Forget your password?</p>
          </div>
          <div className='flex items-center justify-center w-full px-6 my-4'>
            <button
              onClick={() => submitLogin()}
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

export default Login;
