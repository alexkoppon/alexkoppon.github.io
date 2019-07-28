using System;
using System.Collections;


namespace Richii
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Entered here");
            
            
            Other other = new Other();
            Yaku yaku = new Yaku();

            Hand hand = new Hand();
            hand = other.generateThirteenOrphansHand();

            Hand pairsHand = other.generateAllPairHand();
           
            string outcome = yaku.YakuCheck(pairsHand);
            Console.WriteLine("Output is: "+outcome);

        }

    }
}
