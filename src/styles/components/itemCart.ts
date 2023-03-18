import { styled } from "..";

export const ContainerItem = styled('div', {
  display: 'grid',
  gridTemplateColumns: '20% auto',
  alignItems: 'center',
  gap: '2.5rem',

  marginTop: 32,
  marginBottom: 32,
})

export const ContainerImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  height: 93,
  width: 93,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ContainerInfos = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: 8,

  h3: {
    color: '$gray300',
    fontWeight: '400',
    fontSize: '$md',
  },

  span: {
    fontWeight: '600',
    fontSize: '$md',
  },

  button: {
    fontSize: 16,
    fontWeight: '600',
    color: "$green500",
    backgroundColor: 'transparent',
    border: 'none',
    width: "fit-content",
    marginTop: 4,
  }
})