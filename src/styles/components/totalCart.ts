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
    backgroundColor: '$green300',
    borderRadius: 8,
    border: 'none',
    width: '100%',
    padding: '1.25rem',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: '2rem',
  }
})
