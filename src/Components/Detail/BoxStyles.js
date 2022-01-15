import styled from '@emotion/styled'

const media = {
  desktop: '@media(min-width:1000px)'
}

const BoxWrap = styled.div`
  padding: 1em;
  background-color: #fff;
  border-radius: 0.35em;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: -4px -8px 23px 7px rgba(0,0,0,0.1);
  overflow: scroll;

  label{
      font-size: 0.9em;
      margin-right: 1em;
  }

  ${media.desktop}{
    width: 50%;
    bottom: 10%;
    right: 25%;
  }

`

const BoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { BoxWrap, BoxDiv }