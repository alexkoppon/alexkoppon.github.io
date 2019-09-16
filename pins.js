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
        console.log(chi_selected);
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
    <SelectionButtons />, document.getElementById('multi-selection')
); 


// Tile Display

var tile_display_div = document.getElementById("chosen_tile_display");

function setTile(event) {
    console.log("occurance");
    console.log("pon " + pon_selected);
    console.log("id " + event.currentTarget.id);
    console.log("remaining " + remaining_tiles);
    if (pon_selected) {
        tile_map.set((15-remaining_tiles), {type: "pon", tile: event.currentTarget.id});
        console.log("pon");
        remaining_tiles -= 3;
        //console.log(remaining_tiles);
        updateState();
    } else if (chi_selected) {
        updateState();
    } else if (open_kan_selected) {
        tile_map.set((15-remaining_tiles), {type: "open", tile: event.currentTarget.id});
        console.log("open");
        remaining_tiles -= 4;
        updateState();
        //console.log(remaining_tiles);
    } else if (closed_kan_selected) {
        tile_map.set((15-remaining_tiles), {type: "closed", tile: event.currentTarget.id});
        console.log("closed");
        remaining_tiles -= 4;
        //console.log(remaining_tiles);
        updateState();
    } else if (remaining_tiles >= 1) {
        tile_map.set((15-remaining_tiles), {type: "single", tile: event.currentTarget.id});
        console.log("single");
        remaining_tiles -= 1;
        //console.log(remaining_tiles);
        updateState();
    }
    console.log(tile_map.values());

}

function tileDisplay() {
    console.log("update tiles");
    ReactDOM.render(<Tiles />,document.getElementById('chosen_tile_display'));
}


class Tiles extends React.Component {
    render() {
        console.log("reached");
        let images = tile_map.forEach(value => {
            return <img key={value.tile +"_disp"} id={value.tile +"_disp"} className="tiles" alt={value.title} src={"../images/tiles/" + value.tile + ".JPG"}/>;
        })
        return (
            <div>
                {images}
            </div>
        )
    }
}

ReactDOM.render(<Tiles />,document.getElementById('chosen_tile_display'));

// Man Tiles
for (var i = 1; i < 10; i++) {
    var id = "man_"+i;
    var man = document.getElementById(id);
    man.addEventListener("click", () => {
        setTile(event);
        tileDisplay();
        //updateTileDisplayDiv(event.currentTarget.id);
    });
}

// Pin Tiles
for (var i = 1; i < 10; i++) {
    var id = "pin_"+i;
    var pin = document.getElementById(id);
    pin.addEventListener("click", () => {
        setTile(event);
        tileDisplay();
    });
}

// Stick tiles 
for (var i = 1; i < 10; i++) {
    var id = "stick_"+i;
    var stick = document.getElementById(id);
    stick.addEventListener("click", () => {
        setTile(event);
        tileDisplay();
        //updateTileDisplayDiv(event.currentTarget.id);
    });
}

// Dragon tiles 
var dragon_tile_ids = ["white_dragon", "dragon_green", "dragon_red"];
for (var i = 0; i < dragon_tile_ids.length; i++ ) {
    var dragon = document.getElementById(dragon_tile_ids[i]);
    dragon.addEventListener("click", () => {
        setTile(event);
        tileDisplay();
    });
}

// Wind tiles 
var wind_tile_ids = ["wind_east", "wind_west", "wind_north", "wind_south"]; 
for (var i = 0; i < wind_tile_ids.length; i++ ) {
    var wind = document.getElementById(wind_tile_ids[i]);
    wind.addEventListener("click", () => {
        setTile(event);
        tileDisplay();
    });
}

