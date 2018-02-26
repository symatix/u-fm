
import { createMuiTheme } from 'material-ui/styles';
import {
	grey300,
	blueGrey,
	teal,
	white,
	darkBlack,
	fullBlack
} from 'material-ui/colors';
import { fade } from 'material-ui/styles/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const theme = createMuiTheme({
	spacing: spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary: blueGrey,
		secondary:white,
		accent:teal,
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade('#461308', 0.3),
		pickerHeaderColor: '#461308',
		clockCircleColor: fade('#461308', 0.07),
		shadowColor: fullBlack,
	},
	ripple: {
    color: 'green',
  },
});


export default theme;




/*
import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#000',
    },
    secondary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#fff',
    },
  },
});

export default theme;
*/