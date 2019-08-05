'use strict';

// Honba Button 

class HonbaButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = {on: false};
    this.tally = 0;

    // This binding is necessary to make `this` work in the callback
    this.IncrementCounter = this.IncrementCounter.bind(this);
    this.DecrementCounter = this.DecrementCounter.bind(this);
    }

    IncrementCounter() {
        newTally = this.tally + 1;
        this.setState({
            tally: newTally
        });
    }

    DecrementCount() {
        newTally = (this.tally > 0 ? this.tally- 1 : 0);
        this.setState({
            tally: newTally
        });
    }

    render() {
        return (
            <div>
                <label>Honba</label>            
                <button class="selectable_features_buttons" onClick={this.DecrementCount} id="honba_-">-</button>
                <label id="honba_display">{this.tally}</label>
                <button class="selectable_features_buttons" onClick={this.IncrementCounter} id="honba_+">+</button>
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
        newTally = this.tally + 1;
        this.setState({
            tally: newTally
        });
    }

    DecrementCount() {
        newTally = (this.tally > 0 ? this.tally- 1 : 0);
        this.setState({
            tally: newTally
        });
    }

    render() {
        return (
            <div>
                <label>Dora</label>            
                <button class="selectable_features_buttons" onClick={this.DecrementCount} id="dora_-">-</button>
                <label id="dora_display">{this.tally}</label>
                <button class="selectable_features_buttons" onClick={this.IncrementCounter} id="dora_+">+</button>
            </div>
        )           
    }
}

ReactDOM.render(
    <DoraButton />, document.getElementById('dora')
); 


