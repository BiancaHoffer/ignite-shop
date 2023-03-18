
import { styled } from "..";
import { keyframes } from "@stitches/react";

export const ContainerButtonCart = styled('button', {
  backgroundColor: '$gray800',
  borderRadius: 8,
  border: 0,
  position: 'relative',
  height: '3rem',
  width: '3rem',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    opacity: 0.8,
  },

  span: {
    height: 24,
    width: 24,
    backgroundColor: '$green500',
    borderRadius: '100%',
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    color: '$white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const slide = keyframes({
  "0%": { opacity: 0, transform: "translateX(10px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});

export const Content = styled('div', {
  minWidth: 480,
  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  transformOrigin: "var(--radix-popover-content-transform-origin)",
  animation: `${slide} 0.5s ease-out`,
  outline: "none",

  '.teste': {
    marginRight: 48,
    marginLeft: 48,
    marginTop: 32,
    marginBottom: '8rem',
    overflow: 'scroll',
    overflowX: 'hidden',

    '&::-webkit-scrollbar': {
      width: 8,
    },

    '&::-webkit-scrollbar-track': {
      background: '$gray800',
      borderRadius: 8,
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$green500',
      borderRadius: 8,
    },
  },

  section: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    marginRight: 48,
    marginLeft: 48,


    button: {
      gridColumn: '1/3',
      background: '$green500',
      color: '$white',
      fontWeight: '500',
      fontSize: '$md',
      borderRadius: 8,
      border: 'none',
      padding: '1.25rem',
      cursor: 'pointer',
      marginTop: '3rem',
      marginBottom: 32,

      '&:hover': {
        background: '$green300'
      }
    },

    span: {
      display: 'flex',
      justifyContent: 'end',
    }
  }
})

export const Close = styled('div', {
  cursor: 'pointer',
  background: 'transparent',
  border: 0,
  width: 24,
  height: 24,
  marginLeft: 'auto',
  marginTop: '2rem',
  marginRight: '2rem',
})