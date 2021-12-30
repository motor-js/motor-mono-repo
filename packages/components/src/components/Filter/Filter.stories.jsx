// Button.stories.js|jsx
import React from 'react';
import Filter from './Filter';
import { useList } from '@motor-js/engine'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@motor-js/theme';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Filter',
  component: Filter,
  argTypes: {
    colorTheme: { 
      name: 'Color Theme' 
    },
  },
};

const Template = (args) => {
  
  const dimension = ['BURGER']

  const { 
    listData,
    motorListProps,
  } = useList({ dimension })

  return (
    <Filter 
      listData={listData} 
      motorListProps={motorListProps} 
      {...args} 
    />
  )

};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  colorTheme: 'red',
  label: 'Button',
};