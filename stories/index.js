import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
<<<<<<< HEAD
=======
import AllStudents from '../app/components/AllStudents'

>>>>>>> d6be41e94f8dc2adba7d02a6e056b51cead76713

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
<<<<<<< HEAD
=======

const fakeStudents = [
  {id:1, campus:{name:'Valley High'}, campusId:4, name:''}
]

storiesOf('All Students', module).add('to Storybook', () =>     <AllStudents />);
  
>>>>>>> d6be41e94f8dc2adba7d02a6e056b51cead76713
