import React, { createContext, useContext, useEffect, useState } from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

let auth0Client: Auth0Client;

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

const Auth0Context = createContext<any>(null);

export const Auth0Provider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth0 = async () => {
      try {
        auth0Client = new Auth0Client({
          clientId: "p2d7oLsNo6e2y4JDZ0fsR0GBo9CY2aKC",
          domain: "dev-dhanman.us.auth0.com",
          authorizationParams: {
            redirect_uri: window.location.origin,
            audience: "dev-dhanman-api",
          },
        });

        await auth0Client.checkSession();
        const isLoggedIn = await auth0Client.isAuthenticated();
        setIsAuthenticated(isLoggedIn);

        if (isLoggedIn) {
          const token = await auth0Client.getTokenSilently();
          await AsyncStorage.setItem("serviceToken", token); // Use AsyncStorage for React Native
        }
      } catch (err) {
        console.error("Auth0 initialization error", err);
      } finally {
        setLoading(false);
      }
    };

    initAuth0();
  }, []);

  const login = async (options?: KeyedObject) => {
    if (auth0Client) {
      await auth0Client.loginWithPopup(options);
      const isLoggedIn = await auth0Client.isAuthenticated();

      if (isLoggedIn) {
        const user = await auth0Client.getUser();
        const token = await auth0Client.getTokenSilently();
        await AsyncStorage.setItem("serviceToken", token);
        setIsAuthenticated(true);
      }
    }
  };

  const logout = async () => {
    if (auth0Client) {
      auth0Client.logout({
        // returnTo: window.location.origin,
      });
      await AsyncStorage.removeItem("serviceToken"); // Use AsyncStorage for React Native
      setIsAuthenticated(false);
    }
  };

  return (
    <Auth0Context.Provider value={{ isAuthenticated, login, logout, loading }}>
      {!loading && children}
    </Auth0Context.Provider>
  );
};

export const useAuth0 = () => useContext(Auth0Context);
