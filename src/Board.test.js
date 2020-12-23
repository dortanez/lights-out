import {render} from '@testing-library/react';
import React from 'react';
import Board from './Board';

test('it renders without crashing', () => {
    render(<Board/>)
})

test('it should match snapshot',() => {
    const {asFragment} = render(<Board nrows={3} ncols={3} chanceLightStartsOn={.50}/>);
    expect(asFragment()).toMatchSnapshot();
})