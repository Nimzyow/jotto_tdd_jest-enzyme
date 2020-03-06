import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/TestUtils";
import App from "./App";

/**
 * setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test("renders learn react link", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
