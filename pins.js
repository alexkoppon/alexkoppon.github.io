'use strict' 

var tile_map = new Map();

var remaining_tiles = 14;

var pon_selected = false;
var chi_selected = false;
var open_kan_selected = false;
var closed_kan_selected = false;

function updateState() {
    this.setState({
        pon: false,
        chi: false,
        open_kan: false,
        closed_kan: false
    }); 
}

// Pon Button 
class SelectionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pon: false,
            chi: false,
            open_kan: false,
            closed_kan: false
        };
        this.ponClick = this.ponClick.bind(this);
        this.chiClick = this.chiClick.bind(this);
        this.openClick = this.openClick.bind(this);
        this.closedClick = this.closedClick.bind(this);
        updateState = updateState.bind(this);
    }

    ponClick() {
        if (remaining_tiles >= 3) {
            pon_selected = !this.state.pon;
            this.setState(state => ({
                pon: !state.pon,
                chi: false,
                open_kan: false,
                closed_kan: false
            }));  
        } else { pon_selected = false; }

        chi_selected = false; open_kan_selected = false; closed_kan_selected = false;       
    }

    chiClick() {
        if (remaining_tiles >= 3) {
            chi_selected = !this.state.chi;
            this.setState(state => ({
                pon: false,
                chi: !state.chi,
                open_kan: false,
                closed_kan: false
            }));     
        } else { chi_selected = false; }

        pon_selected = false; open_kan_selected = false; closed_kan_selected = false;      
    }

    openClick() {
        if (remaining_tiles >= 4) {
            open_kan_selected = !this.state.open_kan;
            this.setState(state => ({
                pon: false,
                chi: false,
                open_kan: !state.open_kan,
                closed_kan: false
            }));   
        } else { open_kan_selected = false; }

        pon_selected = false; chi_selected = false; closed_kan_selected = false;      
    }

    closedClick() {
        if (remaining_tiles >= 4) {
            closed_kan_selected = !this.state.closed_kan;
            this.setState(state => ({
                pon: false,
                chi: false,
                open_kan: false,
                closed_kan: !state.closed_kan
            })); 
            return; 
        } else { closed_kan_selected = false; }

        pon_selected = false; chi_selected = false; open_kan_selected = false;      
    }

    render() {
        let pon_colour = (this.state.pon ? 'cornflowerblue' : 'whitesmoke');
        let chi_colour = (this.state.chi ? 'cornflowerblue' : 'whitesmoke');
        let open_colour = (this.state.open_kan ? 'cornflowerblue' : 'whitesmoke');
        let closed_colour = (this.state.closed_kan ? 'cornflowerblue' : 'whitesmoke');
        return (
            <div>
                <button className="selectable_features_buttons" onClick={this.ponClick} style={{ backgroundColor: pon_colour}}>
                    Pon
                </button>
                <button className="selectable_features_buttons" onClick={this.chiClick} style={{ backgroundColor: chi_colour}}>
                    Chi
                </button>
                <button className="selectable_features_buttons" onClick={this.openClick} style={{ backgroundColor: open_colour}}>
                    Open Kan
                </button>
                <button className="selectable_features_buttons" onClick={this.closedClick} style={{ backgroundColor: closed_colour}}>
                    Closed Kan
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <SelectionButtons />, document.getElementById('pon')
); 



const man1 = document.getElementById("man1");
const man2 = document.getElementById("man2");
const man3 = document.getElementById("man3");
const man4 = document.getElementById("man4");
const man5 = document.getElementById("man5");
const man6 = document.getElementById("man6");
const man7 = document.getElementById("man7");
const man8 = document.getElementById("man8");
const man9 = document.getElementById("man9");

for (var i = 1; i < 10; i++) {
    var id = "pin"+i;
    console.log(id);
    var pin = document.getElementById(id);
    pin.addEventListener("click", () => {
        if (pon_selected) {
            tile_map.set("Pon", event.currentTarget.id);
            console.log("pon");
            remaining_tiles -= 3;
            console.log(remaining_tiles);
            updateState();
        } else if (chi_selected) {
            updateState();
        } else if (open_kan_selected) {
            tile_map.set("Open", event.currentTarget.id);
            console.log("open");
            remaining_tiles -= 4;
            updateState();
            console.log(remaining_tiles);
        } else if (closed_kan_selected) {
            tile_map.set("Closed", event.currentTarget.id);
            console.log("closed");
            remaining_tiles -= 4;
            console.log(remaining_tiles);
            updateState();
        } else if (remaining_tiles >= 1) {
            tile_map.set("Single", event.currentTarget.id);
            console.log("single");
            remaining_tiles -= 1;
            console.log(remaining_tiles);
            updateState();
        }
    });
}

/*const calculateHand = document.getElementById("pin1");
const calculateHand = document.getElementById("pin2");
const calculateHand = document.getElementById("pin3");
const calculateHand = document.getElementById("pin4");
const calculateHand = document.getElementById("pin5");
const calculateHand = document.getElementById("pin6");
const calculateHand = document.getElementById("pin7");
const calculateHand = document.getElementById("pin8");
const calculateHand = document.getElementById("pin9");

const calculateHand = document.getElementById("stick1");
const calculateHand = document.getElementById("stick2");
const calculateHand = document.getElementById("stick3");
const calculateHand = document.getElementById("stick4");
const calculateHand = document.getElementById("stick5");
const calculateHand = document.getElementById("stick6");
const calculateHand = document.getElementById("stick7");
const calculateHand = document.getElementById("stick8");
const calculateHand = document.getElementById("stick9");

const calculateHand = document.getElementById("white");
const calculateHand = document.getElementById("green");
const calculateHand = document.getElementById("red");

const calculateHand = document.getElementById("east");
const calculateHand = document.getElementById("west");
const calculateHand = document.getElementById("north");
const calculateHand = document.getElementById("south"); */
