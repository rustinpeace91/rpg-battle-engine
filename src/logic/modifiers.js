// A function that defines the modifers of each ability stats
// Ability stats are not implimented yet
// in the future this will determine how the stats effect certain dice rolls

function modifiers(stat) {
    switch(stat){
        case(stat < 2 ):
            return -5;
        case(stat === 2 || stat === 3):
            return -4;
        case(stat === 4 || stat === 5):
            return -3;
        case(stat === 6 || stat === 7):
            return -2;
        case(stat === 10 || stat === 11):
            return 0;
        case(stat === 12|| stat === 13):
            return 1;
        case(stat === 14|| stat === 15):
            return 2;
        case(stat === 16 || stat === 17):
            return 3;
        case(stat === 18 || stat === 19):
            return 4;
        case(stat === 20 || stat === 21):
            return 5;
        case(stat === 22 || stat === 23):
            return 6;        
        
    }

}