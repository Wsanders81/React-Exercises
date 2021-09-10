import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card";

it('should render', () => {
  render(<Carousel/>)
  render(<Card/>)
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it('Returns to first image on left arrow click', () => {
  const { getByTestId} = render(<Carousel/>)
  const { getByText, queryByAltText } = render(<Card/>)
  
  const leftArrow = getByTestId('left-arrow')
  const rightArrow = getByTestId('right-arrow')
  fireEvent.click(rightArrow)
  const caption = getByText("Image 2 of 3",{exact: false})
  expect(caption).toHaveTextContent("Image 2 of 3")
  fireEvent.click(leftArrow)
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();


})

it('hides left and right arrows at beginning and last idx', () => {
  const { getByTestId } = render(<Carousel/>)
  const leftArrow = getByTestId('left-arrow')
  const rightArrow = getByTestId('right-arrow')

  expect(leftArrow).toHaveClass('hidden')

  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)

  expect(rightArrow).toHaveClass('hidden')
})