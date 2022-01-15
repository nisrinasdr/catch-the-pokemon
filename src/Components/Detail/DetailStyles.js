import styled from '@emotion/styled'

const media = {
  desktop: '@media(min-width:1000px)'
}

const DetailWrap = styled.div`
  padding: 1em;
  margin: 1em;
  background-color: rgba(47,109,180,0.3);
  border-radius: 0.35em;
  display: flex;
  flex-direction: column;
  column-gap: 1em;
  row-gap: 0.5em;
  align-items: center;

  ${media.desktop}{
    padding: 0 20%;
    flex-direction: row;
    height: calc(100vh - 7em);
    justify-content: center;
    align-items: center;
  }
`
const DetailImageWrap = styled.div`
`

const DetailDiv = styled.div`
  ${media.desktop}{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border: 1px solid rgba(47,109,180,1);
    border-radius: 0.35em;
    background-color: white;
    padding-bottom: 2em;
  }
`

const FeaturedImage = styled.img`
  display: block;
  width: 100%;
`

const TagWrapper = styled.div`
  padding: 0.25em 0;
  text-align: center;
  border-radius: 0.35em;
  display: flex;
  justify-content: center;
  align-items:center;
  column-gap: 1em;
`

const Tag = styled.span`
  background-color: rgba(47,109,180,1);
  color: #fff;
  padding: 0.25em 0.75em;
  text-align: center;
  border-radius: 0.35em;
`

const Title = styled.p`
  font-size: 1.2em;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
`

const TextWrapper = styled.div`
  height: 50vh;
  overflow: scroll;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(47,109,180,1);
  background-color: white;
  border-radius: 0.35em;

  ${media.desktop}{
    width: 50%;
  }
`

const StickyText = styled.div`
  position: sticky;
  top: 0;
  padding: 0.25em 0;
  color: #fff;
  background-color: rgba(47,109,180,1);
`

export { DetailWrap, DetailImageWrap, DetailDiv, FeaturedImage, TagWrapper, Tag, Title, TextWrapper, StickyText }