import React from 'react';

import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-6">Menu</h1>
        <ul>
          <li>
            <Link to="/1">
              MFE1
            </Link>
          </li>
          <li>
            <Link to="/2">
              MFE2
            </Link>
          </li>
          <li>
            <Link to="/3">
              MFE3
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
