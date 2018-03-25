import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import 'normalize.css';
import '../components/roboto/roboto.css';
import '../components/general/general.css';

import Header from '../components/Header';
import Body from '../components/Body';

import styles from './styles';

const theme = createMuiTheme();

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider sheetsManager={new Map()} theme={theme}>
    <div style={styles.container}>
      <Helmet
        title="Cool and eclectic version manager for any language"
        meta={[
          { name: 'description', content: 'Eclectic version manager for any language' },
          { name: 'keywords', content: 'eclectica, version, manager, binary, environment, ruby, python, elm, golang, go, rust' },
        ]}
      />
      <Header />
      <Body>
        {children()}
      </Body>
    </div>
  </MuiThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
