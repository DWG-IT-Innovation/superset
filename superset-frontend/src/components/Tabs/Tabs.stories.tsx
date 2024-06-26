/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import Tabs, { TabsProps } from '.';

const { TabPane } = Tabs;

export default {
  title: 'Tabs',
  component: Tabs,
};

export const InteractiveTabs = (args: TabsProps) => (
  <Tabs {...args}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

InteractiveTabs.args = {
  defaultActiveKey: '1',
  animated: true,
  centered: false,
  fullWidth: false,
  allowOverflow: false,
};

InteractiveTabs.argTypes = {
  onChange: { action: 'onChange' },
  type: {
    defaultValue: 'line',
    control: {
      type: 'inline-radio',
    },
    options: ['line', 'card', 'editable-card'],
  },
};
