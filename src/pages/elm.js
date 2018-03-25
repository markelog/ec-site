import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Elm = () => (
  <Terminal>
    <Command input="elm --version" delay={200}>
      <Output>-bash: elm: command not found</Output>
      <Command input="ec elm@latest" spinner timeout={300}>
        <Output>
          <br />
          <Out head="language:" text="elm" />
          <Out indent="1" head="version:" text="0.18.0" />
        </Output>
        <Command input="elm --version">
          <Output>0.18.0</Output>
          <Command input="ec -r elm" spinner timeout={1000}>
            <Output>
              <br />
              <Out head="language:" text="elm" />
              <Select indent="4" head="mask:">
               <Option value="0.18.x" />
               <Option value="0.17.x" />
               <Option value="0.16.x" selected>
                 <Out indent="4" head="mask:" text="0.16.x" />
                 <Select indent="1" head="version:">
                  <Option value="0.16.0" selected>
                    <Out indent="1" head="version:" text="0.16.0" />
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
