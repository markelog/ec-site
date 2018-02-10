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
      <Content>
        <p>
          Eclectica unifies managment of any
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

      <Content>
        <H1>Overview</H1>
        <Terminal style={styles.terminal}>
          <Command input="ec --help" delay={200}>
            <Output>
              <Pre>{
`Usage:
  ec [&lt;language&gt;@&lt;version&gt;] [flags]

Flags:
  -h, --help   help for install

Global Flags:
  -l, --local          Install as local version i.e. language will be installed only to local folder
  -r, --remote         Get remote versions
  -w, --with-modules   Reinstall global modules from the previous version (currently works only for node.js)
`
}
              </Pre>
            </Output>
          </Command>
        </Terminal>
      </Content>

      <Content id="install">
        <H1>Install</H1>
        <Install />
      </Content>
    </Body>
  </div>
);

export default IndexPage;
