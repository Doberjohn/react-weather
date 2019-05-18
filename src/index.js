import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay/SeasonDisplay";
import Spinner from "./Spinner/Spinner";

class App extends React.Component {
    state = { lat: null, errorMessage: null };

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }

        return <Spinner loadingMessage="Please accept location request"/>
    }

    render() {
        return <div>{this.renderContent()}</div>
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));