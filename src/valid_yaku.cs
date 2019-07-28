using System.Collections;
using System.Collections.Generic;
using System;
public class Yaku {

    public string YakuCheck(Hand hand) {
        string possibleYaku = "";

        /*  first rule out the Yaku that mean no other Yaku types are possible
        ie the exceptions */
        if (allPairs(hand)) {possibleYaku += "All Pairs"; return possibleYaku;}
        if (thirteenOrphans(hand)) {possibleYaku += "Thirteen Orphans"; return possibleYaku;}

        /* Sequence hands */

        // Closed Only
        if (noPointHand(hand)) {possibleYaku += "No-Point Hand";}


        /* Triplet / Kan hands */


        /* Honour or terminal hands */


        /* Suit hands */


        /* YakuMan hands */

        /* Only check for closed-only Yaku if the hand is still closed */
        if (!hand.isOpen) {

            // Closed Only Yaku

            /* Closed Only subsection of Yaku which require the user to declare 
            this condition has been met */
            if (firstRoundRichii(hand)) {possibleYaku += "First Round Richii";}
            if (richiiDeclared(hand)) { possibleYaku += "Richii";}
            if (ippatsu(hand)) {possibleYaku += "Ippatsu";}
            if (selfPick(hand)) {possibleYaku += "Self Pick";}


        }

        /* One Han Yaku */

        /* Open/Closed subsection of Yaku which require the user to
        declare this condition has been met */
        if (lastDiscard(hand)) {possibleYaku += "Last Discard";}
        if (lastDraw(hand)) {possibleYaku += "Last Draw";}
        if (rinshanKaihou(hand)) {possibleYaku += "Rinshan Kaihou";}
        if (chankan(hand)) {possibleYaku += "Chankan";}

        return possibleYaku;
    }

    bool allPairs(Hand hand) {
        
        /* If there are melds in a hand then it cannot be all pairs */
        int melds = hand.getMelds();
        if (melds > 0) {return false;}

        /* 7 Pairs are needed for this hand */
        int pairCount = 0;

        /* Get the Hand*/
        ArrayList tiles = hand.getHand();     

        /* For each Tile in the Hand - check how many of that tile 
        exist in the hand */
        for (int i = 0; i < tiles.Count; i++ ) {
            Tile curr = (Tile)tiles[i];
            int sameTiles = 1;
            for (int j = i+1; j < tiles.Count; j++ ) { 
                Tile innerTile = (Tile)tiles[j];
                if (curr.Type == innerTile.Type) {
                    if (curr.Value == innerTile.Value) {
                        sameTiles ++;
                        /* If there are more than two of the same tile in a hand
                        if is not valid */ 
                        if (sameTiles > 2) {return false;}
                    }
                }
            }
            /* If there are exactly two (a pair) of the tiles in a hand, increase 
            the pair count */
            if (sameTiles == 2) {pairCount ++;}
        }
        /* If there are exactly 7 pairs in a hand, it meets the requirement
        for the all pairs Yaku */
        if (pairCount == 7) {return true;}
        else {return false;}

    }

    bool thirteenOrphans(Hand hand) {

        Other other = new Other();
        Hand orphansHand = other.generateThirteenOrphansHand();
        ArrayList orphansTiles = orphansHand.getHand();
        ArrayList handTiles = hand.getHand();

        /* For each Tile in the Hand - check how many of that tile 
        exist in the hand */
        for (int i = 0; i < orphansTiles.Count; i++ ) {
            Tile curr = (Tile)orphansTiles[i];
            bool matchFound = false;
            for (int j = 0; j < handTiles.Count; j++ ) { 
                Tile innerTile = (Tile)handTiles[j];
                if (curr.Type == innerTile.Type) {
                    if (curr.Value == innerTile.Value) {
                        matchFound = true;
                        break;
                    }
                }
            }
            /* If there are exactly two (a pair) of the tiles in a hand, increase 
            the pair count */
            if (!matchFound) {return false;}
        }
        return true;
    }

    bool richiiDeclared(Hand hand) {
        if (hand.richii) {return true;}
        return false;
    }

    bool ippatsu(Hand hand) {
        if (hand.ippatsu && hand.richii) {return true;}
        return false;
    }

    bool lastDraw(Hand hand) {
        if (hand.lastDiscard) {return true;}
        return false;
    }

    bool lastDiscard(Hand hand) {
        if (hand.lastDiscard) {return true;}
        return false;
    }

    bool rinshanKaihou(Hand hand) {
        if (hand.lastDiscard) {return true;}
        return false;
    }

    bool chankan(Hand hand) {
        if (hand.lastDiscard) {return true;}
        return false;
    }

    bool firstRoundRichii(Hand hand) {
        if (hand.lastDiscard) {return true;}
        return false;
    }

    bool selfPick(Hand hand) {
        if (hand.selfPick) {return true;}
        return false;
    }

    bool noPointHand(Hand hand) {

        // no triplets or quads
        //  must not contain any pair of dragons 
        // player’s own wind, or 
        // wind of the round which is worth points

        // must be waiting for multiple winning tiles that can make a sequence 

        return false;
    }
    
}