import {render} from '@testing-library/react';
import React from 'react';
import Cell from './Cell';

test('it renders without crashing', () => {
    render(<Cell/>)
})

test('it should match snapshot',() => {
    const {asFragment} = render(<Cell/>);
    expect(asFragment()).toMatchSnapshot();
})