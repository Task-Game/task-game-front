import { createContext } from 'react';
import axios from 'axios';
import api from './api';

const User = createContext({
    token:null,
    setToken: () => {},
});

export default User;