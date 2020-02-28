import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";
import { findByTestAttr } from "../test/TestUtils";

/**
 * factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {*} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
//setup unique to each component which is why we are not centralizing that.
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "component-congrats");
  expect(message.text().length).not.toBe(0);
});
