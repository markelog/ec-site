import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Rust = () => (
  <Terminal>
    <Command input="rustc --version" delay={200}>
      <Output>-bash: rustc: command not found</Output>
      <Command input="ec rust@latest" spinner timeout={1000}>
        <Output>
          <Out head="Language" text="rust" />
          <Out head="Version" text="1.23.0" />
        </Output>
        <Command input="rustc --version">
          <Output>rustc 1.23.0 (766bd11c8 2018-01-01)</Output>
          <Command input="ec -r rust" spinner timeout={300}>
            <Output>
              <Out head="Language" text="rust" />
              <Select head="Mask">
                <Option value="1.x" selected>
                  <Out head="Mask" text="1.x" />
                  <Select head="Version">
                    <Option value="1.23.0" />
                    <Option value="1.22.1" />
                    <Option value="1.22.0" />
                    <Option value="1.21.0" />
                    <Option value="1.20.0" selected>
                      <Out head="Version" text="1.2.0" />
                      <Output>
                        <Command input="rustc --version">
                          <Output>v1.20.0</Output>
                          <Command input="# stuff like that :)">
                            <Output />
                          </Command>
                        </Command>
                      </Output>
                    </Option>
                  </Select>
                </Option>
                <Option value="0.x" />
              </Select>
            </Output>
          </Command>
        </Command>
      </Command>
    </Command>
  </Terminal>
);

export default Rust;
