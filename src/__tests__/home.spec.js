import React from 'react';
import {
	act,
	cleanup,
	fireEvent,
	render as reactRender,
	waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import render from '../__mocks__/render';
import HomePage from '../components/HomePage';
import { getDefinition,getTranslation } from '../redux/actions/actions';

jest.mock('../redux/actions/actions');

describe('Multilingual definition view', () => {
	getDefinition.mockImplementation(() => Promise.resolve(request));
	const initialState = {
		definition: [],
        text: {}
	};
	test('Definition of words', async() => {
		const { getByText }  = render(<HomePage/>);
		await waitForElement(()=> getByText('FRENCH'));
	});
});
