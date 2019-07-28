public class Other {

    public Tile generateTile(string type, string value) {
        Tile tile = new Tile();
        tile.Type = type;
        tile.Value = value;
        return tile;
    }

    public Hand generateAllPairHand() {

        Hand hand = new Hand();
        
        hand.addTile(generateTile("Man", "1"));
        hand.addTile(generateTile("Man", "1"));
        hand.addTile(generateTile("Man", "2"));
        hand.addTile(generateTile("Man", "2"));
        hand.addTile(generateTile("Man", "3"));
        hand.addTile(generateTile("Man", "3"));
        hand.addTile(generateTile("Man", "4"));
        hand.addTile(generateTile("Man", "4"));
        hand.addTile(generateTile("Man", "5"));
        hand.addTile(generateTile("Man", "5"));
        hand.addTile(generateTile("Man", "6"));
        hand.addTile(generateTile("Man", "6"));
        hand.addTile(generateTile("Man", "7"));
        hand.addTile(generateTile("Man", "7"));

        return hand;
    }

    public Hand generateThirteenOrphansHand() {

        Hand hand = new Hand();
        
        hand.addTile(generateTile("Man", "1"));
        hand.addTile(generateTile("Man", "9"));
        hand.addTile(generateTile("Pin", "1"));
        hand.addTile(generateTile("Pin", "9"));
        hand.addTile(generateTile("Stick", "1"));
        hand.addTile(generateTile("Stick", "9"));
        hand.addTile(generateTile("Dragon", "White"));
        hand.addTile(generateTile("Dragon", "Red"));
        hand.addTile(generateTile("Dragon", "Green"));
        hand.addTile(generateTile("Wind", "E"));
        hand.addTile(generateTile("Wind", "S"));
        hand.addTile(generateTile("Wind", "N"));
        hand.addTile(generateTile("Wind", "W"));

        return hand;
    }



}