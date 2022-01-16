/*   STEP 1   */
export const leagueID = "784465525785956352"; // your league ID
export const leagueName = "Tomcat Dynasty League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the home page for the Tomcat Dynasty League! This league consists of 12 non-rodent alumni of the one and only Alpha Mu - current alumnus status nothwithstanding.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Scott Garcia",
      "location": "Arlington, VA", // (optional)
      "bio": "I'm the best ever. I'm the most brutal and vicious, and most ruthless champion there's ever been. There's no one can stop me. Lennox is a conqueror? No, I'm Alexander, he's no Alexander. I'm the best ever! There's never been anybody as ruthless! I'm Sonny Liston, I'm Jack Dempsey. There's no one like me. I'm from their cloth. There's no one that can match me. My style is impetuous, my defense is impregnable, and I'm just ferocious. I want your heart! I want to eat his children! Praise be to Allah!",
      "photo": "/managers/scott.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "The Navy Yard Nincompoop", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-jay.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5849, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "We will be perfect in every aspect of the game. You drop a pass, you run a mile. You miss a blocking assignment, you run a mile. You fumble the football, and i will break my foot off in your John Brown hind parts and then you will run a mile. Perfection. Let's go to work.",
      "tradingScale": 11, // 1 - 10
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "JJ Schacht",
      "location": "Scottsdale, AZ", // (optional)
      "bio": "Just a small town guy from Myers Park looking to make his fantasy dreams come true",
      "photo": "/managers/jj.gif", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jay 'Half my name and half my height' Malak", // Potentially: Tyler "The only DJ we don't want Moore of" Pollack
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-jay.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 439, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Win early win often",
      "tradingScale": 4.2, // 1 - 10
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "John Flye",
      "location": "Charlotte, NC", // (optional)
      "bio": "Raised in the basement off of butter dogs and sneaky snakes, just to climb all the way to the top of the fantasy league",
      "photo": "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 1969, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Zach 'Scrub' Elliott", // Can be anything (usually your rival's name)
        link: 8, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-zach-2.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5862, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Win now, win later, and have Scott Hanson calling your players’ names all Sunday long",
      "tradingScale": 6, // 1 - 10
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Travis Barnett",
      "location": "Raleigh, NC", // (optional)
      "bio": "Born in the desert sands of West Texas, football was always a dream. Without athletic prowess, now it's just a fantasy.",
      "photo": "/managers/travis.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Zach Elliott", // Can be anything (usually your rival's name)
        link: 8, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-zach.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3423, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Never lose to Zach... Ever...",
      "tradingScale": 8, // 1 - 10
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Garrett Woods",
      "location": "Raleigh, NC", // (optional)
      "bio": " Former black out artist. Current student of the game and classroom. Future dynasty champion.",
      "photo": "/managers/garrett.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "@Wayne1030", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-wayne.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "ludere. vincat. repetere.",
      "tradingScale": 6.5, // 1 - 10
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Logan Dennis",
      "location": "Charleston, SC. DC soon.", // (optional)
      "bio": "The team formerly known as Vick Dawgs, we pride ourselves on our ability to be an exciting team for 50% of the season then succumb to injury and or poor lineup decisions and finish in 7th place.",
      "photo": "/managers/logan.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "JJ Schacht", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-jj.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5846, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Stop losing to JJ and Bailey at inopportune times. Discount Double Check.",
      "tradingScale": 7, // 1 - 10
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bailey Ormond",
      "location": "Charlotte, NC", // (optional)
      "bio": "Father of two loser children (Garrett, age 14. Wayne, age 12) Trying to win the league to afford double knee replacement for child Garrett.",
      "photo": "/managers/bailey.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Mini Mike", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-mike.gif", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5862, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "None.",
      "tradingScale": 5, // 1 - 10
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jay Malak",
      "location": "The Swamp", // (optional)
      "bio": "My first foray into fantasy was in 2005, when I took Ladainian Tomlinson #1 overall. After torching the league, my friend logged into my team and traded him to himself. I’m somehow still friends with him. If any of you try this, however, I will pull a Liam Neeson on you.\nIn seriousness, fantasy has always been my favorite way to stay in touch with friends. I take it pretty seriously, and often care more about my team than the Panthers. (As you could probably tell, the heels and Tottenham are where my primary allegiances lie). I’m glad to be a part of this group, look forward to hopefully kicking your asses, and more importantly hearing your trash talk in return.\nMay the best man win.",
      "photo": "/managers/jay.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2005, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Lowballers & Anyone he loses to.", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2133, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Bench star players during the week to motivate better performance on the weekend. Engage in psychological warfare with opposing managers when socially acceptable. Outscore opposition.",
      "tradingScale": 6.5, // 1 - 10
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Zach Elliott",
      "location": "Hope Mills, NC", // (optional)
      "bio": "Taco",
      "photo": "/managers/zach.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "T-Puss and U Wish Ya Had Moore", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-dumb-dumber.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1264, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Throw for show, run for dough.",
      "tradingScale": 7, // 1 - 10
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Wayne Hester",
      "location": "Raleigh, NC", // (optional)
      "bio": "I’m from Philly, didn’t hold on to the Philly sports traditions but kept the Philly attitude.",
      "photo": "/managers/wayne.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "G Woods", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-garrett.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4970, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Injuries happen but with a roster of 30 it’s a Next Man Up Mentality. NO EXCUSES.",
      "tradingScale": 5, // 1 - 10
    },
    {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Mike McEvoy",
      "location": "New York, NY", // (optional)
      "bio": "",
      "photo": "/managers/rival-mike.gif", // square ratio recommended (no larger than 500x500)
      "fantasyStart": "2003 (Fantasy Baseball); 2013 (Fantasy Football)", // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tyler Pollack", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-tyler.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 350, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "I, for one, welcome our new robot (auto draft) overlords.",
      "tradingScale": 10, // 1 - 10
    },
    {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tyler Pollack",
      "location": "Arlington, VA", // (optional)
      "bio": "Dr. Evil: The details of my life are quite inconsequential.\nTherapist (Carrie Fisher): Oh no, please, please, let's hear about your childhood.\nDr Evil: Very well, where do I begin? My father was a relentlessly self-improving boulangerie owner from Belgium with low grade narcolepsy and a penchant for buggery. My mother was a fifteen year old French prostitute named Chloe with webbed feet. My father would womanize, he would drink, he would make outrageous claims like he invented the question mark. Sometimes he would accuse chestnuts of being lazy, the sort of general malaise that only the genius possess and the insane lament. My childhood was typical, summers in Rangoon, luge lessons. In the spring we'd make meat helmets. When I was insolent I was placed in a burlap bag and beaten with reeds, pretty standard really. At the age of 12 I received my first scribe. At the age of fourteen, a Zoroastrian named Vilma ritualistically shaved my testicles. There really is nothing like a shorn scrotum, it's breathtaking, I suggest you try it.",
      "photo": "/managers/tyler.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "The Dirty Schnitzel", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival-jj.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6806, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Watch the Jets, then do the opposite.",
      "tradingScale": 5, // 1 - 10
    },
                      
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
