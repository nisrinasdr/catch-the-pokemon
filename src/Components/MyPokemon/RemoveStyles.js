import styled from '@emotion/styled'

const media = {
  desktop: '@media(min-width:1000px)'
}

const RemoveWrap = styled.div`
  font-size: 1em;
  padding: 1em;

  ${media.desktop}{
    display: flex;
    flex-direction: column;
    align-items:center;
  }
`

const RemoveContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(47,109,180,0.3);
    border-radius: 0.35em;
    margin: 0.5em 0;

    ${media.desktop}{
        width: 50%;
    }
`


export { RemoveWrap, RemoveContent }