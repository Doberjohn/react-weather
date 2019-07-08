import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from "./SeasonDisplay/SeasonDisplay";
import Spinner from "./Spinner/Spinner";
import useLocation from "./useLocation/useLocation";

const App = () => {
    const { lat, errorMessage } = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    } else if (lat) {
        content = <div><SeasonDisplay lat={lat} /></div>
    } else {
        content = <Spinner loadingMessage="Please accept location request" />
    }

    return <div>{content}</div>
}

ReactDOM.render(<App />, document.getElementById('root'));