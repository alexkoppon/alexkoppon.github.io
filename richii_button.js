'use strict';



const Item = <p>Hi</p>;
console.log("Happened");


const Richii_button = React.createComponent;

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
        let bg_colour = (this.state.on ? 'cornflowerblue' : 'whitesmoke');
        return (
            <button onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Richii
            </button>
        );
    }
}

ReactDOM.render(
    <RichiiButton />, document.getElementById('richii')
); 

/*ReactDOM.render(
    Item, document.getElementById('richii')
); */

