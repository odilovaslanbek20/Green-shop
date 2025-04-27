import React from 'react';
import { loginWithPopup } from '../../../firebase';
import axios from 'axios';

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await loginWithPopup();
      const user = result.user;
      console.log("User info:", user);

      const fullName = user.displayName || "";
      const [name, surname = ""] = fullName.split(" ");

      const email = user.email;
      const password = user.uid;

      const userData = {
        name,
        surname,
        email,
        password
      };

      const response = await axios.post('https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927', userData);
      console.log('Register Success:', response.data);

      localStorage.setItem('name', name);

    } catch (error) {
      console.error("Login yoki APIga yuborishda xato:", error);
    }
  };

  return (
    <div>
      <button className='border rounded px-[20px] py-[6px] mt-[20px]' onClick={handleLogin}>
        <p className='text-[20px] font-semibold'>Google bilan kirish</p>
      </button>
    </div>
  );
};

export default Login;
