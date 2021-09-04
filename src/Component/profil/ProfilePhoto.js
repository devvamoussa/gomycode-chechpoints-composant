import React from 'react';
import Picture from "./Image/user.jpg";


const Image = () =>  {
    const User =Picture;

        return (
            <div className="container d-flex mt-5 pl-2 border-1">
                <div className="logo">
                    <img src={User} 
                    alt="user_photo" 
                    width="300"
                    height="200"/>
                </div>
            </div>
        );
    }
export default Image;
