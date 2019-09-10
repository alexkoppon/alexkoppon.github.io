'use strict';


var all_states = new Map();


const calculateHand = document.getElementById("calculate");

calculateHand.addEventListener("click", () => {

    // get the status of the relevant buttons etc 
    console.log(all_states.get("Richii"));

});


// Richii Button 
class RichiiButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {on: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.on) {
            all_states.set("Richii", true);
        } else {
            all_states.set("Richii", false);
        }
        this.setState(state => ({
            on: !state.on
        }));
        
    }

    getState() {
        return this.state;
    }

    

    render() {
        let bg_colour = (this.state.on ? 'cornflowerblue' : 'whitesmoke');
        return (
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Richii
            </button>
        );
    }
}

ReactDOM.render(
    <RichiiButton />, document.getElementById('richii')
); 



// Ippatsu Button 

class IppatsuButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Ippatsu
            </button>
        );
    }
}

ReactDOM.render(
    <IppatsuButton />, document.getElementById('ippatsu')
); 




// Last Draw
class LastDrawButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Last Draw
            </button>
        );
    }
}

ReactDOM.render(
    <LastDrawButton />, document.getElementById('lastDraw')
); 



// Last Discard
class LastDiscardButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Last Discard
            </button>
        );
    }
}

ReactDOM.render(
    <LastDiscardButton />, document.getElementById('lastDiscard')
); 


// Rinshan

class RinshanButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Rinshan Kaihou
            </button>
        );
    }
}

ReactDOM.render(
    <RinshanButton />, document.getElementById('rinShan')
); 



// Chankan

class ChankanButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Chankan
            </button>
        );
    }
}

ReactDOM.render(
    <ChankanButton />, document.getElementById('chankan')
); 



// First Round Richii

class FirstRoundButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                First Round Richii
            </button>
        );
    }
}

ReactDOM.render(
    <FirstRoundButton />, document.getElementById('firstRoundRichii')
); 



// Tsumo
class TsumoButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Tsumo
            </button>
        );
    }
}

ReactDOM.render(
    <TsumoButton />, document.getElementById('tsumo')
); 



// Ron

class RonButton extends React.Component {
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
            <button className="selectable_features_buttons" onClick={this.handleClick} style={{ backgroundColor: bg_colour}}>
                Ron
            </button>
        );
    }
}

ReactDOM.render(
    <RonButton />, document.getElementById('ron')
); 


