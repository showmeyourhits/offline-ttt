// @flow

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import AppComponent from 'src/client/components/AppComponent';

const store = createStore(() => 'store', 'ass');

ReactDOM.render(
	<Provider store={store}>
		<AppComponent />
	</Provider>,
	document.getElementById('app'),
);
