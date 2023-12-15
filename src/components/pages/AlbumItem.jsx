import React, {useEffect, useState} from 'react';

const AlbumItem = ({title, name, url}) => {
    const handleClick = async (e) =>{
        window.location.href =`/album/${title}`
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={url} alt="photo"/>
            <div className="card__container">
                <h4><b>{name}</b></h4>
                <p>{title}</p>
            </div>
        </div>
    )
};

export default AlbumItem;
