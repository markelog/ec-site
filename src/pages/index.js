import React from 'react';

import Body from '../components/Body';
import Install from '../components/Install';
import Content from '../components/Content';
import H1 from '../components/H1';
import Link from '../components/Link';
import Terminal from '../components/Terminal';
import Pre from '../components/Pre';
import Command, { Output } from '../components/Command';

const styles = {
  container: {
    margin: '6rem 0'
  },

  terminal: {
    marginTop: 0
  }
};

const IndexPage = () => (
  <div style={styles.container}>
    <Body>
      <Content id="main">
        <p>
          Eclectica unifies management of any
          language under one cohesive and minimalistic interface.<br />
        </p>

        <p>
          Like&nbsp;
          <Link href="https://github.com/pyenv/pyenv">pyenv</Link> for Python,&nbsp;
          <Link href="https://github.com/rbenv/rbenv">rbenv</Link> for Ruby,&nbsp;
          <Link href="https://github.com/creationix/nvm">nvm</Link> for Node.js
          and etc. Managing multiple languages and doing it in a little more enjoyable fashion
        </p>
      </Content>

      <Content id="install">
        <H1>Install</H1>
        <Install />
      </Content>

      <Content id="overview">
        <H1>Overview</H1>
        <Terminal style={styles.terminal}>
          <Command input="ec --help" delay={200}>
            <Output>
              <Pre>{
`Usage:
  ec [command] [flags] [&lt;language&gt;@&gt;&lt;version&gt;]

Examples:
  Install specifc version
  $ ec node@6.4.0

  Choose local version with interactive list
  $ ec go

  Choose remote version with interactive list
  $ ec -r rust

Available Commands:
  ls                list installed language versions
  remove-everything removes everything related to the eclectica
  rm                remove language version
  version           print version of Eclectica

Flags:
  -h, --help           help for ec
  -l, --local          install to the current folder only
  -r, --remote         ask for remote versions
  -w, --with-modules   reinstall global modules from the previous version (currently works only for node.js)

Use "ec [command] --help" for more information about a command
`
}
              </Pre>
            </Output>
          </Command>
        </Terminal>
      </Content>
    </Body>
  </div>
);

export default IndexPage;
