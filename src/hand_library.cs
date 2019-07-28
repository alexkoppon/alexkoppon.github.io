using System.Collections;
using System.Collections.Generic;


public class Hand_Library {
    
    // String values to use for reference 
    string [] wind_values = {"E", "S", "W", "N"};

    string [] dragon_values = {"White", "Green", "Red"};

    string [] suit_types = {"Man", "Pin", "Stick"};

    int [] suit_values = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    // Useful collections of tiles
    public Tile [] getSuitTiles(string type) {
        Tile [] tiles = new Tile [9];
        foreach(int i in suit_values) {
            Tile newTile = new Tile();
            newTile.Value = i.ToString(); 
            newTile.Type = type;
            tiles[i-1] = newTile;
        }
        return tiles;
    }

    public string [] getSuitTypes() {
        return suit_types;
    }
    public string [] getWindValues() {
        return wind_values;
    }

    public Dictionary<string, string[]> getHonourTiles() {
        Dictionary<string, string[]> honour_tiles = new Dictionary<string, string[]>();
        honour_tiles.Add("Dragon", dragon_values);
        honour_tiles.Add("Wind", wind_values); 
        return honour_tiles;
    }

    public string [] getDragonValues() {
        return dragon_values;
    }


    /*
    Tile [] outside_tiles = {man[0], man[8], pin[0], pin[8], sticks[0], sticks[8]};

    Tile [] winds = {};

    Tile [] dragons = {};

    Tile [] honour_tiles = {winds, dragons};

    Tile [] suits = {man, pin, sticks};  */
}

   


