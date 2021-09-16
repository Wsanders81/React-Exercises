import React from 'react';
import { render, fireEvent, getAllByLabelText } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList/>)
})

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList/>)
    expect( asFragment()).toMatchSnapshot()
})

it('should add new box', () => {
    const { queryByText, getByLabelText } = render(<BoxList/>)
    const width = getByLabelText("Width :") 
    const height = getByLabelText("Height :") 
    const color = getByLabelText("Color :")  
    const btn = queryByText('Add Box')
    expect(queryByText('REMOVE')).not.toBeInTheDocument() 
    fireEvent.change(width, {target: {value: 5}})
    fireEvent.change(height, {target: {value: 5}})
    fireEvent.change(color, {target: {value: "red"}})
    fireEvent.click(btn)
    expect(queryByText('REMOVE')).toBeInTheDocument() 
})

it('can remove a box', () => {
    const { queryByText, getByLabelText } = render(<BoxList/>)
    const width = getByLabelText("Width :") 
    const height = getByLabelText("Height :") 
    const color = getByLabelText("Color :")  
    const btn = queryByText('Add Box')
    fireEvent.change(width, {target: {value: 5}})
    fireEvent.change(height, {target: {value: 5}})
    fireEvent.change(color, {target: {value: "red"}})
    fireEvent.click(btn)
    const removeBtn = queryByText("REMOVE")
    expect(queryByText('REMOVE')).toBeInTheDocument() 
    fireEvent.click(removeBtn) 
    expect(queryByText('REMOVE')).not.toBeInTheDocument() 
})