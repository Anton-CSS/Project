import React from 'react';
import PicItem from "./PicItem";

const ShowAlbum = ({pictures}) => {
    
    return (
        <div className="albums_wr">
            {pictures.map(item => <PicItem key={item.id} url={item.url}/>)}
        </div>
    );
};

export default ShowAlbum;
