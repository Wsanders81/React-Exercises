import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', () => {
    render(<Box width={5} height={5} color="blue"/>)
})

it('matches snapshot', () => {
    const { asFragment } = render(<Box width={5} height={5} color="blue"/>)
    expect(asFragment()).toMatchSnapshot()
})