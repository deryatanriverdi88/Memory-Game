
import React from 'react'
import Card from './Card'

const CardList = (props) => {
    // console.log(props)

    return (
        <>
            {props.images.map((img, index )=>{
                return <Card img={img} index={index}  key={index} />
            })}
        </>
    )
}


export default CardList
