import React from 'react';
import { Link } from 'react-router-dom';

import iconArrowLeft from '../../assets/icon-arrow-left.svg';

import './styles.css';

export default function BackLink({title, routerName}) {
  return (
    <div className="back-link-container-title-page">
        <img src={iconArrowLeft} alt="icon arrow left" width="32px" height="32px" />
        <Link className="back-link-title-page" to={routerName}>
            {title}
        </Link>
    </div>
  );
}
