import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

import { findByTestAttr, checkProps } from "../test/TestUtils";

const defaultProps = {
  secretWord: "party"
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(Input, expectedProps);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    //below will clear the mockSetCurrentGuess double so that it doesn't carry on the results to the next tests
    mockSetCurrentGuess.mockClear();
    //we grab the useState and set the mock below
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    //jest.fn just sets it up so that its a mock

    const inputBox = findByTestAttr(wrapper, "input-box");

    //mock event
    // we set the target.value to be train here. and assign it to mockEvent
    const mockEvent = { target: { value: "train" } };
    //when we click on input we pass mock Event
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
