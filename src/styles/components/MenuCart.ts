import { styled } from "..";
import { keyframes } from "@stitches/react";

const slide = keyframes({
  "0%": { opacity: 0, transform: "translateY(0)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});


export const ContainerMenuCart = styled('div', {
  backgroundColor: '$gray800',
  position: 'absolute',
  height: '100vh',
  minWidth: 480,
  zIndex: 60,
  top: 0,
  right: 0,
  bottom: 0,
  boxShadow: '-17px 2px 29px -3px black',

  transformOrigin: "var(--radix-popover-content-transform-origin)",
  animation: `${slide} 0.3s ease-out`,
  outline: "none",

  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginTop: "2rem",
    marginLeft: 42,
    marginRight: 42,
    fontSize: '$lg',
    fontWeight: 'bold',
  }
})

export const Close = styled('button', {
  cursor: 'pointer',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: 24,
  paddingTop: '2rem',
  paddingRight: '2rem',
  display: 'flex',
  justifyContent: 'flex-end',
})

export const ContainerItems = styled('div', {
  overflowY: 'scroll',
  height: '60%',
  marginLeft: 42,
  marginRight: 42,
  marginTop: 32,
  marginBottom: 32,

  '&::-webkit-scrollbar': {
    width: 8,
    borderRadius: 8,
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray900',
    borderRadius: 8,
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$green500',
    borderRadius: 8,
  },
})

export const OutsideMenuCart = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  right: 400,
  bottom: 0,
  zIndex: 10,
  background: 'red',
  cursor: 'pointer',
  backgroundColor: 'rgba(0,0,0,0.3)',
})