
window.onload = function () {
    var carList = ["BRZ", "Grom", "Miata", "300Z", "r34", "RX7", "s2000", "Viper", "Golf", "WRX"]
    var Cars = {};
    carList.forEach(function (car) {
        var multiplyer=Math.random();
        Cars[car] = Math.random()*multiplyer;

    })
    var raceStart = document.getElementById("RaceB").onclick = Race;

    function Race() {
        var Car1 = document.getElementById('Racer1').value;
        var Car2 = document.getElementById('Racer2').value;
        var output = document.getElementById("raceWinner");
        var Winner;
        console.log(Cars[Car1]);
        console.log(Cars[Car2]);
        if (Cars[Car1] > Cars[Car2]) {
            Winner = Car1;
        }
        if (Cars[Car1] < Cars[Car2]) {
            Winner = Car2;
        }
        if(Cars[Car1]===Cars[Car2]){
            Winner="TIE!";
        }


        output.innerHTML = "The winner is:" + Winner;

    }
}