import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="not-found-area my-5 fw-bold text-center">
                <h1 className="mt-5 mb-3 theme-color">4 <FontAwesomeIcon icon={faFrown}></FontAwesomeIcon> 4</h1>
                <h4 className="mb-3">Page Not Found</h4>
                <Link to="/"><button>Go Back</button></Link>
            </div>
        </>
    );
};

export default NotFound;