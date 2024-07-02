import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { Chance } from "chance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Reducer and actions
import { LOGIN, LOGOUT } from "./auth-reducer/actions";
import authReducer from "./auth-reducer/auth";
import { AuthProps, JWTContextType } from "../types/auth";
import { jwtDecode } from "jwt-decode";

const chance = new Chance();

// Initial state
const initialState: AuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = async (serviceToken?: string | null) => {
  if (serviceToken) {
    await AsyncStorage.setItem("serviceToken", serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    await AsyncStorage.removeItem("serviceToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

// JWT Context and Provider
const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = await AsyncStorage.getItem("serviceToken");
        if (serviceToken && verifyToken(serviceToken)) {
          await setSession(serviceToken);
          const response = await axios.get("/api/account/me");
          const { user } = response.data;
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user,
            },
          });
        } else {
          dispatch({
            type: LOGOUT,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT,
        });
      }
    };

    init();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post("/api/account/login", {
      email,
      password,
    }); // Adjust the endpoint to your API
    const { serviceToken, user } = response.data;
    await setSession(serviceToken);
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user,
      },
    });
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const id = chance.bb_pin();
    const response = await axios.post("/api/account/register", {
      id,
      email,
      password,
      firstName,
      lastName,
    });
    let users = response.data;

    const localUsers = await AsyncStorage.getItem("users");
    if (localUsers !== null) {
      users = [
        ...JSON.parse(localUsers),
        {
          id,
          email,
          password,
          name: `${firstName} ${lastName}`,
        },
      ];
    }

    await AsyncStorage.setItem("users", JSON.stringify(users));
  };

  const logout = async () => {
    await setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email: string) => {};

  const updateProfile = () => {};

  const contextValue = useMemo(
    () => ({
      ...state,
      login,
      logout,
      register,
      resetPassword,
      updateProfile,
    }),
    [state, login, logout, register, resetPassword, updateProfile]
  );

  if (state.isInitialized !== undefined && !state.isInitialized) {
    console.log("loading");
  }

  return (
    <JWTContext.Provider value={contextValue}>{children}</JWTContext.Provider>
  );
};

export default JWTContext;
