import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Nodejs = () => (
  <Terminal>
    <Command input="node --version" delay={200}>
      <Output>-bash: node: command not found</Output>
      <Command input="ec node@latest" spinner timeout={1000}>
        <Output>
          <br />
          <Out head="language:" text="node" />
          <Out head="version:" indent="1" text="9.8.0" />
        </Output>
        <Command input="node --version">
          <Output>v9.8.0</Output>
          <Command input="ec -r node" spinner timeout={300}>
            <Output>
              <br />
              <Out head="language:" text="node" />
              <Select head="mask:" indent="4">
                <Option value="9.x" />
                <Option value="8.x" />
                <Option selected value="7.x">
                  <Out head="mask:" indent="4" text="7.x" />
                  <Select head="version:" indent="1">
                    <Option value="7.10.1" />
                    <Option value="7.10.0" />
                    <Option value="7.9.0" />
                    <Option value="7.8.0" />
                    <Option value="7.7.4" selected>
                      <Out head="version:" indent="1" text="7.7.4" />
                      <Output>
                        <Command input="node --version">
                          <Output>v7.7.4</Output>
                          <Command input="# stuff like that :)">
                            <Output />
                          </Command>
                        </Command>
                      </Output>
                    </Option>
                    <Option value="7.7.3" />
                    <Option value="7.7.2" />
                    <Option value="7.7.1" />
                    <Option value="7.7.0" />
                  </Select>
                </Option>
                <Option value="6.x" />
                <Option value="5.x" />
                <Option value="4.x" />
                <Option value="0.x" />
              </Select>
            </Output>
          </Command>
        </Command>
      </Command>
    </Command>
  </Terminal>
);

export default Nodejs;
