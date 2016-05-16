import {indigo900, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
    textColor: indigo900,
  },
  appBar: {
    color: white,
    textColor: indigo900,
    height: 60,
  },
});


export default muiTheme;
