/*
* basic idea of game is that each car listed on the site gets a random number assigned to it,
* once all numbers are assigned they are compared against each other in 1v1 one "races" until there is one winner.
* the user can guess on each race who will win.
*
* {add all cars to a dictionary with the following template:
* key/value
*car name / random number
* }
*
* {races:
*   start by racing the first and last entries, the winners get added to a list.
*       two counters, one counting up and one counting down once the are equal the loop stops.
*           next loop will cycle through the winners list and remove the losers.
*               before each race the user will be prompted to " bet on a winner"
*
*
* }
*       winner is chosen by the last one in the winners list.
*
* */