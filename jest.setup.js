/* eslint-disable import/no-extraneous-dependencies, no-multi-assign, no-undef */
import "jest-enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({
  adapter: new Adapter(),
});
