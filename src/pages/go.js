import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Go = () => (
  <Terminal>
    <Command input="go version" delay={200}>
      <Output>-bash: go: command not found</Output>
      <Command input="ec go@latest" spinner timeout={1000}>
        <Output>
          <Out head="Language" text="go" />
          <Out head="Version" text="1.10.0-beta1" />
        </Output>
        <Command input="go version">
          <Output>go version go1.10beta1 darwin/amd64</Output>
          <Command input="ec -r go" spinner timeout={300}>
            <Output>
              <Out head="Language" text="go" />
              <Select head="Mask">
                <Option value="1.10.x" />
                <Option value="1.9.x" />
                <Option value="1.8.x" selected>
                  <Out head="Mask" text="1.8.x" />
                  <Select head="Version">
                    <Option value="1.8.4" />
                    <Option value="1.8.3" />
                    <Option value="1.8.2" />
                    <Option value="1.8.1" />
                    <Option value="1.8.0" selected>
                      <Out head="Version" text="1.8.0" style={{ marginBottom: '10px' }} />
                      <Output>
                        <Command input="go version">
                          <Output>go version go1.8 darwin/amd64</Output>
                          <Command input="# stuff like that :)">
                            <Output />
                          </Command>
                        </Command>
                      </Output>
                    </Option>
                  </Select>
                </Option>
                <Option value="1.7.x" />
                <Option value="1.6.x" />
                <Option value="1.5.x" />
                <Option value="1.4.x" />
                <Option value="1.3.x" />
                <Option value="1.2.x" />
              </Select>
            </Output>
          </Command>
        </Command>
      </Command>
    </Command>
  </Terminal>
);

export default Go;
