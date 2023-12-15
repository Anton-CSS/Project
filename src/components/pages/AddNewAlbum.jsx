import React from 'react';
import RegNavBar from "../ui/RegNavBar";

const AddNewAlbum = ({user}) => {
    
    return (
        <>
            <RegNavBar user={user}/>
            <div className="add__wrapper">
                <h3 className="add__title">Загрузите файлы</h3>
                <form action="/api/auth/upload" method="post" encType="multipart/form-data" className="add__form" >
                    <label className="add_lable">Файлы</label>
                    <input type="file" multiple name="photos" className="add__input"/>
                    <label className="add_lable">Название альбома</label>
                    <input type="text" multiple name="title" className="add__input"/>
                    <label className="add_lable">Сделать приватным</label>
                    <input type="checkbox" multiple name="status" className="add__check"/>
                    <button type="submit" className="add__btn">Отправить</button>
                </form>
            </div>
        </>
        
    );
};

export default AddNewAlbum;
