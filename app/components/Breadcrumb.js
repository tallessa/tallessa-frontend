import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ChevronRightIcon from 'material-ui/lib/svg-icons/navigation/chevron-right';

import config from '../config';


const linkStyle = {color: 'white', textDecoration: 'none'};


const ExternalBreadcrumbLink = ({to, children}) => <a href={to} style={linkStyle}>{children}</a>;
const BreadcrumbLink = ({to, children}) => <Link to={to} style={linkStyle}>{children}</Link>;

BreadcrumbLink.propTypes = ExternalBreadcrumbLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
  ]),
};


const BreadcrumbSeparator = () => (
  <ChevronRightIcon
    color="white"
    style={{
      position: 'relative',
      top: '5px',
    }}
  />
);


const Breadcrumb = ({teamName, currentViewPrefix, currentViewTitle}) => (
  <span style={{ lineHeight: '55px' }}>
    <ExternalBreadcrumbLink to="{config.app.url}">{config.app.name}</ExternalBreadcrumbLink>
    {teamName ? <span>
      <BreadcrumbSeparator />
      <BreadcrumbLink to="/">{teamName}</BreadcrumbLink>
    </span> : null}
    {currentViewPrefix && currentViewTitle ? <span>
      <BreadcrumbSeparator />
      <BreadcrumbLink to={currentViewPrefix}>{currentViewTitle}</BreadcrumbLink>
    </span> : null}
  </span>
);


Breadcrumb.propTypes = {
  teamName: PropTypes.string,
  currentViewTitle: PropTypes.string,
  currentViewPrefix: PropTypes.string,
};


const mapStateToProps = (state) => ({
  teamName: state.config.team.name,
  currentViewTitle: state.currentView.viewTitle,
  currentViewPrefix: state.currentView.prefix,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumb);
