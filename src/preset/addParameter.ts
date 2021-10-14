import { config } from '../breakpoints';

const parameters: any = {};

parameters[config.optionKeys.main] = {};

// set breakpoint names option
parameters[config.optionKeys.main][config.optionKeys.breakpointNames] = {
  'small': '500',
  'large': '1500',
  'medium': '1000'
};

// set debounce option
parameters[config.optionKeys.main][config.optionKeys.debounce] = 200;

export {
  parameters
};
