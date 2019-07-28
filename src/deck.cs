using System;
using System.Collections;
using System.Collections.Generic;

public class Deck {

    Hand_Library lib = new Hand_Library();
      
    ArrayList deck = new ArrayList();

    public Deck() {
        // create suit tiles
        foreach (string suit in lib.getSuitTypes()) {
            Tile [] man = lib.getSuitTiles(suit);
            foreach(Tile tile in man) {
                deck.Add(tile);
            }
        }

        // create honour tiles 

        Dictionary<string, string[]> honour_tiles = lib.getHonourTiles();
        foreach (string type in honour_tiles.Keys) {
            string[] values; 
            honour_tiles.TryGetValue(type, out values);
            foreach (string value in values) {
                Tile newTile = new Tile();
                newTile.Type = type;
                newTile.Value = value;
                deck.Add(newTile);
            }
        }

        // create dragon tiles
        /* foreach (string dragon in lib.getDragonValues()) {
            Tile newTile = new Tile();
            newTile.Type = "Dragon";
            newTile.Value = dragon;
            deck.Add(newTile);
        }
        // create wind tiles   */

        


    }
    
    public ArrayList getDeck() {
        return deck;
    }

    public string printDeck() {
        string display = "Tiles remaining in deck:\n";
        foreach (Tile tile in deck) {
            display += tile.Type + " " + tile.Value + "\n";
        }
        return display;
    }

    public void removeTile(Tile tile) {
        deck.Remove(tile);
    }

}

