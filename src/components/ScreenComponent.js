import React from 'react';

export default (props) => {
    return (<div>
        {props.position === 'vertical' ?
            <img src={"https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png"} alt="vertical" /> :
            <img src={"https://static.aviapark.com/files/155333/960x576_1.png"} alt="horizontal"  />
        }
    </div>);
}