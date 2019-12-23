import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render as reactRender } from '@testing-library/react';
import React from 'react';
import reducers from '../redux/reducers/reducers';

const render = (ui, initialState = {}, options = {}) => {
	const store = createStore(
		reducers,
		initialState,
	);
	const Providers = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);
	return reactRender(ui, { wrapper: Providers, ...options });
};

export default render;
