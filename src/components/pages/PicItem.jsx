import React from 'react';

const PicItem = ({ url }) => {
    let newUel;
    (url.startsWith('http')) ? newUel = url : newUel = `http://localhost:3000/uploads/${url}`
    return (
        <div className="card" >
            <img src={newUel} alt="photo"/>
        </div>
    );
};

export default PicItem;
