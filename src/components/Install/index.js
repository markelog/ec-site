import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import styles from './styles';

function TabContainer(props) {
  return (
    <Typography component="div" style={styles.tab}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Install extends React.Component {
  state = {
    value: 'wget',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  wget() {
    return (
      <div>
        <section style={styles.paper}>
          {'$ wget -qO - https://raw.githubusercontent.com/markelog/ec-install/master/scripts/install.sh | sh'}
        </section>

        <p style={styles.para}>
          Default installation folder is
          &nbsp;<span style={styles.highlight}>/usr/local/bin</span>,
          so you might need to execute sh with sudo like this –
        </p>

        <section style={styles.paper}>
          {'$ wget -qO - https://raw.githubusercontent.com/markelog/ec-install/master/scripts/install.sh | sudo sh'}
        </section>

        <p style={styles.para}>
          if you need to install it to your
          &nbsp;<span style={styles.highlight}>$HOME</span> for example, do this
          Default installation folder is
        </p>

        <section style={styles.paper}>
          {'$ wget -qO - https://raw.githubusercontent.com/markelog/ec-install/master/scripts/install.sh | EC_DEST=~/bin sh'}
        </section>
      </div>
    );
  }

  curl() {
    return (
      <div>
        <section style={styles.paper}>
          {'$ curl -s https://raw.githubusercontent.com/markelog/ec-install/master/scripts/install.sh | sh'}
        </section>

        <p style={styles.para}>
          Default installation folder is
          &nbsp;<span style={styles.highlight}>/usr/local/bin</span>,
          so you might need to execute sh with sudo like this –
        </p>

        <section style={styles.paper}>
          {'$ curl -s https://raw.githubusercontent.com/markelog/ec-install/master/scripts/install.sh | sudo sh'}
        </section>

        <p style={styles.para}>
          if you need to install it to your
          &nbsp;<span style={styles.highlight}>$HOME</span> for example, do this
          Default installation folder is
        </p>

        <section style={styles.paper}>
          {'$ curl -s https://raw.githubusercontent.com/markelog/ec-install/master/scripts/install.sh | EC_DEST=~/bin sh'}
        </section>
      </div>
    );
  }

  go() {
    return (
      <section style={styles.paper}>
        {'$ go get github.com/markelog/eclectica/bin/{ec,ec-proxy}'}
      </section>
    );
  }

  npm() {
    return (
      <section style={styles.paper}>
        {'$ [sudo] npm install -g eclectica'}
      </section>
    );
  }

  pip() {
    return (
      <section style={styles.paper}>
        {'$ sudo -H pip install -v eclectica'}
      </section>
    );
  }

  gem() {
    return (
      <section style={styles.paper}>
        {'$ sudo gem install eclectica'}
      </section>
    );
  }

  cargo() {
    return (
      <section style={styles.paper}>
        {'$ cargo install eclectica'}
      </section>
    );
  }

  render() {
    const { value } = this.state;

    return (
      <div style={styles.container}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor={styles.indicatorColor}
          fullWidth
          scrollable
        >
          <Tab value="wget" label="wget" />
          <Tab value="curl" label="curl" />
          <Tab value="go" label="go get" />
          <Tab value="npm" label="npm" />
          <Tab value="cargo" label="cargo" />
          <Tab value="pip" label="pip" />
          <Tab value="gem" label="gem" />
        </Tabs>
        {value === 'wget' && <TabContainer>{this.wget()}</TabContainer>}
        {value === 'curl' && <TabContainer>{this.curl()}</TabContainer>}
        {value === 'go' && <TabContainer>{this.go()}</TabContainer>}
        {value === 'npm' && <TabContainer>{this.npm()}</TabContainer>}
        {value === 'pip' && <TabContainer>{this.pip()}</TabContainer>}
        {value === 'gem' && <TabContainer>{this.gem()}</TabContainer>}
        {value === 'cargo' && <TabContainer>{this.cargo()}</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(Install);
