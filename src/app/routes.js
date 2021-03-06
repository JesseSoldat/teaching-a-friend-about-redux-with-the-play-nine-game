import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Game from './components/play-nine/Game';

export default (
<Route path="/" component={App}>
	<IndexRoute component={Home} />
	<Route path="/play-nine" component={Game}/>
	
</Route>
)