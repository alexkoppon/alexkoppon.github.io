using System.Collections;

public class Hand {

    ArrayList tiles = new ArrayList();

    Meld meld1 = new Meld();
    Meld meld2 = new Meld();
    Meld meld3 = new Meld();
    Meld meld4 = new Meld();

    Meld head = new Meld(2);
    
    public int pons {get; set;} = 0;
    public int chis {get; set;} = 0;
    public int openKans {get; set;} = 0;
    public int closedKans {get; set;} = 0;

    /* Special luck-based Yaku which must be delcared */
    public bool richii {get; set;} = false;
    public bool selfPick {get; set;} = false;
    public bool ippatsu {get; set;} = false;
    public bool lastDraw {get; set;} = false;
    public bool lastDiscard {get; set;} = false;
    public bool rinshanKaihou {get; set;} = false;
    public bool chankan {get; set;} = false;
    public bool firstRoundRichii {get; set;} = false;
    public Tile winningTile {get; set;}

    


    int honba {get ; set; } = 0;
    int dora {get; set; } = 0;
    string prevailing_wind {get; set; } = "E";
    string seat_wind {get; set;} = "E";

    public bool isOpen {get; set;} = false;

    public void addTile(Tile tile, Type newType = Type.Undefined) {

        Meld [] melds = {meld1, meld2, meld3, meld4};
        Meld [] fullHand = {head, meld1, meld2, meld3, meld4};

        // If a single tile is added, add it to the next meld with remaining capacity
        if (newType == Type.Undefined) {
            for (int i = 0; i < 5; i++) {
                if (!melds[i].getFull()) {
                    melds[i].addTile(tile);
                    return;
                }
            }
        } else {
            for (int i = 0; i < 4; i++) {
                if (fullHand[i].getEmpty()) {
                    fullHand[i].addTile(tile, newType);
                    return;
                }
            }
        }

    }

    public void removeTile(Tile tile) {
        tiles.Remove(tile);     
    }

    public ArrayList getHand() {
        return tiles;
    } 

    public int getLength() {
        return tiles.Count;
    }

    public int getMelds() {
        return (pons + chis + openKans + closedKans);
    }

    public int getNonChiMelds() {
        return (pons + openKans + closedKans);
    }
}