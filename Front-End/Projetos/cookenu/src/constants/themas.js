// import { createMuiTheme } from '@mui/icons-material'
// import {createMuiTheme} from 'styled-components';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secundaryColor } from './colors';

const theme = createTheme ({
    palette:{
        primary:{
            main: primaryColor,
            contrastText:'white'
        },
        text: {
            primary: secundaryColor
        }
    }
})
export default theme