import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

import { findByTestAttr } from "../test/TestUtils";

const setup = () => {
  return shallow(<Input />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
