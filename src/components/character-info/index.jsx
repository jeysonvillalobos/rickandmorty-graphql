import React from 'react';
import './style.css'

const CharacterInfo = ({img, name}) => {
    return (
        <div className='character-box'>
            <div className='character-img' style={{backgroundImage: `url(${img})`}}></div>
            <div className='character-name'>{name}</div>
        </div>
    );
};

export default CharacterInfo
