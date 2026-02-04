/* eslint-disable import/no-extraneous-dependencies, no-multi-assign, no-undef */
import 'jest-canvas-mock';
import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter: new Adapter(),
});
