'use strict';

// Honba Button 

class HonbaButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {on: false, tally: 0};

    // This binding is necessary to make `this` work in the callback
    this.IncrementCounter = this.IncrementCounter.bind(this);
    this.DecrementCounter = this.DecrementCounter.bind(this);
    }

    IncrementCounter() {
        let newTally = this.state.tally + 1;
        console.log(newTally);
        this.setState({
            tally: newTally
        });
        console.log(this.state.tally);
    }

    DecrementCounter() {
        let newTally = ((this.state.tally > 0) ? this.state.tally - 1 : 0);
        console.log(newTally);
        this.setState({
            tally: newTally
        });
        console.log(this.state.tally);
    }

    render() {
        return (
            <div>
                <label>Honba</label>            
                <button className="selectable_features_buttons" onClick={this.DecrementCounter} id="honba_-">-</button>
                <label id="honba_display">{this.state.tally}</label>
                <button className="selectable_features_buttons" onClick={this.IncrementCounter} id="honba_+">+</button>
            </div>
        )           
    }
}

ReactDOM.render(
    <HonbaButton />, document.getElementById('honba')
); 

// Dora
class DoraButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {on: false};
    this.tally = 0;

    // This binding is necessary to make `this` work in the callback
    this.IncrementCounter = this.IncrementCounter.bind(this);
    this.DecrementCounter = this.DecrementCounter.bind(this);
    }

    IncrementCounter() {
        let newTally = this.tally + 1;
        this.setState({
            tally: newTally
        });
    }

    DecrementCounter() {
        let newTally = (this.tally > 0 ? this.tally- 1 : 0);
        this.setState({
            tally: newTally
        });
    }

    render() {
        return (
            <div>
                <label>Dora</label>            
                <button className="selectable_features_buttons" onClick={this.DecrementCounter} id="dora_-">-</button>
                <label id="dora_display">{this.tally}</label>
                <button className="selectable_features_buttons" onClick={this.IncrementCounter} id="dora_+">+</button>
            </div>
        )           
    }
}

ReactDOM.render(
    <DoraButton />, document.getElementById('dora')
); 


