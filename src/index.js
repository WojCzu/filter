import { DataProvider } from 'hooks/useData';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Root />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
