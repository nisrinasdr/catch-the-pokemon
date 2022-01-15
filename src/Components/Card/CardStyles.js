import styled from '@emotion/styled'

const media = {
  desktop: '@media(min-width:1000px)'
}

const CardWrap = styled.div`
  font-size: 1em;
  padding: 1em 0;
  display: grid;
  grid-template-columns: repeat(2,  calc(100% / 2 - 1em));
  justify-content: center;

  ${media.desktop}{
    grid-template-columns: repeat(4,  calc(100% / 4 - 1em));
  }
`

const CardContent = styled.div`
  margin: 0.5em;
  background-color: rgba(47,109,180,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.35em;
  color: #000;
`

const CardDiv = styled.div`
  position: relative;
`

const BlockParagraph = styled.p`
  background-color: rgba(47,109,180,1);
  width: 100%;
  padding: 0.25em 0;
  margin-top: 0.25em;
  text-align: center;
  border-radius: 0 0 0.35em 0.35em;
`

export { CardWrap, CardContent, CardDiv, BlockParagraph }