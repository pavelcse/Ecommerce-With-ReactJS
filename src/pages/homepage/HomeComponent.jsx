import React from "react";
import './home.style.scss';

import Directory from "../../components/directory/directory.component";

const HomeComponent = (props) => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomeComponent;