import { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
  textInput: {
    field: {
      input: {
        colors: {
          gray: 'border-neutral-light bg-white text-gray-900 focus:border-accent focus:ring-neutral-dark',
          failure:
            'border-red-500 bg-white text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500',
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
