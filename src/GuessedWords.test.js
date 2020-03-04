import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/TestUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
/**
 * @function setup
 * @param {*} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

//the below test is a negative test to see if it DOES NOT throw an error.
test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  //This checks to see if the text component exists defined by attirbute component-guessed-words.
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  //checks to see if the text length is not 0. because if there is text, by definition, the text lenght should be more than 0
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {});
