import React, { useContext, useState } from 'react'
import { themes } from '../styles/Themes';

const themeContext = React.createContext();
const themeUpdateContext = React.createContext();

export const themeProvider = ({ children }) =>{

}

export const useThemeContext = () => {
    return useContext(themeContext);
}

export const useThemeUpdateContext = () => {
    return useContext(themeUpdateContext);
}