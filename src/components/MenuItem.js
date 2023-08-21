import React from 'react'

export const MenuItem = (image, name, price) => {
    return (
        <div className='menuitem'>
            {/* <div style={{background:`url(${image})`}}> */}
            {/* </div> */}
            {/* <h1>
                {name}
            </h1>
            <p>
             */}
            <p>{name}</p>
        </div>
    )
}

