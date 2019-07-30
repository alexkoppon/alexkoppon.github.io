'use strict';

//const Richii_button = React.createClass;

const Item = <p>Hi</p>

class RichiiButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {on: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            on: !state.on
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick} style={this.state.on ? "background_colour:#FFFFFFF;" : "background_colour: #000000;"}>
                Richii
            </button>
        );
    }
}

ReactDOM.render(
    <RichiiButton />, document.getElementById('richii')
);

ReactDOM.render(
    Item, document.getElementById('richii')
);
