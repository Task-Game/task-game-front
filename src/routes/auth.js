import { createContext } from 'react';

const User = createContext({
    token:null,
    setToken: () => {},
});

export default User;