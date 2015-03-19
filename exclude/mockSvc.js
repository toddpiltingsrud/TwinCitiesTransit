'use strict';

var tct = tct || {};

tct.routes = [
    {Description: 'METRO Blue Line', ProviderID: '8', Route: '901'},
    {Description: 'METRO Green Line', ProviderID: '8', Route: '902'}, {
        Description: 'METRO Red Line',
        ProviderID: '9',
        Route: '903'
    }, {
        Description: '2 - Franklin Av - Riverside Av - U of M - 8th St SE',
        ProviderID: '8',
        Route: '2'
    }, {
        Description: '3 - U of M - Como Av - Energy Park Dr - Maryland Av',
        ProviderID: '8',
        Route: '3'
    }, {
        Description: '4 - New Brighton - Johnson St - Bryant Av - Southtown',
        ProviderID: '8',
        Route: '4'
    }, {
        Description: '5 - Brklyn Center - Fremont - 26th Av - Chicago - MOA',
        ProviderID: '8',
        Route: '5'
    }, {
        Description: '6 - U of M - Hennepin - Xerxes - France - Southdale',
        ProviderID: '8',
        Route: '6'
    }, {
        Description: '7 - Plymouth - 27Av - Midtown - 46St LRT - 34Av S',
        ProviderID: '8',
        Route: '7'
    }, {
        Description: '9 - Glenwood Av - Wayzata Blvd - Cedar Lk Rd -46St LRT',
        ProviderID: '8',
        Route: '9'
    }, {
        Description: '10 - Central Av - University Av - Northtown',
        ProviderID: '8',
        Route: '10'
    }, {
        Description: '11 - Columbia Heights - 2nd St NE - 4th Av S',
        ProviderID: '8',
        Route: '11'
    }, {
        Description: '12 - Uptown - Excelsior Blvd - Hopkins - Opus',
        ProviderID: '8',
        Route: '12'
    }, {
        Description: '14 - Robbinsdale-West Broadway-Bloomington Av',
        ProviderID: '8',
        Route: '14'
    }, {
        Description: '16 - U of M - University Av - Midway',
        ProviderID: '8',
        Route: '16'
    }, {
        Description: '17 - Minnetonka Blvd - Uptown - Washington St NE',
        ProviderID: '8',
        Route: '17'
    }, {
        Description: '18 - Nicollet Av - South Bloomington',
        ProviderID: '8',
        Route: '18'
    }, {
        Description: '19 - Olson Memorial Hwy - Penn Av N - Brooklyn Center',
        ProviderID: '8',
        Route: '19'
    }, {
        Description: '20 - Northstar Rail-Downtown Shuttle',
        ProviderID: '8',
        Route: '20'
    }, {
        Description: '21 - Uptown - Lake St - Selby  Av',
        ProviderID: '8',
        Route: '21'
    }, {
        Description: '22 - Brklyn Ctr - Lyndale Av N - Cedar - 28th Av S - VA',
        ProviderID: '8',
        Route: '22'
    }, {
        Description: '23 - Uptown - 38th St - Highland Village',
        ProviderID: '8',
        Route: '23'
    }, {
        Description: '25 - Northtown - Silver Lake - Stinson - Lake of Isles',
        ProviderID: '8',
        Route: '25'
    }, {
        Description: '27 - Lake St Station-26/28St',
        ProviderID: '11',
        Route: '27'
    }, {
        Description: '30 - Broadway Crosstown - Westgate Station',
        ProviderID: '8',
        Route: '30'
    }, {
        Description: '32 - Robbinsdale - Lowry Av - Rosedale',
        ProviderID: '6',
        Route: '32'
    }, {
        Description: "39 - Wells Fargo - Abbott NW and Children's Hospitals",
        ProviderID: '8',
        Route: '39'
    }, {
        Description: '46 - 50St - 46St - 46St LRT- Highland Village',
        ProviderID: '8',
        Route: '46'
    }, {
        Description: '53 - Ltd Stop - Uptown - Lake St - Marshall Av',
        ProviderID: '8',
        Route: '53'
    }, {
        Description: '54 - Ltd Stop - W 7St - Airport - MOA',
        ProviderID: '8',
        Route: '54'
    }, {
        Description: '59 - Ltd Stop - Blaine - Hwy 65 - Central - Mpls',
        ProviderID: '8',
        Route: '59'
    }, {
        Description: '61 - E Hennepin Av - Larpenteur Av - Arcade St',
        ProviderID: '8',
        Route: '61'
    }, {
        Description: '62 - Rice St - Little Canada - Shoreview - Signal Hills',
        ProviderID: '8',
        Route: '62'
    }, {
        Description: '63 - Grand Av - Raymond Sta - Sunray - McKnight Rd',
        ProviderID: '8',
        Route: '63'
    }, {
        Description: '64 - Payne - Maryland - White Bear Av - Maplewood',
        ProviderID: '8',
        Route: '64'
    }, {
        Description: '65 - Dale St - Co Rd B - Rosedale',
        ProviderID: '8',
        Route: '65'
    }, {
        Description: '67 - W Minnehaha - Raymond Sta - Hiawatha',
        ProviderID: '8',
        Route: '67'
    }, {
        Description: '68 - Jackson St - Robert St - 5th Av - Inver Hills',
        ProviderID: '8',
        Route: '68'
    }, {
        Description: '70 - St Clair Av - W 7St - Burns Av - Sunray',
        ProviderID: '8',
        Route: '70'
    }, {
        Description: '71 - Little Canada - Edgerton - Concord - Inver Hills',
        ProviderID: '8',
        Route: '71'
    }, {
        Description: '74 - 46St - Randolph - W 7St - E 7St - Sunray',
        ProviderID: '8',
        Route: '74'
    }, {
        Description: '75 - Stryker - Robert - Parkview Plaza - Lake Cove Apts',
        ProviderID: '8',
        Route: '75'
    }, {
        Description: '80 - Maplewood - White Bear Av - Sunray',
        ProviderID: '11',
        Route: '80'
    }, {
        Description: '83 - HarMar Target - Lexington Av',
        ProviderID: '11',
        Route: '83'
    }, {
        Description: '84 - Rosedale - Snelling - 46th St LRT - Sibley Plaza',
        ProviderID: '8',
        Route: '84'
    }, {
        Description: '87 - Rosedale - U of M St Paul - Cleveland Av',
        ProviderID: '11',
        Route: '87'
    }, {
        Description: '94 - Express - Mpls - St Paul',
        ProviderID: '8',
        Route: '94'
    }, {
        Description: '111 - Ltd Stop - 66th St - Chicago - Cedar - U of M',
        ProviderID: '8',
        Route: '111'
    }, {
        Description: '113 - Ltd Stop - Grand Av S - Lyndale Av S - U of M',
        ProviderID: '8',
        Route: '113'
    }, {
        Description: '114 - Ltd Stop - Excelsior Blvd - Uptown - U of M',
        ProviderID: '8',
        Route: '114'
    }, {
        Description: '118 - Ltd Stop - Central Av - Lowry Av - U of M',
        ProviderID: '8',
        Route: '118'
    }, {
        Description: '121 - U of M - Campus Connector',
        ProviderID: '1',
        Route: '121'
    }, {
        Description: '123 - U of M - East Bank Circulator',
        ProviderID: '1',
        Route: '123'
    }, {
        Description: '125 - U of M UNIV Circulator',
        ProviderID: '1',
        Route: '125'
    }, {
        Description: '129 - U of M - Huron Shuttle',
        ProviderID: '8',
        Route: '129'
    }, {
        Description: '133 - Ltd Stop - Bloomington Av - Chicago Av - Mpls',
        ProviderID: '8',
        Route: '133'
    }, {
        Description: '134 - Ltd Stop - Cleveland Av - Cretin Av - Mpls',
        ProviderID: '8',
        Route: '134'
    }, {
        Description: '135 - Ltd Stop - Grand Av S - 35th St - 36th St - Mpls',
        ProviderID: '8',
        Route: '135'
    }, {
        Description: '141 - Ltd Stop - New Brighton - Johnson St - Mpls',
        ProviderID: '8',
        Route: '141'
    }, {
        Description: '146 - Ltd Stop -  Vernon Av - 50th St - Mpls',
        ProviderID: '8',
        Route: '146'
    }, {
        Description: '156 - Express - 58th St - 56th St - Diamond Lake - Mpls',
        ProviderID: '8',
        Route: '156'
    }, {
        Description: '219 - Maplewood - Century Av - Hadley Av - Sunray',
        ProviderID: '11',
        Route: '219'
    }, {
        Description: '223 - Rosedale - Little Canada - Maplewood',
        ProviderID: '11',
        Route: '223'
    }, {
        Description: '225 - Deluxe - Roseville - Covenry - Rosedale',
        ProviderID: '11',
        Route: '225'
    }, {
        Description: '227 - Target Shoreview - Victoria - Rosedale',
        ProviderID: '11',
        Route: '227'
    }, {
        Description: '250 - Express - St Josephs P&R - 95Av P&R - Mpls',
        ProviderID: '8',
        Route: '250'
    }, {
        Description: '252 - 95AV P&R- U of M',
        ProviderID: '8',
        Route: '252'
    }, {
        Description: '261 - Express - Shoreview - Roseville - Mpls',
        ProviderID: '8',
        Route: '261'
    }, {
        Description: '262 - Ltd Stop - 95Av P&R - Rice St - St Paul',
        ProviderID: '8',
        Route: '262'
    }, {
        Description: '263 - Express - Rice St Park and Ride - Roseville',
        ProviderID: '8',
        Route: '263'
    }, {
        Description: '264 - Express - Co Rd C Park and Ride - Roseville',
        ProviderID: '8',
        Route: '264'
    }, {
        Description: '265 - Express - White Bear Lake - Maplewood - St Paul',
        ProviderID: '8',
        Route: '265'
    }, {
        Description: '270 - Express - Mahtomedi - Maplewood - Minneapolis',
        ProviderID: '8',
        Route: '270'
    }, {
        Description: '272 - Express - Maplewood - Roseville - U of M',
        ProviderID: '8',
        Route: '272'
    }, {
        Description: '275 - Express - Forest Lake-Running Aces - St Paul',
        ProviderID: '8',
        Route: '275'
    }, {
        Description: '288 - Express - Forest Lake - Mpls',
        ProviderID: '8',
        Route: '288'
    }, {
        Description: '294 - Express - Oakdale - Stillwater - St Paul',
        ProviderID: '8',
        Route: '294'
    }, {
        Description: '350 - Ltd Stop - Sunray - McKnight - St Paul',
        ProviderID: '11',
        Route: '350'
    }, {
        Description: '351 - Express - Woodbury - St Paul',
        ProviderID: '8',
        Route: '351'
    }, {
        Description: '353 - Express - Woodbury - St Paul - Mpls',
        ProviderID: '8',
        Route: '353'
    }, {
        Description: '355 - Express - Woodbury - Mpls',
        ProviderID: '8',
        Route: '355'
    }, {
        Description: '361 - Express - Cottage Grove - St Paul',
        ProviderID: '8',
        Route: '361'
    }, {
        Description: '364 - Express - Newport - Cottage Grove - St Paul',
        ProviderID: '11',
        Route: '364'
    }, {
        Description: '365 - Express - Cottage Grove - Mpls',
        ProviderID: '8',
        Route: '365'
    }, {
        Description: '375 - Express - Oakdale - Mpls',
        ProviderID: '8',
        Route: '375'
    }, {
        Description: '415 - MOA - Mendota Heights - Eagan',
        ProviderID: '8',
        Route: '415'
    }, {
        Description: '417 - Mendota Heights - St Paul',
        ProviderID: '11',
        Route: '417'
    }, {
        Description: '420 - MVTA - Flex - Apple Valley - Rosemount',
        ProviderID: '9',
        Route: '420'
    }, {
        Description: '421 - MVTA - Flex - Savage P&R - Burnsville',
        ProviderID: '9',
        Route: '421'
    }, {
        Description: '426 - MVTA - Burnsville - Nicollet Av - Portland Av',
        ProviderID: '9',
        Route: '426'
    }, {
        Description: '436 - MVTA - 46th St LRT - Mendota Heights - Eagan',
        ProviderID: '9',
        Route: '436'
    }, {
        Description: '437 - MVTA - Cedar Tr Ct - Eagan Tr Ct',
        ProviderID: '9',
        Route: '437'
    }, {
        Description: '438 - MVTA - Cliff - Cedar Tr Ct',
        ProviderID: '9',
        Route: '438'
    }, {
        Description: '440 - MVTA - VA - Blackhawk P&R - MN Zoo - Apple Valley',
        ProviderID: '9',
        Route: '440'
    }, {
        Description: '442 - MVTA - Burnsville - Apple Valley',
        ProviderID: '9',
        Route: '442'
    }, {
        Description: '444 - MVTA - MOA - Eagan - Burnsville - Savage',
        ProviderID: '9',
        Route: '444'
    }, {
        Description: '445 - MVTA  - Eagan - Cedarvale - Yankee Doodle Rd',
        ProviderID: '9',
        Route: '445'
    }, {
        Description: '446 - MVTA - 46th St LRT - Mendota Heights - Eagan',
        ProviderID: '9',
        Route: '446'
    }, {
        Description: '452 - Express - West St Paul - Mpls',
        ProviderID: '8',
        Route: '452'
    }, {
        Description: '460 - MVTA - Express - Burnsville - Mpls - U of M',
        ProviderID: '9',
        Route: '460'
    }, {
        Description: '464 - MVTA - Express - Burnsville - Savage - Mpls',
        ProviderID: '9',
        Route: '464'
    }, {
        Description: '465 - MVTA - Express - Burnsvlle - U of M',
        ProviderID: '9',
        Route: '465'
    }, {
        Description: '467 - Express - Lakeville-Minneapolis',
        ProviderID: '8',
        Route: '467'
    }, {
        Description: '470 - MVTA - Express - Eagan - Blackhawk P&R - Mpls',
        ProviderID: '9',
        Route: '470'
    }, {
        Description: '472 - MVTA - Express - Eagan - Blackhawk P&R - Mpls',
        ProviderID: '9',
        Route: '472'
    }, {
        Description: '475 - MVTA - Express - Apple Valley - U of M',
        ProviderID: '9',
        Route: '475'
    }, {
        Description: '476 - MVTA - Express - Palomino - 132nd St - Gardenview',
        ProviderID: '9',
        Route: '476'
    }, {
        Description: '477 - MVTA - Express -Apple Valley - Mpls',
        ProviderID: '9',
        Route: '477'
    }, {
        Description: '478 - MVTA - Express - Rosemount P&R',
        ProviderID: '9',
        Route: '478'
    }, {
        Description: '479 - MVTA - Express - Apple Valley - 157th St - Mpls',
        ProviderID: '9',
        Route: '479'
    }, {
        Description: '480 - MVTA - Express - Apple Valley - Eagan - St Paul',
        ProviderID: '9',
        Route: '480'
    }, {
        Description: '484 - MVTA - Express - Eagan - St Paul',
        ProviderID: '9',
        Route: '484'
    }, {
        Description: '489 - MVTA - Thomson Reuters - Ecolab - Eagan - St Paul',
        ProviderID: '9',
        Route: '489'
    }, {
        Description: '490 - BlueXpress - Shakopee - Prior Lake - Mpls',
        ProviderID: '4',
        Route: '490'
    }, {
        Description: '491 - BlueXpress - Reverse Commute',
        ProviderID: '4',
        Route: '491'
    }, {
        Description: '492 - BlueXpress - Prior Lake-Mpls',
        ProviderID: '4',
        Route: '492'
    }, {
        Description: '496 - Shakopee Transit - Shakopee Circulator',
        ProviderID: '5',
        Route: '496'
    }, {
        Description: '515 - Southdale - 66th St - Bloomington Av - VA - MOA',
        ProviderID: '8',
        Route: '515'
    }, {
        Description: '535 - Ltd Stop - South Bloomington - Richfield - Mpls',
        ProviderID: '8',
        Route: '535'
    }, {
        Description: '537 - Norm Coll - France Av - York Av - Southdale',
        ProviderID: '11',
        Route: '537'
    }, {
        Description: '538 - Southdale - York Av - Southtown - 86th St - MOA',
        ProviderID: '11',
        Route: '538'
    }, {
        Description: '539 - Norm Coll - France Av - 98St - MOA',
        ProviderID: '11',
        Route: '539'
    }, {
        Description: '540 - Edina - Richfield - 77th St - MOA',
        ProviderID: '11',
        Route: '540'
    }, {
        Description: '542 - 84th St - 76th St - American Blvd - MOA',
        ProviderID: '11',
        Route: '542'
    }, {
        Description: '552 - Express - 12th Av - Bloomington Av - Mpls',
        ProviderID: '8',
        Route: '552'
    }, {
        Description: '553 - Express - Bloomington - Portland Av - Mpls',
        ProviderID: '8',
        Route: '553'
    }, {
        Description: '554 - Express - Bloomington - Nicollet Av - Mpls',
        ProviderID: '8',
        Route: '554'
    }, {
        Description: '558 - Express - Southtown - Lyndale Av - Penn Av - Mpls',
        ProviderID: '8',
        Route: '558'
    }, {
        Description: '565 - Express - Target N Campus - Knox P&R',
        ProviderID: '8',
        Route: '565'
    }, {
        Description: '568 - Nicollet Av - 50th St - Opportunity Partners',
        ProviderID: '8',
        Route: '568'
    }, {
        Description: '578 - Express - Edina - Southdale - Mpls',
        ProviderID: '8',
        Route: '578'
    }, {
        Description: '579 - Express - U of M - Southdale',
        ProviderID: '8',
        Route: '579'
    }, {
        Description: '587 - Express - Edina - Valley View Rd - Mpls',
        ProviderID: '8',
        Route: '587'
    }, {
        Description: '588 - Mpls - Normandale Lake Office Park',
        ProviderID: '8',
        Route: '588'
    }, {
        Description: '589 - Express - West Bloomington - Mpls',
        ProviderID: '8',
        Route: '589'
    }, {
        Description: '597 - Express - West Bloomington - Mpls',
        ProviderID: '8',
        Route: '597'
    }, {
        Description: '604 - Wayzata Blvd - Louisiana Av - Excelsior Blvd',
        ProviderID: '11',
        Route: '604'
    }, {
        Description: '614 - Ridgedale - Minnetonka Heights',
        ProviderID: '11',
        Route: '614'
    }, {
        Description: '615 - Ridgedale - Co Rd 73 - St Louis Park',
        ProviderID: '11',
        Route: '615'
    }, {
        Description: '635 - SW Transit - Express - Swst Station Circulator',
        ProviderID: '7',
        Route: '635'
    }, {
        Description: '636 - SW Transit - Express - Edendale - SW Station',
        ProviderID: '7',
        Route: '636'
    }, {
        Description: '643 - Ltd Stop - Cedar Lake Rd - Mpls',
        ProviderID: '8',
        Route: '643'
    }, {
        Description: '649 - Express - Louisiana Av - Cedar Lake Rd- Mpls',
        ProviderID: '8',
        Route: '649'
    }, {
        Description: '652 - Express - Plymouth Rd - Co Rd 73 P&R - U of M',
        ProviderID: '8',
        Route: '652'
    }, {
        Description: '663 - Express - Cedar Lake Rd - Mpls',
        ProviderID: '8',
        Route: '663'
    }, {
        Description: '664 - Express - Co Rd 3 - Excelsior Blvd - Mpls',
        ProviderID: '8',
        Route: '664'
    }, {
        Description: '667 - Express - Minnetonka - St Louis Park - Mpls',
        ProviderID: '8',
        Route: '667'
    }, {
        Description: '668 - Express - Hopkins - St Louis Park - Mpls',
        ProviderID: '8',
        Route: '668'
    }, {
        Description: '670 - Express - Excelsior - Mpls',
        ProviderID: '11',
        Route: '670'
    }, {
        Description: '671 - Express - Excelsior - Deephaven - Mpls',
        ProviderID: '11',
        Route: '671'
    }, {
        Description: '672 - Express - Wayzata - Minnetonka - Mpls',
        ProviderID: '8',
        Route: '672'
    }, {
        Description: '673 - Express - Co Rd 73 P&R - Mpls',
        ProviderID: '8',
        Route: '673'
    }, {
        Description: '674 - Express - Maple Plain -Orono - Wayzata - Mpls',
        ProviderID: '8',
        Route: '674'
    }, {
        Description: '675 - Express - Mound - Wayzata - Ridgedale - Mpls',
        ProviderID: '8',
        Route: '675'
    }, {
        Description: '677 - Express- Mound - Orono - Plymouth Rd - Mpls',
        ProviderID: '8',
        Route: '677'
    }, {
        Description: '679 - Express Co Rd 73  Target Field',
        ProviderID: '8',
        Route: '679'
    }, {
        Description: '684 - SW Transit - Express - Eden Prairie - Southdale',
        ProviderID: '7',
        Route: '684'
    }, {
        Description: '687 - SW Transit - Express - Eden Prairie - Target N Cam',
        ProviderID: '7',
        Route: '687'
    }, {
        Description: '690 - SW Transit - Express - Eden Prairie - Mpls',
        ProviderID: '7',
        Route: '690'
    }, {
        Description: '691 - SW Transit - Express - Eden Prairie - Mpls',
        ProviderID: '7',
        Route: '691'
    }, {
        Description: '692 - SW Transit - Express - Chanhassen',
        ProviderID: '7',
        Route: '692'
    }, {
        Description: '694 - SW Transit - Express - Best Buy - Normandale',
        ProviderID: '7',
        Route: '694'
    }, {
        Description: '695 - SW Transit - Express - Chaska - Chanhassen - Mpls',
        ProviderID: '7',
        Route: '695'
    }, {
        Description: '697 - SW Transit - Express - Eden Prairie - Mpls',
        ProviderID: '7',
        Route: '697'
    }, {
        Description: '698 - SW Transit - Express - Chaska - Chanhassen - Mpls',
        ProviderID: '7',
        Route: '698'
    }, {
        Description: '699 - SW Transit - Express - Chaska - Mpls',
        ProviderID: '7',
        Route: '699'
    }, {
        Description: '705 - Starlite - Winnetka Av',
        ProviderID: '11',
        Route: '705'
    }, {
        Description: '716 - Zane Av - 63rd Av - Crystal - Robbinsdale',
        ProviderID: '11',
        Route: '716'
    }, {
        Description: '717 - Brooklyn Center - Robbinsdale-Plymouth',
        ProviderID: '11',
        Route: '717'
    }, {
        Description: '721 - Ltd Stop - Brooklyn Center - New Hope - Mpls',
        ProviderID: '8',
        Route: '721'
    }, {
        Description: '722 - Brooklyn Ctr - Humboldt Av N - Shingle Creek Pkwy',
        ProviderID: '8',
        Route: '722'
    }, {
        Description: '723 - Starlite - North Henn Comm College - Brooklyn Ctr',
        ProviderID: '8',
        Route: '723'
    }, {
        Description: '724 - Ltd Stop - Target Campus - Starlite - Brooklyn Ctr',
        ProviderID: '8',
        Route: '724'
    }, {
        Description: '740 - Plymouth - Fernbrook Ln - Xenium Ln',
        ProviderID: '10',
        Route: '740'
    }, {
        Description: '741 - Plymouth - Annapolis - Campus Dr - Station 73',
        ProviderID: '10',
        Route: '741'
    }, {
        Description: '742 - Plymouth - Express - Bass Lake Rd',
        ProviderID: '10',
        Route: '742'
    }, {
        Description: '747 - Plymouth - Express - Station 73 - Mpls',
        ProviderID: '10',
        Route: '747'
    }, {
        Description: '755 - Ltd Stop - Hwy 55 - Golden Valley Rd - Winnetka Av',
        ProviderID: '8',
        Route: '755'
    }, {
        Description: '756 - Express- Hwy 55 - Mendelssohn Rd - Boone Av',
        ProviderID: '8',
        Route: '756'
    }, {
        Description: '758 - Express - Douglas - MnDot P&R - Noble - Mpls',
        ProviderID: '8',
        Route: '758'
    }, {
        Description: '760 - Express - Zane Av - 63rd Av - 65th Av P&R - Mpls',
        ProviderID: '8',
        Route: '760'
    }, {
        Description: '761 - Express - Brooklyn Park - Xerxes - 49th Av - Mpls',
        ProviderID: '8',
        Route: '761'
    }, {
        Description: '762 - Ltd Stop - Brooklyn Ctr - North Mpls - Mpls',
        ProviderID: '8',
        Route: '762'
    }, {
        Description: '763 - Express - 85th Av - Brookdale Dr - Humboldt - Mpls',
        ProviderID: '8',
        Route: '763'
    }, {
        Description: '764 - Express - Winnetka Av - 42nd Av - Mpls',
        ProviderID: '8',
        Route: '764'
    }, {
        Description: '765 - Express - Target - Hwy 252 and 73rd Av P&R - Mpls',
        ProviderID: '8',
        Route: '765'
    }, {
        Description: '766 - Express - Champlin - Noble P&R - West River Rd',
        ProviderID: '8',
        Route: '766'
    }, {
        Description: '767 - Express - 63rd Av P&R - 65th Av P&R - Mpls',
        ProviderID: '8',
        Route: '767'
    }, {
        Description: '768 - Express - Noble P&R - Downtown',
        ProviderID: '8',
        Route: '768'
    }, {
        Description: '771 - Plymouth - SW Plymouth - Station 73',
        ProviderID: '10',
        Route: '771'
    }, {
        Description: '772 - Plymouth - Express - Station 73',
        ProviderID: '10',
        Route: '772'
    }, {
        Description: '774 - Plymouth - Express - Station 73',
        ProviderID: '10',
        Route: '774'
    }, {
        Description: '776 - Plymouth - Express - Southwest Plymouth',
        ProviderID: '10',
        Route: '776'
    }, {
        Description: '777 - Plymouth - Express - NW Plymouth - Station 73',
        ProviderID: '10',
        Route: '777'
    }, {
        Description: '780 - Maple Grove - Express - Shepherd of the Grove P&R',
        ProviderID: '12',
        Route: '780'
    }, {
        Description: '781 - Maple Grove - Express - Maple Grove Station',
        ProviderID: '12',
        Route: '781'
    }, {
        Description: '782 - Maple Grove - Express - Zachary and 96th Av P&R',
        ProviderID: '12',
        Route: '782'
    }, {
        Description: '783 - Maple Grove - Express - Crosswinds Church P&R',
        ProviderID: '12',
        Route: '783'
    }, {
        Description: '785 - Maple Grove - Express - Parkway Station',
        ProviderID: '12',
        Route: '785'
    }, {
        Description: '787 - Maple Grove - Midday Shuttle - Flex Route',
        ProviderID: '12',
        Route: '787'
    }, {
        Description: '788 - Maple Grove - Bass Lake Rd - Crosswinds Church P&R',
        ProviderID: '12',
        Route: '788'
    }, {
        Description: '790 - Plymouth - Express - Cub Foods - Four Seasons',
        ProviderID: '10',
        Route: '790'
    }, {
        Description: '791 - Plymouth - Shuttle - Larch Ln - Four Seasons',
        ProviderID: '10',
        Route: '791'
    }, {
        Description: '793 - Plymouth - Express - Cub Foods - Four Seasons',
        ProviderID: '10',
        Route: '793'
    }, {
        Description: '795 - Plymouth - Express - Midday - Northeast Plymouth',
        ProviderID: '10',
        Route: '795'
    }, {
        Description: '801 - Brooklyn Ctr - Columbia Heights - Rosedale',
        ProviderID: '11',
        Route: '801'
    }, {
        Description: '805 - Anoka Traveler - Anoka - Coon Rapids - Northtown',
        ProviderID: '11',
        Route: '805'
    }, {
        Description: '824 - Ltd Stop - Northtown - Monroe - University - Mpls',
        ProviderID: '8',
        Route: '824'
    }, {
        Description: '825 - Ltd Stop - Northtown - St. Anthony - Mpls',
        ProviderID: '8',
        Route: '825'
    }, {
        Description: '831 - Anoka Traveler - 117th Av - Polk - Northtown',
        ProviderID: '11',
        Route: '831'
    }, {
        Description: '850 - Express - Riverdale P&R - Foley P&R - Mpls',
        ProviderID: '8',
        Route: '850'
    }, {
        Description: '852 - Express - Anoka - Coon Rapids - Northtown - Mpls',
        ProviderID: '8',
        Route: '852'
    }, {
        Description: '854 - Express - Paul Pkwy - Northdale - Northtown - Mpls',
        ProviderID: '8',
        Route: '854'
    }, {
        Description: '860 - Express - Riverdale - Northtown - St Paul',
        ProviderID: '8',
        Route: '860'
    }, {
        Description: '865 - Express - Blaine - Ham Lake - East Bethel',
        ProviderID: '8',
        Route: '865'
    }, {
        Description: '887 - Express - St Cloud Link',
        ProviderID: '3',
        Route: '887'
    }, {
        Description: '888 - Northstar-Big Lk-Elk Rv-Anoka-Coon Rp-Mpls',
        ProviderID: '8',
        Route: '888'
    }, {Description: '906 - Light Rail Shuttle - Lindbergh - Humphrey', ProviderID: '2', Route: '906'}];

tct.directions = [{Text: 'NORTHBOUND', Value: '4'},
    {Text: 'SOUTHBOUND', Value: '1'}];

tct.stops = [{Text: 'Brooklyn Center Transit Center', Value: 'BCTC'},
    {Text: '69th Ave N and Humboldt Ave N', Value: '69HU'}, {
        Text: 'Logan Ave N and 53rd Ave N',
        Value: '53LG'
    }, {Text: 'Dupont Ave N and 57th Ave N', Value: '57DP'}, {
        Text: '51st Ave N and Penn Ave N',
        Value: '51PE'
    }, {Text: 'Lyndale Ave N  and 42nd Ave N', Value: '42LY'}, {
        Text: 'Lyndale Ave N and W Broadway Ave',
        Value: 'LYBD'
    }, {Text: '7th St  and Olson Memorial Hwy', Value: '7SOL'}, {
        Text: '8th St S and Nicollet Mall',
        Value: '8SNI'
    }, {Text: 'Cedar Ave S and Washington Ave S', Value: 'CEWA'}, {
        Text: 'Cedar Ave S and Franklin Ave',
        Value: 'FRCE'
    }, {Text: 'Cedar Ave S and Lake St', Value: 'CELA'}, {
        Text: '38th St Station ',
        Value: '38HI'
    }, {Text: '28th Ave S and 42nd St E', Value: '4228'}, {
        Text: '58th St and 21st Ave S',
        Value: '5821'
    }, {Text: '58th St E and 28th Ave S', Value: '5828'}, {Text: 'VA Medical Center ', Value: 'VETS'}];

tct.departures = [
    {
        Actual: true,
        BlockNumber: 1525,
        DepartureText: '16 Min',
        DepartureTime: '/Date(1421365620000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Dupont-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 45.0597599,
        VehicleLongitude: -93.3191201
    },  {
        Actual: false,
        BlockNumber: 1502,
        DepartureText: '6:07',
        DepartureTime: '/Date(1421366820000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via 51-Penn',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1504,
        DepartureText: '6:29',
        DepartureTime: '/Date(1421368140000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Dupont-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1516,
        DepartureText: '7:01',
        DepartureTime: '/Date(1421370060000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Logan-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1527,
        DepartureText: '7:30',
        DepartureTime: '/Date(1421371800000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Dupont-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1526,
        DepartureText: '8:01',
        DepartureTime: '/Date(1421373660000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Logan-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1528,
        DepartureText: '8:31',
        DepartureTime: '/Date(1421375460000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Dupont-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1525,
        DepartureText: '9:02',
        DepartureTime: '/Date(1421377320000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Logan-57',
        Gate: 'G',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }
];

tct.stop = [
    {
    Actual: true,
    BlockNumber: 1448,
    DepartureText: '2 Min',
    DepartureTime: '/Date(1421365920000-0600)/',
    Description: 'Downtown',
    Gate: '',
    Route: '19',
    RouteDirection: 'SOUTHBOUND',
    Terminal: '',
    VehicleHeading: 0,
    VehicleLatitude: 44.977478,
    VehicleLongitude: -93.2763637
    },    {
        Actual: true,
        BlockNumber: 2265,
        DepartureText: '2 Min',
        DepartureTime: '/Date(1421365920000-0600)/',
        Description: 'E 25St - 36Av / 46St Station',
        Gate: '',
        Route: '9',
        RouteDirection: 'EASTBOUND',
        Terminal: 'A',
        VehicleHeading: 0,
        VehicleLatitude: 44.9785345,
        VehicleLongitude: -93.2787391
    },
    {
        Actual: true,
        BlockNumber: 2218,
        DepartureText: '5 Min',
        DepartureTime: '/Date(1421366100000-0600)/',
        Description: 'Ltd Stop / Downtown / Via Hillsboro',
        Gate: '',
        Route: '755',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 44.9842463,
        VehicleLongitude: -93.2863537
    },
    {
        Actual: true,
        BlockNumber: 1156,
        DepartureText: '4 Min',
        DepartureTime: '/Date(1421366040000-0600)/',
        Description: 'Chicago / Mall of Amer',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'E',
        VehicleHeading: 0,
        VehicleLatitude: 44.9774482,
        VehicleLongitude: -93.276166
    },
    {
        Actual: true,
        BlockNumber: 1445,
        DepartureText: '14 Min',
        DepartureTime: '/Date(1421366640000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 44.9916692,
        VehicleLongitude: -93.3083087
    },
    {
        Actual: true,
        BlockNumber: 1139,
        DepartureText: '14 Min',
        DepartureTime: '/Date(1421366640000-0600)/',
        Description: 'Chicago - 56St',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'B',
        VehicleHeading: 0,
        VehicleLatitude: 44.9979876,
        VehicleLongitude: -93.2957061
    },
    {
        Actual: false,
        BlockNumber: 1522,
        DepartureText: '6:15',
        DepartureTime: '/Date(1421367300000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Logan-57',
        Gate: '',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: true,
        BlockNumber: 1447,
        DepartureText: '20 Min',
        DepartureTime: '/Date(1421367000000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 45.0079588,
        VehicleLongitude: -93.3083072
    }, {
        Actual: false,
        BlockNumber: 1114,
        DepartureText: '6:14',
        DepartureTime: '/Date(1421367240000-0600)/',
        Description: 'Chicago / Mall of Amer',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'E',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1240,
        DepartureText: '6:17',
        DepartureTime: '/Date(1421367420000-0600)/',
        Description: 'E 25St - 36Av / 46St Station',
        Gate: '',
        Route: '9',
        RouteDirection: 'EASTBOUND',
        Terminal: 'A',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1437,
        DepartureText: '6:20',
        DepartureTime: '/Date(1421367600000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 2215,
        DepartureText: '6:24',
        DepartureTime: '/Date(1421367840000-0600)/',
        Description: 'Ltd Stop / Downtown / Via Hillsboro',
        Gate: '',
        Route: '755',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1141,
        DepartureText: '6:24',
        DepartureTime: '/Date(1421367840000-0600)/',
        Description: 'Chicago - 56St',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'B',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1525,
        DepartureText: '6:27',
        DepartureTime: '/Date(1421368020000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Dupont-57',
        Gate: '',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1446,
        DepartureText: '6:32',
        DepartureTime: '/Date(1421368320000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1163,
        DepartureText: '6:34',
        DepartureTime: '/Date(1421368440000-0600)/',
        Description: 'Chicago / Mall of Amer',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'E',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1444,
        DepartureText: '6:44',
        DepartureTime: '/Date(1421369040000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1154,
        DepartureText: '6:46',
        DepartureTime: '/Date(1421369160000-0600)/',
        Description: 'Chicago - 56St',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'B',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1239,
        DepartureText: '6:47',
        DepartureTime: '/Date(1421369220000-0600)/',
        Description: 'E 25St - 36Av / 46St Station',
        Gate: '',
        Route: '9',
        RouteDirection: 'EASTBOUND',
        Terminal: 'A',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1502,
        DepartureText: '6:47',
        DepartureTime: '/Date(1421369220000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via 51-Penn',
        Gate: '',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1104,
        DepartureText: '6:56',
        DepartureTime: '/Date(1421369760000-0600)/',
        Description: 'Chicago / Mall of Amer',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'E',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1443,
        DepartureText: '6:56',
        DepartureTime: '/Date(1421369760000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1158,
        DepartureText: '7:06',
        DepartureTime: '/Date(1421370360000-0600)/',
        Description: 'Chicago - 56St',
        Gate: '',
        Route: '5',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'B',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1504,
        DepartureText: '7:07',
        DepartureTime: '/Date(1421370420000-0600)/',
        Description: 'Cedar-28Av/VA Med Ctr/Via Dupont-57',
        Gate: '',
        Route: '22',
        RouteDirection: 'SOUTHBOUND',
        Terminal: 'H',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }, {
        Actual: false,
        BlockNumber: 1421,
        DepartureText: '7:08',
        DepartureTime: '/Date(1421370480000-0600)/',
        Description: 'Downtown',
        Gate: '',
        Route: '19',
        RouteDirection: 'SOUTHBOUND',
        Terminal: '',
        VehicleHeading: 0,
        VehicleLatitude: 0,
        VehicleLongitude: 0
    }];

tct.vehicleLocations = [
    {
    BlockNumber: 1522,
    Direction: 1,
    LocationTime: '/Date(1421368860227-0600)/',
    Route: '22',
    Terminal: 'H',
    VehicleHeading: 0,
    VehicleLatitude: 44.9588517,
    VehicleLongitude: -93.2474041
}, {
    BlockNumber: 1516,
    Direction: 4,
    LocationTime: '/Date(1421368828653-0600)/',
    Route: '22',
    Terminal: 'B',
    VehicleHeading: 0,
    VehicleLatitude: 45.0373864,
    VehicleLongitude: -93.2942205
}, {
    BlockNumber: 1527,
    Direction: 4,
    LocationTime: '/Date(1421368825877-0600)/',
    Route: '22',
    Terminal: 'B',
    VehicleHeading: 0,
    VehicleLatitude: 44.9766226,
    VehicleLongitude: -93.265164
}, {
    BlockNumber: 1526,
    Direction: 4,
    LocationTime: '/Date(1421368840243-0600)/',
    Route: '22',
    Terminal: 'B',
    VehicleHeading: 0,
    VehicleLatitude: 44.9070804,
    VehicleLongitude: -93.2322556
}, {
    BlockNumber: 1513,
    Direction: 4,
    LocationTime: '/Date(1421368840120-0600)/',
    Route: '22',
    Terminal: 'C',
    VehicleHeading: 0,
    VehicleLatitude: 44.9462684,
    VehicleLongitude: -93.2473462
}, {
    BlockNumber: 1162,
    Direction: 1,
    LocationTime: '/Date(1421368826907-0600)/',
    Route: '22',
    Terminal: 'G',
    VehicleHeading: 0,
    VehicleLatitude: 44.8981033,
    VehicleLongitude: -93.2238933
}, {
    BlockNumber: 1504,
    Direction: 1,
    LocationTime: '/Date(1421368811587-0600)/',
    Route: '22',
    Terminal: 'H',
    VehicleHeading: 0,
    VehicleLatitude: 45.0522631,
    VehicleLongitude: -93.2940717
}, {
    BlockNumber: 1525,
    Direction: 1,
    LocationTime: '/Date(1421368847000-0600)/',
    Route: '22',
    Terminal: 'H',
    VehicleHeading: 0,
    VehicleLatitude: 44.9666798,
    VehicleLongitude: -93.247384
}, {
    BlockNumber: 1524,
    Direction: 4,
    LocationTime: '/Date(1421368825393-0600)/',
    Route: '22',
    Terminal: 'C',
    VehicleHeading: 0,
    VehicleLatitude: 44.9854213,
    VehicleLongitude: -93.2852167
}, {
    BlockNumber: 1502,
    Direction: 1,
    LocationTime: '/Date(1421368813397-0600)/',
    Route: '22',
    Terminal: 'H',
    VehicleHeading: 0,
    VehicleLatitude: 44.9840602,
    VehicleLongitude: -93.2834788
}, {
    BlockNumber: 1519,
    Direction: 4,
    LocationTime: '/Date(1421368760667-0600)/',
    Route: '22',
    Terminal: 'D',
    VehicleHeading: 0,
    VehicleLatitude: 45.0777872,
    VehicleLongitude: -93.3134259
}];

tct.mockSvc = {

    directions: ['','SOUTHBOUND','EASTBOUND','WESTBOUND','NORTHBOUND'],

    getRoutes: function (callback) {
        setTimeout(function(){
            callback(tct.routes);
        }, 0);
    },

    getDirections: function (route, callback) {
        setTimeout(function(){
            callback(tct.directions);
        }, 0);
    },

    getStops: function (route, direction, callback) {
        setTimeout(function(){
            callback(tct.stops);
        }, 0);
    },

    getDepartures: function (args, callback) {
        this.convertDates(tct.departures);
        setTimeout(function(){
            callback(tct.departures);
        }, 0);
    },

    getVehicleLocations: function (route, callback) {
        this.convertDates(tct.vehicleLocations, 'LocationTime');
        setTimeout(function(){
            // convert directions to names
            tct.vehicleLocations.forEach(function(loc){
                loc.RouteDirection = tct.mockSvc.directions[loc.Direction];
            });

            callback(tct.vehicleLocations);
        }, 0);
    },

    getRouteDirectionStop: function(routeID, directionID, stopID, callback) {
        var route, direction, stop, timeoutID;
        this.getRoutes(function(data){
            // iterate through each route to find the route ID
            var i;
            for (i = 0; i < data.length; i++) {
                if (data[i].Route == routeID) {
                    route = data[i];
                    checkDone();
                    return;
                }
            }
            route = {Route:routeID};
            checkDone();
        });

        this.getDirections(routeID, function(data){
            var i;
            for (i = 0; i < data.length; i++) {
                if (data[i].Value == directionID) {
                    direction = data[i];
                    checkDone();
                    return;
                }
            }
            direction = {Value:directionID};
            checkDone();
        });

        this.getStops(routeID, directionID, function(data){
            var i;
            for (i = 0; i < data.length; i++) {
                if (data[i].Value == stopID) {
                    stop = data[i];
                    checkDone();
                    return;
                }
            }
            stop = {Value:stopID};
            checkDone();
        });

        function checkDone() {
            if (route && direction && stop) {
                clearTimeout(timeoutID);
                callback({
                    route:route,
                    direction:direction,
                    stop:stop
                });
            }
        }

        timeoutID = setTimeout(callback, 10 * 1000);
    },

    convertDates: function (data, field) {
        // create Date objects
        field = field || 'DepartureTime';
        var dt = new Date();
        var i = dt.getTime();
        data.forEach(function (dep) {
            i += 100000;
            dep[field] = new Date(i);
        });
    }

};
