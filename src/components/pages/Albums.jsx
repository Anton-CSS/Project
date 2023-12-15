import React, {useEffect, useState} from 'react';
import AlbumItem from "./AlbumItem";

const Albums = ({user}) => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((data) => data.json())
            .then((data) => {
                let count = 0;
                const array = data.map((item, index) =>{
                    return item.Albums.map((el) =>{
                        const obj = {};
                        obj.id = ++count
                        obj.name = item.name
                        obj.title = el.title;
                        obj.userId = item.id
                        obj.url = (el.Pictures[0].url.startsWith('http')) ? el.Pictures[0].url : `http://localhost:3000/uploads/${el.Pictures[0].url} `
                        return obj;
                    })
                })
                setPosts(array.flat(data.length))
            })
    }, []);
    console.log(posts)
    return (
        <div className="albums">
            <h2>Уже с нами</h2>
            <div className="albums__wrapper">
            { posts && posts.map(item => <AlbumItem key={item.id}
                name={item.name}
                title={item.title}
                url={item.url}
                userId={item.userId}
                user={user}
                />
            )}
            </div>
        </div>
    );
};

export default Albums;
