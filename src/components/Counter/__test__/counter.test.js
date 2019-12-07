import React from "react";
import ReactDOM from "react-dom";
import Counter from "../counter";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// incorrect function assignment in the onClick method
// will still pass the tests.

test("the increment method increments count", () => {
  //This is for mouting the component in app
  const wrapper = mount(<Counter />);
  //wrapper.instance() will create a new instance/objct of Counter;
  expect(wrapper.instance().state.count).toBe(0);
  //This will simulate the button click
  wrapper.find("button.counter-button").simulate("click");
  //alternatives
  //wrapper.setState({count: 1})
  // wrapper.instance().increment()
  expect(wrapper.instance().state.count).toBe(1);
});
test("the increment method increments count using set state", () => {
  //This is for mouting the component in app
  const wrapper = mount(<Counter />);
  //wrapper.instance() will create a new instance/objct of Counter;
  expect(wrapper.instance().state.count).toBe(0);
  //This will simulate the button click
  //wrapper.find("button.counter-button").simulate("click");

  //alternatives

  //Here we can directly set the state also
  wrapper.setState({ count: 1 });
  //wrapper.instance().increment();
  expect(wrapper.instance().state.count).toBe(1);
});
