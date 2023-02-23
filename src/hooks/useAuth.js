import React, { useContext, useState, createContext } from 'react';
import endPoints from '@services/api/index';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}> {children} </AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProviderAuth = () => {
  const [user, setUser] = useState(null);
  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

    if (access_token) {
      const token = access_token.access_token;
      Cookie.set('token', token, { expires: 5 });
    }
  };

  return {
    user,
    signIn,
  };
};
