import { indigo900 } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette'


const muiTheme = createMuiTheme({
  palette: createPalette({
    shades: {
      light: {
        text: {
          primary: indigo900,
        },
      },
    },
  }),
});


export default muiTheme;
