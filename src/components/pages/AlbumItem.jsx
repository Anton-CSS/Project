import React, {useEffect, useState} from 'react';


const AlbumItem = ({title, name, url, userId, user, fn}) => {
    const handleClick = async (e) =>{
        window.location.href =`/album/${title}`
    }
    const handleDel = async (e) =>{
        e.stopPropagation();
        const response = await fetch(`http://localhost:3000/api/auth/del`, {
            method : "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title})
        })
        let count = 0;
        const result = await response.json();
        const array = result.map((item) =>{
            return item.Albums.map((el) =>{
                const obj = {};
                obj.id = ++count
                obj.name = item.name
                obj.title = el.title;
                obj.userId = item.id
                obj.url = (el.Pictures[0]?.url.startsWith('http')) ? el.Pictures[0].url : `http://localhost:3000/uploads/${el.Pictures[0].url} `
                return obj;
            })
        })
        fn(array.flat(result.length))
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={url} alt="photo"/>
            <div className="card__container">
                <h4><b>{name}</b></h4>
                <p>{title}</p>
            </div>
            {user && (userId === user?.id) &&
            <div className="buttons">
                <button type="button" className="btn_del" onClick={handleDel}>Удалить</button>
                <button type="button" className="btn_upd">Обновить</button>
            </div>
            }
        </div>
    )
};

export default AlbumItem;
