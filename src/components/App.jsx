// dependencies
import React from 'react';
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
// icons
import {
  faEnvelope, faKey,
} from '@fortawesome/free-solid-svg-icons';


library.add(
  faEnvelope, faKey
);


const App = (props) => {
  const { children } = props;
  return (
    <main>
      {children}
    </main>
  );
};

export default App;
