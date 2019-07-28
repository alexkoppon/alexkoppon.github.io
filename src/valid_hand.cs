using System.Collections;
class Valid_Hand {

    // this assumes that seperate validation occurs when declaring a pon, chi, or kan
    // ie those tiles are assumed correct and counted as a meld

    int melds = 0;
    int head = 0;

    bool CheckForValidHand(Hand hand) {
        if (CheckHandLength(hand)) {
            
            ArrayList handTiles;

            if (hand.isOpen) {
                ArrayList closedTiles = hand.getHand();
                foreach (Tile tile in closedTiles) {
                    if (tile.Open) {
                        closedTiles.Remove(tile);
                    }
                }
                handTiles = closedTiles;

            } else {
                handTiles = hand.getHand();
            }

            // include the declared open tiles as valid melds
            melds += hand.getMelds();

            // find the head so if the hand is all open can leave the check early
            foreach (Tile tile in handTiles) {

            }


            // EXCEPTIONS 

            // thirteen orphans

            // all pairs
            
            
        }
        return false;
    } 

    bool CheckHandLength(Hand hand) {
        int handLength = hand.getLength();
        if (handLength < 14) {
            return false;
        } else if (handLength == 14) {
            return true;
        } else if (CheckHandLengthWithKan(hand)) {
            return true;
        }
        return false;
    }

    bool CheckHandLengthWithKan(Hand hand) {
        int kans = hand.closedKans + hand.openKans;
        if (hand.getLength() == 14+kans) {
            return true;
        }
        return false;


    }
}