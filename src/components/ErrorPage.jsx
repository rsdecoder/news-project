import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = ({error}) => {

    return (
        <div className = 'error-page'>
            <p className ='error-paragraph'>{error? error: 'Not a valid path'}</p>
            <p className ='error-paragraph'>Not a valid path</p>
        </div>
    );
};

export default ErrorPage;