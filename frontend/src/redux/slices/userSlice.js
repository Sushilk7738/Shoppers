import { createSlice } from '@reduxjs/toolkit';
import userAPI from '../../mocks/user';

const storedUserInfo = localStorage.getItem("userInfo");

const initialState = {
    userDetails : storedUserInfo ? JSON.parse(storedUserInfo) : null,
    loading : false,
    error : null, 
};