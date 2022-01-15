import React from 'react'
import { Title } from '../Detail/DetailStyles'
import { SmallFont } from '../Styles'
import { BlockParagraph, CardContent } from './CardStyles'

function Card(props) {
    return (
        <CardContent>
            <img src={props.pic} alt={props.name} />
            <Title>{props.name}</Title>
            {props.nickname? <SmallFont><strong>Nickname</strong> {props.nickname}</SmallFont>:null}
            <BlockParagraph>Owned {props.owned? props.owned:0}  </BlockParagraph>
        </CardContent>
    )
}

export default Card
