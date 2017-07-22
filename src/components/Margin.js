import React, {PropTypes} from 'react';


const defaultMargin = '1em';


const Margin = ({children}) => <div style={{margin: defaultMargin}}>{children}</div>;


Margin.propTypes = {
  children: PropTypes.object,
};


export default Margin;
