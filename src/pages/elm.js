import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Elm = () => (
  <Terminal>
    <Command input="elm --version" delay={200}>
      <Output>-bash: elm: command not found</Output>
      <Command input="ec -r elm" spinner timeout={300}>
        <Output>
          <Out head="Language" text="elm" />
          <Out head="Version" text="0.18.0" />
        </Output>
        <Command input="elm --version">
          <Output>0.18.0</Output>
          <Command input="ec elm@latest" spinner timeout={1000}>
            <Output>
              <Out head="Language" text="elm" />
              <Select head="Mask">
               <Option value="0.18.x" />
               <Option value="0.17.x" />
               <Option value="0.16.x" selected>
                 <Out head="Mask" text="0.16.x" />
                 <Select head="Version">
                  <Option value="0.16.0" selected>
                    <Out head="Version" text="0.16.0" />
                    <Output>
                      <Command input="elm | grep Platform">
                        <Output>Elm Platform 0.16.0 - a way to run all Elm tools</Output>
                        <Command input="# stuff like that :)">
                          <Output />
                        </Command>
                      </Command>
                    </Output>
                  </Option>
                 </Select>
               </Option>
               <Option value="0.15.x" />
              </Select>
            </Output>
          </Command>
        </Command>
      </Command>
    </Command>
  </Terminal>
);

export default Elm;
