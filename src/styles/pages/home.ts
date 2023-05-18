import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 1360,
  marginLeft: 'auto',
  padding: '0 10px',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    justifyContent: 'space-between',

    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-out',
    overflow: 'hidden',

    div: {
      display: 'flex',
      flexDirection: 'column',

      gap: '1rem',
    },

    strong: {
      fontSize: '1.25rem',
      color: '$gray100'
    },

    span: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translate(0%)',
      opacity: 1,
    }
  },

  button: {
    background: '$green500',
    borderRadius: 8,
    padding: '0.5rem',
    border: 0,
    cursor: 'pointer',
    width: 52,
    height: 52,
    alignSelf: 'center',

    '&:hover': {
      background: '$green300'
    }
  }
})
