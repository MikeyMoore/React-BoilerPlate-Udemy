import React from 'react';
import Button from './button';

// with '<Button />', I'm creating an instance, a version, of Button (a React component)
const App = () => (
  <div>
    <Button name={'Click'} clicked={() => console.log('clicked')} />
    <Button name={'Search'} />
  </div>
);

export default App;
