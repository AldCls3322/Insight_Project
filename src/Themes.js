import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#000000',
    text: '#FFFFFF',
    background: '#24272B',
    colorActive: '#89634B',
    transpText: '#FAFAFA99',    // %60
    lessTranspText: '#FAFAFACC', // %80
    lightColor1: '#f1f6f9',
    lightColor2: '#f4f8fa',
    darkColor3: '#000e29',
    acceptColor: '#33ee77',
    cancelColor: '#CF1F1F',
    activeCancelColor: '#F62424',
    
    color1: "#e0e2db", // beige lightest
    color2: "#d2d4c8", // beige light
    color3: "#b8bdb5", // beige greenish light
    color4: "#889696", // beige aqua light
    color5: "#5f7470", // agua gray light
    color6: "#b9b3ac", // beige
    color7: "#F0F0F0", // Blanco griseish
    color8: "#4A525A", // Gris claro
    color9: "#24272B", // Gris oscuro 
    color10: "#07070A", // negroish
    // Transparent colors
    color96: "#b9b3acE6", // beige 90%
    color56: "#b9b3ac80", // beige 50% //#898476
    color99: "#24272BFA", // Gris oscuro transparent 98%
    color89: "#24272BCC", // Gris oscuro transparent 80%
    color19: "#24272B1A", // Gris oscuro transparent 10%
    color110: "#07070A", // negroish
    body98: '#000000E6', // black 98%
    body50: '#00000080' // black 50%
}

export const darkTheme = {
    body: '#000000',
    text: '#FFFFFF',
    background: '#17161C',
    colorActive: '#F7F4FA',
    transpText: '#F7F4FA99',    // %60
    lessTranspText: '#F7F4FACC', // %80
    lightColor1: '#9CB3FF',
    lightColor2: '#9CB3FF',
    darkColor3: '#1A40BF',
    acceptColor: '#1A40BF',
    cancelColor: '#CF1F1F',
    activeCancelColor: '#F62424',
    
    color1: "#9CB3FF", // beige lightest
    color2: "#9CB3FF", // beige light
    color3: "#6F90FF", // beige greenish light
    color4: "#6F90FF", // beige aqua light
    color5: "#436FFF", // agua gray light
    color6: "#436FFF", // beige
    color7: "#2255FF", // Blanco griseish
    color8: "#2255FF", // Gris claro
    color9: "#1A40BF", // Gris oscuro 
    color10: "#1A40BF", // negroish
    // Transparent colors
    color96: "#b9b3acE6", // beige 90%
    color56: "#b9b3ac80", // beige 50% //#898476
    color99: "#24272BFA", // Gris oscuro transparent 98%
    color89: "#24272BCC", // Gris oscuro transparent 80%
    color19: "#24272B1A", // Gris oscuro transparent 10%
    color110: "#07070A", // negroish
    body98: '#000000E6', // black 98%
    body50: '#00000080' // black 50%
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${( { theme } ) => theme.body};
        color: ${({ theme }) => theme.text};
        //border-color: ${({ theme }) => theme.bordercolor};
        font-family: sans-serif, Tahoma, Helvetica, Arial, Roboto; //Quincy,sans-serif
        transition: all 0.50s linear;
    }
`