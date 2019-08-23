'use strict';




// Richii Button 
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

export default RichiiButton;


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

export default IppatsuButton;


// Last Draw
class LastDrawButton extends Post {
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

export default LastDrawButton;


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

export default LastDiscardButton;

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

export default RinshanButton;


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

export default ChankanButton;

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

export default FirstRoundButton;


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

export default TsumoButton;

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

export default RonButton;
