"use client";

import { extendTheme, ThemeConfig} from "@chakra-ui/react";

const theme = extendTheme({
    colors:{
        gray:{
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#898989',
            500: '#a9a9a9',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111'
        }
    }
 });

export default theme;