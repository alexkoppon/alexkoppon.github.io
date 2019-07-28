//import React from "react";
//import ReactDOM from "react-dom";



let calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", () => {
    console.log("thisHappened");

    //The URL
    const url = "https://localhost:3000/";

    fetch(encodeURI(url), getParam)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
    });
});

