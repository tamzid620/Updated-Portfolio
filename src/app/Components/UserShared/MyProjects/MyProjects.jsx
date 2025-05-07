import { barlow } from '@/app/config/fonts';
import React from 'react';

const MyProjects = () => {
    return (
        <div className= {` ${barlow.className} md:mt-12 sm:mt-0 `}>
            <h1>My Projects</h1>
        </div>
    );
};

export default MyProjects;