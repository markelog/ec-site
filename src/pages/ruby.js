import React from 'react';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';
import Select, { Option } from '../components/Select';
import Out from '../components/Out';

const Ruby = () => (
  <Terminal>
    <Command input="ruby --version" delay={200}>
      <Output>-bash: ruby: command not found</Output>
      <Command input="ec ruby@latest" spinner timeout={1000}>
        <Output>
					<br/>
          <Out head="language:" text="ruby" />
          <Out head="version:" indent="1" text="2.5.0" />
        </Output>
        <Command input="ruby --version">
          <Output>ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin17]</Output>
          <Command input="ec -r ruby" spinner timeout={300}>
            <Output>
							<br/>
              <Out head="language:" text="ruby" />
              <Select head="mask:" indent="4">
               <Option value="2.5.x" />
               <Option value="2.4.x" selected>
                 <Out head="mask:" indent="4" text="2.4.x" />
                 <Select head="version:" indent="1">
                  <Option value="2.4.3" />
                  <Option value="2.4.2" />
                  <Option value="2.4.1" selected>
                    <Out head="version:" indent="1" text="2.4.1" />
                    <Output>
                      <Command input="ruby --version">
                        <Output>
                          ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin17]
                        </Output>
                        <Command input="# stuff like that :)">
                          <Output />
                        </Command>
                      </Command>
                    </Output>
                  </Option>
                  <Option value="2.4.0" />
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

export default Ruby;
