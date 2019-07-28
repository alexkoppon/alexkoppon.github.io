public class Tile {
    public string Type {get; set;}
    public string Value {get; set;}
    public bool Open {get; set;} = false;

    public Tile cloneTile() {
        Tile newTile = new Tile();
        newTile.Type = this.Type;
        newTile.Value = this.Value;
        newTile.Open = this.Open;
        return newTile;
    }
    
}