import { styled } from "..";

export const TotalContainer = styled('section', {
  height: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end ',
  marginLeft: 42,
  marginRight: 42,
  marginBottom: 32,

  button: {
    backgroundColor: '$green500',
    borderRadius: 8,
    border: 'none',
    width: '100%',
    padding: '1.25rem',
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: '2rem',
    '-webkit-box-shadow': '-2px 2px 29px -3px black',
    boxShadow: '-2px 2px 29px -3px black',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
      color: '$white',
    }
  },

  div: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr 1fr',
  },

  '.quantity': {

  },

  '.item': {
    textAlign: 'end',
  },

  '.total': {
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: 16,
  },

  '.total-value': {
    textAlign: 'end',
    fontSize: '$xl',
    fontWeight: 'bold',
    marginTop: 16,
  }
})
