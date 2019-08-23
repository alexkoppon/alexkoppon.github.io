'use strict';
import { createStore } from "redux";
import './on_off_buttons'
import RichiiButton from "./on_off_buttons";



const calculateHand = document.getElementById("calculate");

calculateHand.addEventListener("click", () => {

    // get the status of the relevant buttons etc 
    let testRichii = document.getElementById('richii');
    console.log(RichiiButton.state);
    console.log(RichiiButton.props);
    console.log(RichiiButton.prototype.state)
    console.log(testRichii);
    console.log(RichiiButton.prototype.props);
    console.log(RichiiButton);
    console.log(RichiiButton.name);
    console.log(RichiiButton.prototype.refs);
    console.log(RichiiButton.prototype);

});

