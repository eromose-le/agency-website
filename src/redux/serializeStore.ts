import { Storage } from "redux-persist";

const isBrowser = typeof window !== "undefined";

const customStorage: Storage =
  {
    getItem: (key: string): Promise<string | null> => {
      if (!isBrowser) {
        return Promise.resolve(null);
      }
      const value = localStorage.getItem(key);
      return Promise.resolve(value ? JSON.stringify(JSON.parse(value)) : null);
    },
    setItem: (key: string, value: string): Promise<void> => {
      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(JSON.parse(value)));
      }
      return Promise.resolve();
    },
    removeItem: (key: string): Promise<void> => {
      if (isBrowser) {
        localStorage.removeItem(key);
      }
      return Promise.resolve();
    },
  } || {};

export default customStorage;
