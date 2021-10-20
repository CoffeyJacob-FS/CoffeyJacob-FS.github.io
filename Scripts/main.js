class App {
    constructor() {
        let run= new getinfo();
    }
    static getInstance() {
        if (!App._instance) {
            App._instance = new App();
            return App._instance;
        } else {
            throw "Sorry only one instance of 'App' can be made, please end previous process before starting a new one."
        }
    }

}
class getinfo{
    constructor(){
        let good="#31572c";
        let ok="#F7c548";
        let bad="#B10f2e";
        //County
        document.querySelector(".county").innerHTML= data.County[0].county+" County Covid-19 Statistics";
        document.querySelector(".countycases").innerHTML=data.County[0].totalCases;
        document.querySelector(".countycases").style.color=bad;
        document.querySelector(".countydeaths").innerHTML=data.County[0].totalDeaths;
        document.querySelector(".countydeaths").style.color=ok;
        document.querySelector(".countyrisklevel").innerHTML=data.County[0].riskLevel;
        document.querySelector(".countyrisklevel").style.color=good;
        document.querySelector(".countyptests").innerHTML=data.County[0].positiveTests;
        document.querySelector(".countyptests").style.color=good;
        document.querySelector(".countyntests").innerHTML=data.County[0].negativeTests;
        document.querySelector(".countyntests").style.color=good;
        document.querySelector(".countyncases").innerHTML=data.County[0].ncases;
        document.querySelector(".countyncases").style.color=good;
        document.querySelector(".countyndeaths").innerHTML=data.County[0].ndeaths;
        document.querySelector(".countyndeaths").style.color=ok;
        document.querySelector(".countyhospital").innerHTML=data.County[0].hbeds;
        document.querySelector(".countyhospital").style.color=ok;
        document.querySelector(".countyicu").innerHTML=data.County[0].ibeds;
        document.querySelector(".countyicu").style.color=bad;
        document.querySelector(".countyvacc").innerHTML=data.County[0].vaccines;
        document.querySelector(".countyvacc").style.color=good;
        //State
        document.querySelector(".state").innerHTML= data.State[0].state+" Covid-19 Statistics";
        document.querySelector(".statecases").innerHTML=data.State[0].totalCases;
        document.querySelector(".statecases").style.color=ok;
        document.querySelector(".statedeaths").innerHTML=data.State[0].totalDeaths;
        document.querySelector(".statedeaths").style.color=ok
        document.querySelector(".staterisklevel").innerHTML=data.State[0].riskLevel;
        document.querySelector(".staterisklevel").style.color=ok
        document.querySelector(".stateptests").innerHTML=data.State[0].positiveTests;
        document.querySelector(".stateptests").style.color=bad;
        document.querySelector(".statentests").innerHTML=data.State[0].negativeTests;
        document.querySelector(".statentests").style.color=good;
        document.querySelector(".statencases").innerHTML=data.State[0].ncases;
        document.querySelector(".statencases").style.color=bad 
        document.querySelector(".statendeaths").innerHTML=data.State[0].ndeaths;
        document.querySelector(".statendeaths").style.color=good;
        document.querySelector(".statehospital").innerHTML=data.State[0].hbeds;
        document.querySelector(".statehospital").style.color=ok
        document.querySelector(".stateicu").innerHTML=data.State[0].ibeds;
        document.querySelector(".stateicu").style.color=bad
        document.querySelector(".statevacc").innerHTML=data.State[0].vaccines;
        document.querySelector(".statevacc").style.color=good;
        //USA
        document.querySelector(".uscases").innerHTML=data.us[0].totalCases;
        document.querySelector(".uscases").style.color=bad;
        document.querySelector(".usdeaths").innerHTML=data.us[0].totalDeaths;
        document.querySelector(".usdeaths").style.color=bad;
        document.querySelector(".usrisklevel").innerHTML=data.us[0].riskLevel;
        document.querySelector(".usrisklevel").style.color=bad;
        document.querySelector(".usptests").innerHTML=data.us[0].positiveTests;
        document.querySelector(".usptests").style.color=ok;
        document.querySelector(".usntests").innerHTML=data.us[0].negativeTests;
        document.querySelector(".usntests").style.color=good;
        document.querySelector(".usncases").innerHTML=data.us[0].ncases;
        document.querySelector(".usncases").style.color=bad;
        document.querySelector(".usndeaths").innerHTML=data.us[0].ndeaths;
        document.querySelector(".usndeaths").style.color=ok;
        document.querySelector(".ushospital").innerHTML=data.us[0].hbeds;
        document.querySelector(".ushospital").style.color=bad;
        document.querySelector(".usicu").innerHTML=data.us[0].ibeds;
        document.querySelector(".usicu").style.color=bad;
        document.querySelector(".usvacc").innerHTML=data.us[0].vaccines;
        document.querySelector(".usvacc").style.color=ok;

    }
}
(() => {
    const app = App.getInstance();
})();