
import { createTheme } from "@mui/material";
import themeTypography from './type.js'

const theme =createTheme({

     palette:{
        mode:'dark',
        primary:{
            main:'#2f8af5'
        },
        background:{
            default:'#06070a',

        },
        Text:{
            secondary:'rgba(255,255,255,0.6)'
        },
     },
     themeTypography
     
 
}

)
export default theme