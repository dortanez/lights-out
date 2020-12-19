import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './Board';
import Cell from './Cell';

test('it renders without crashing', ( => {
    render(<App/>)
}))

test('it renders without crashing', ( => {
    render(<Board/>)
}))

test('it renders without crashing', ( => {
    render(<Cell/>)
}))