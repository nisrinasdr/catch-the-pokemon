import styled from '@emotion/styled'

const media = {
    desktop: '@media(min-width:1000px)'
}

const Button = styled.button`
    border: none;
    border-radius: 0.35em;
    background-color: rgba(254,202,27,255);
    padding: 0.5em 1em;
    margin: 0.5em;
`
const FloatingButton = styled(Button)`
    position: fixed;
    bottom: 1em;
    right: 1em;
    font-weight: bold;

    ${media.desktop}{
        bottom: 3em;
        right: 3em;
    }
`
const RoundButton = styled(Button)`
    position: absolute;
    top: -0.5em;
    right:-0.5em;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.25em;
`

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 2;
`

const Input= styled.input`
      border:none;
      border-bottom: 1px solid rgba(47,109,180,1);
      display: block;
  
`

const SmallFont = styled.p`
    font-size:0.85em;
padding: 0.85em;
`

export { Button, FloatingButton, RoundButton, Pagination, Overlay, Input, SmallFont}