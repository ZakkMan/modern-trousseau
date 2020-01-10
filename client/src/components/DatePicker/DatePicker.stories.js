import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from './DatePicker';


function handleChange(event) {
  event.preventDefault();
  event.onChange(event.target.value);
}


storiesOf('DatePicker', module)

    .add('DatePicker', () => <DatePicker label={"Requested Date*"} name={"Requested Date"} value={"November 11"} min={"February 29, 2020"} step={"1"} max={"February 28, 2022"} onChange={handleChange}/>)
