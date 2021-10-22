import React from 'react'

export const GifGritItem = ({id, title, url}) => {
    console.log({id, title, url});
    return (
        <div className='card animate__animated animate__flip'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}