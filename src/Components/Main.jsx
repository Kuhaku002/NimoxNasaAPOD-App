import React from 'react'


export default function Main({data}){
    //const [data] = props

    return(
        <div className='imgContainer'>
            <img src={data?.hdurl} alt={data?.title || 'bg-img'}
            className='bgImage'/>
        </div>
    )
}