import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import initState from './core/init/store';
import reducers from './core/init/reducers';
import App from './views/components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, initState, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();