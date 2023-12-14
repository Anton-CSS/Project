import React from 'react';
import RegNavBar from "../ui/RegNavBar";

const AddNewAlbum = ({user}) => {
    
    return (
        <>
            <RegNavBar user={user}/>
            <div>
                <h1>Upload file</h1>
                <form action="/api/auth/upload" method="post" enctype="multipart/form-data">
                    <label>Файл</label>
                    <br />
                    <input type="file" multiple name="photos" />
                    <br />
                    <br />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
        
    );
};

export default AddNewAlbum;
