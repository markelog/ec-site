import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Python = () => (
  <Terminal>
    <Command input="python --version" delay={200}>
      <Output>-bash: python: command not found</Output>
      <Command input="ec python@latest" spinner timeout={1000}>
        <Output>
          <br />
          <Out head="language:" text="python" />
          <Out head="version:" indent="1" text="3.6.0" />
        </Output>
        <Command input="python --version">
          <Output>Python 3.6.0</Output>
          <Command input="ec -r python" spinner timeout={300}>
            <Output>
              <br />
              <Out head="language:" text="python" />
              <Select head="mask:" indent="4">
               <Option value="3.x" />
               <Option value="2.x" selected>
                 <Out head="mask:" indent="4" text="2.x" />
                 <Select head="version:" indent="4">
                  <Option value="2.7.13" />
                  <Option value="2.7.12" />
                  <Option value="2.7.11" />
                  <Option value="2.7.10" selected>
                    <Out head="version:" indent="1" text="2.7.10" />
                    <Output>
                      <Command input="python --version">
                        <Output>Python 2.7.10</Output>
                        <Command input="# stuff like that :)">
                          <Output />
                        </Command>
                      </Command>
                    </Output>
                  </Option>
                  <Option value="2.7.9" />
                  <Option value="2.7.8" />
                 </Select>
               </Option>
               <Option value="2.3.x" />
               <Option value="2.2.x" />
               <Option value="2.1.x" />
              </Select>
            </Output>
          </Command>
        </Command>
      </Command>
    </Command>
  </Terminal>
);

export default Python;
