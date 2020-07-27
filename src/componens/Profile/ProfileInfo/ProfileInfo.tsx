import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'/>
            </div>
            <div className={s.descriptionBlock}> ava + dicrip</div>
        </div>
    );
};

export default ProfileInfo;