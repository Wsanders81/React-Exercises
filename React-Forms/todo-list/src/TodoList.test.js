import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'



it('should render without crashing', () => {
    render(<TodoList/>)
})

it('should match snapshot', () => {
    const { asFragment } = render(<TodoList/>)
    expect( asFragment() ).toMatchSnapshot()
})

it('should add new todo', () => {
    const { queryByText, getByLabelText } = render(<TodoList/>)
    const input = getByLabelText("Todo :")
    const btn = queryByText("Submit")
    expect(queryByText('REMOVE')).not.toBeInTheDocument() 
    fireEvent.change(input, {target: {value: "Do Laundry"}})
    fireEvent.click(btn)
    expect(queryByText('REMOVE')).toBeInTheDocument() 
    expect(queryByText('Do Laundry')).toBeInTheDocument() 
 
    
})
it('should delete new todo', () => {
    const { queryByText, getByLabelText } = render(<TodoList/>)
    const input = getByLabelText("Todo :")
    const btn = queryByText("Submit")
    expect(queryByText('REMOVE')).not.toBeInTheDocument() 
    fireEvent.change(input, {target: {value: "Do Laundry"}})
    fireEvent.click(btn)
    const removeBtn = queryByText("REMOVE")
    expect(queryByText('REMOVE')).toBeInTheDocument() 
    expect(queryByText('Do Laundry')).toBeInTheDocument() 
    fireEvent.click(removeBtn)
    expect(queryByText('REMOVE')).not.toBeInTheDocument() 
    expect(queryByText('Do Laundry')).not.toBeInTheDocument() 

    
    
})