import { styled } from "..";

export const ProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: '4rem',
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',
  padding: '20px 10px',

  '.container-image': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@media (max-width: 860px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  //padding: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',

  img: {
    objectFit: 'contain',
    width: '100%',
  },
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '$2xl',
    color: '$green300',
    fontWeight: 'bold',
  },

  p: {
    marginTop: '2.5rem',
    paddingBottom: '22px',
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bolder',
    fontSize: '$md',
    marginBottom: '20px',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})

