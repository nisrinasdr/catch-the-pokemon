import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'
import Card from './Card/Card'
import { CardWrap } from './Card/CardStyles'
import { Button, Pagination } from './Styles'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'



function Home() {
    const {pokemon, loading, nextPage, previousPage, previous, next} = useGlobalContext()
    const [count, setCount] = useState(null)
    useEffect(() =>{
        setCount(JSON.parse(localStorage.getItem("mypokemonlist")))
    },[])

    const checkOwned = name => {
        let res = count.filter(item => item.name === name)
        if(res[0]){
            if(res[0].owned){
                return res[0].owned
            } else {
                return 0
            }
            
        } else {
            return 0
        }        
    }


    return (
        <>
        {
            loading? <h2>Loading...</h2>: (
                <>
                    <CardWrap>
                    {pokemon.map((data, i) => 
                    <Link to={`/${data.name}`} style={{textDecoration:"none"}}>
                        <Card key={i} name={data.name} pic={data.sprites.front_default} owned={count? checkOwned(data.name):null}/>
                    </Link>
                    )}
                    
                    </CardWrap>
                    <Pagination>
                        <Button onClick={previousPage} disabled={!previous}><FaAngleLeft /></Button>
                        <Button onClick={nextPage} disabled={!next}><FaAngleRight /></Button>
                    </Pagination>
                </>
            )
        }
        </>
    )
}

export default Home
