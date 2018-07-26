import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'tachyons/css/tachyons.min.css';
import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Robots from './robots';


ReactDOM.render(
   <App robots={Robots}  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
