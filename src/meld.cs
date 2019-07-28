using System.Collections; 
public enum Type { Pon, Chi, ClosedKan, OpenKan, Undefined }; 

class Meld {

    public Type type {get; set;} = Type.Undefined;
    ArrayList tiles = new ArrayList();

    public Meld(int cap = 4) {
        tiles.Capacity = cap;
    }

    public void addTile(Tile tile, Type newType = Type.Undefined) {
        type = newType;

        if (newType == Type.OpenKan || newType == Type.ClosedKan) {
            tiles.Add(tile);
            tiles.Add(tile);
            tiles.Add(tile);
            tiles.Add(tile);
        }

        if (newType == Type.Pon) {
            tiles.Add(tile);
            tiles.Add(tile);
            tiles.Add(tile);
        }
    }

    public int getCount() {
        return tiles.Count;
    }

    public int getCapacity() {
        return tiles.Capacity;
    }

    public bool getFull() {
        if (tiles.Count >= tiles.Capacity) {return true;}
        return false;
    }

    public bool getEmpty() {
        if (tiles.Count > 0) {return false;}
        return true;
    }




}