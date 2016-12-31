import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import ReduxPromise from 'redux-promise';

import reducer from './reducers';
import routes from './routes';

import 'bootstrap-social';
import './bundle.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducer)}>
	<Router history={browserHistory} routes={routes} >
	</Router>
</Provider>, document.querySelector('.react-root')
)

