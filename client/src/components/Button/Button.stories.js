import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button>This is a Button</Button>)
    .add('Details', () => <Button label="details" type="details"/>)