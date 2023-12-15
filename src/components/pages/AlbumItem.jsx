import React, {useEffect, useState} from 'react';


const AlbumItem = ({title, name, url, userId, user}) => {
    const handleClick = async (e) =>{
        window.location.href =`/album/${title}`
    }
    const handleDel = async (e) =>{
        e.stopPropagation();
        await fetch('http://localhost:3000/api/auth/del', {
            method : "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title})
        })
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={url} alt="photo"/>
            <div className="card__container">
                <h4><b>{name}</b></h4>
                <p>{title}</p>
            </div>
            {(userId === user.id) &&
            <div className="buttons">
                <button type="button" className="btn_del" onClick={handleDel}>Удалить</button>
                <button type="button" className="btn_upd">Обновить</button>
            </div>
            }
        </div>
    )
};

export default AlbumItem;
