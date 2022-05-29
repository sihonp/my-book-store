import { red, pink, blue, purple, indigo, grey, cyan } from '@mui/material/colors';
import { typography } from './typography';

export const themes = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: pink[100],
                    main: cyan[600],
                    dark: red[900],
                    contrastText: '#fff',
                },
                secondary: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                    contrastText: '#000',
                },

                background: {
                    // default: deepOrange[900],
                    // paper: deepOrange[900],
                },
                error: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                },
                warning: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                },
                success: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                },
                text: {
                    primary: '#000',
                    secondary: grey[500],
                    dark: '#000',
                },
                divider: grey[400],
                box: {
                    main: red[900],
                    primary: indigo[600],
                    secondary: indigo[800],
                },
                navBar: {
                    main: red[700],
                    dark: red[900],
                    primary: indigo[800],
                }
            }
            : {
                primary: {
                    light: pink[100],
                    main: grey[700],
                    dark: red[900],
                    contrastText: '#fff',
                },
                secondary: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                    contrastText: '#000',
                },

                background: {
                    default: grey[900],
                    paper: grey[800],
                },
                error: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                },
                warning: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                },
                success: {
                    light: blue[100],
                    main: purple[500],
                    dark: purple[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                    dark: '#000',
                },
                divider: grey[800],
                box: {
                    main: grey[800],
                    primary: grey[800],
                    secondary: grey[800],
                },
                navBar: {
                    main: grey[100],
                    dark: grey[100],
                    primary: "#fff"
                }
            }),
    },
    typography: typography,
});