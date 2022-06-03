import './App.css';
import MicroFrontend from "./MicroFrontend";
import React, { useRef, useState } from 'react';

const {
    mfe1_HOST: mfe1,
    mfe2_HOST: mfe2,
} = process.env;

function Dogs({ history }) {
    return <MicroFrontend history={history} host={mfe1} name="Dogs" />;
}

function Cats({ history }) {
    return <MicroFrontend history={history} host={mfe2} name="Cats" />;
}
function App() {

    const mfe1_container = ({ history }) => (
        <MicroFrontend history={history} name="mfe1" host={mfe1} />
    );
    return (
        <><div className="App">
            <div className="mfe1">
                <iframe
                    src="http://localhost:3000"
                    style={{ width: '1px', minWidth: '100%', height: '400px' }}
                    scrolling="no"
                    frameBorder="0"
                ></iframe>
            </div>
            <div className="mfe2">
                <iframe
                    src="http://localhost:3001"
                    style={{ width: '1px', minWidth: '100%', height: '400px' }}
                    scrolling="no"
                    frameBorder="0"
                ></iframe>
            </div>
            <div className="profile">
                <iframe
                    src="http://localhost:3002"
                    style={{ width: '1px', minWidth: '100%', height: '400px' }}
                    scrolling="no"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
        </>
    );
}

export default App;
