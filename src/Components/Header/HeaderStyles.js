import styled from '@emotion/styled'

const HeaderWrap = styled.div`
  font-size: 1em;
  padding: 1em;
  background-color: rgba(47,109,180,1);
  display: flex;
  justify-content: space-between;
  align-item: center;

  h1 {
      color: #fff;
  }
`

const BigIcon = styled.span`
  font-size: 1.25em;
  color: #fff;
  display: flex;
  align-items: center
`

export { HeaderWrap, BigIcon }