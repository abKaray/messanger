import { useState, createContext, useEffect, useRef } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { axiosApiInstance } from '../../api/apiRequest';
import { BACKEND_TOKEN } from '../../constants/localStorage';

export const AuthContext = createContext({});

export const AuthProviders = props => {
  const [isAuth, setAuthStatus] = useState(false);
  const [savedToken, setCurrentToken] = useState(null);
  const currentToken = useRef();
  currentToken.current = savedToken;
  const { children } = props;

  const {
    storedValue: localStorageToken,
    setValue: setLocalStorage,
    removeValue: removeLocalStorageValue,
  } = useLocalStorage(BACKEND_TOKEN);

  useEffect(() => {
    if (localStorageToken?.token) {
      setAuthStatus(true);
    }
  }, [localStorageToken?.token]);

  useEffect(() => {
    axiosApiInstance.interceptors.request.use(
      async config => {
        // eslint-disable-next-line no-param-reassign
        config.headers = {
          Authorization: currentToken?.current || localStorageToken?.token,
          Accept: 'application/json',
        };
        setAuthStatus(true);

        return config;
      },
      error => {
        setAuthStatus(false);
        Promise.reject(error);
      },
    );

    axiosApiInstance.interceptors.response.use(
      response => {
        setAuthStatus(true);

        return response;
      },
      async function (error) {
        const { response, config } = error;
        const errorStatus = response.status;

        if (errorStatus === 401 && !config.retry) {
          config.retry = true;

          const res = await axiosApiInstance({
            ...config,
            method: 'POST',
            url: '/refreshToken',
            data: { refreshToken: localStorageToken?.refreshToken },
          });
          const { token, refreshToken } = res.data;

          await setLocalStorage({ token, refreshToken });
          await setCurrentToken(token);

          return axiosApiInstance(config);
        }

        if (errorStatus === 401 && config.retry) {
          setAuthStatus(false);
          removeLocalStorageValue();
        }

        return Promise.reject(error);
      },
    );
  }, []);

  return <AuthContext.Provider value={{ isAuth, setAuthStatus, setCurrentToken }}>{children}</AuthContext.Provider>;
};
