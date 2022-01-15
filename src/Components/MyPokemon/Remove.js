import React from 'react'
import { FaArrowLeft, FaTrash } from 'react-icons/fa'
import { useGlobalContext } from '../../Context'
import { BoxDiv, BoxWrap } from '../Detail/BoxStyles'
import { Button, Overlay } from '../Styles'

function Remove(props) {
    const {removePokemon} = useGlobalContext()

    return (
        <Overlay>
            { props.data && (
                <BoxWrap style={{top:'0'}}>
                <FaArrowLeft onClick={() => props.setRemove(false)}/>
                { props.data[0].nickname.split(", ").map(item => 
                    (<BoxDiv>
                        <img src={props.data[0].sprites.front_default} alt={props.data[0].name} />
                        <div>
                            <p style={{fontWeight:"bold"}}>{props.data[0].name}</p>
                            <p>{item}</p>
                        </div>
                        <Button><FaTrash onClick={() => removePokemon(item, props.data[0])}/></Button>
                    </BoxDiv>)
                )}
                </BoxWrap>)
            }
        </Overlay>
    )
}

export default Remove
