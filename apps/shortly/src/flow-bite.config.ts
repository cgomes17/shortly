import { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
  textInput: {
    field: {
      input: {
        colors: {
          gray: 'border-gray-300 bg-gray-50 text-neutral-dark focus:border-primary focus:ring-cyan-500 placeholder:text-neutral',
          failure:
            'border-secondary bg-white text-secondary placeholder-secondary focus:border-secondary focus:ring-secondary',
        },
      },
    },
  },
  button: {
    color: {
      info: 'border border-transparent font-bold text-white bg-primary enabled:hover:bg-[#99e4e2] text-lg',
      success: 'border border-transparent bg-accent font-bold text-white',
    },
  },
};
