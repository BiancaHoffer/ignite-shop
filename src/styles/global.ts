import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    background: '$gray900',
    color: '$gray100',
    'webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'body::-webkit-scrollbar': {
    width: '8px',
  },

  'body::-webkit-scrollbar-track': {
    background: '#121214',
  },

  'body::-webkit-scrollbar-thumb': {
    backgroundColor: '#00875F',
  },

})


