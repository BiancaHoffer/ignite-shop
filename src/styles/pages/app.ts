import { styled } from "..";

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  //justifyContent: 'center',
  height: '100vh',
})

export const Header = styled('div', {
  padding: '4rem 10px',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
})