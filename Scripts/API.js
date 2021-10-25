class Utils{
    constructor() {
    }
    static county(fips){


        const apiKey="aad72368172b4a9a846763308eaf6a11";
        const Url = "https://api.covidactnow.org/v2/county/"+fips+".json?apiKey="+apiKey;

        
        fetch(Url)
             .then(response => response.json())
             .then(responseasjson => {
                
                responseasjson= JSON.parse(JSON.stringify(responseasjson, this.replacer)); 

                console.log(responseasjson);
                 this.Displaycounty(responseasjson);
             })


             .catch(error => {
                 console.log("error:", error);
             })

    }
    static state(){
        const apiKey="aad72368172b4a9a846763308eaf6a11";
        const Url = "https://api.covidactnow.org/v2/state/OH.json?apiKey="+apiKey;

        
        fetch(Url)
             .then(response => response.json())
             .then(responseasjson => {
                
                responseasjson= JSON.parse(JSON.stringify(responseasjson, this.replacer)); 

                console.log(responseasjson);
                 this.Displaystate(responseasjson);
             })


             .catch(error => {
                 console.log("error:", error);
             })

    }
    static us(){
        const apiKey="aad72368172b4a9a846763308eaf6a11";
        const Url = "https://api.covidactnow.org/v2/country/US.json?apiKey="+apiKey;

        
        fetch(Url)
             .then(response => response.json())
             .then(responseasjson => {
                
                responseasjson= JSON.parse(JSON.stringify(responseasjson, this.replacer)); 

                console.log(responseasjson);
                 this.DisplayUS(responseasjson);
             })


             .catch(error => {
                 console.log("error:", error);
             })
    }

    static replacer(i, val) {
        if ( val === null ) 
        { 
           return "Unknown"; // change null to empty string
        } else {
           return val; // return unchanged
        }
       }
    
    
    static Displaycounty(jsondata){
        
        
        document.querySelector(".county").innerHTML= jsondata.county+" County Covid-19 Statistics";
        document.querySelector(".countycases").innerHTML=jsondata.actuals.cases;
         this.colors(".countycases",jsondata,jsondata.actuals.cases)
        document.querySelector(".countydeaths").innerHTML=jsondata.actuals.deaths;
        this.colors(".countydeaths",jsondata,jsondata.actuals.deaths)
        document.querySelector(".countyrisklevel").innerHTML=jsondata.riskLevels.overall
        this.riskcolor(".countyrisklevel",jsondata.riskLevels.overall)
        document.querySelector(".countyptests").innerHTML=jsondata.actuals.positiveTests;
        this.colors(".countyptests",jsondata,jsondata.actuals.positiveTests)

        document.querySelector(".countyntests").innerHTML=jsondata.actuals.negativeTests;
        this.colors(".countyntests",jsondata,jsondata.actuals.negativeTests)

        document.querySelector(".countyncases").innerHTML=jsondata.actuals.newCases;
        this.colors(".countyncases",jsondata,jsondata.actuals.newCases)

        document.querySelector(".countyndeaths").innerHTML=jsondata.actuals.newDeaths;
        this.colors(".countyndeaths",jsondata,jsondata.actuals.newDeaths)

        document.querySelector(".countyhospital").innerHTML=jsondata.actuals.hospitalBeds.currentUsageCovid;
        this.hbedcolors(".countyhospital",jsondata,jsondata.actuals.hospitalBeds.currentUsageCovid)

        document.querySelector(".countyicu").innerHTML=jsondata.actuals.icuBeds.currentUsageCovid;
        this.ibedcolors(".countyicu",jsondata,jsondata.actuals.icuBeds.currentUsageCovid)

        document.querySelector(".countyvacc").innerHTML=jsondata.actuals.vaccinesAdministered;
        this.colors(".countyvacc",jsondata,jsondata.actuals.vaccinesAdministered)
    }

    static Displaystate(jsondata){
        document.querySelector(".state").innerHTML= jsondata.state+" Covid-19 Statistics";
        document.querySelector(".statecases").innerHTML=jsondata.actuals.cases;
         this.colors(".statecases",jsondata,jsondata.actuals.cases)
        document.querySelector(".statedeaths").innerHTML=jsondata.actuals.deaths;
        this.colors(".statedeaths",jsondata,jsondata.actuals.deaths)
        document.querySelector(".staterisklevel").innerHTML=jsondata.riskLevels.overall
        this.riskcolor(".staterisklevel",jsondata.riskLevels.overall)
        document.querySelector(".stateptests").innerHTML=jsondata.actuals.positiveTests;
        this.colors(".stateptests",jsondata,jsondata.actuals.positiveTests)

        document.querySelector(".statentests").innerHTML=jsondata.actuals.negativeTests;
        this.colors(".statentests",jsondata,jsondata.actuals.negativeTests)

        document.querySelector(".statencases").innerHTML=jsondata.actuals.newCases;
        this.colors(".statencases",jsondata,jsondata.actuals.newCases)

        document.querySelector(".statendeaths").innerHTML=jsondata.actuals.newDeaths;
        this.colors(".statendeaths",jsondata,jsondata.actuals.newDeaths)

        document.querySelector(".statehospital").innerHTML=jsondata.actuals.hospitalBeds.currentUsageCovid;
        this.hbedcolors(".statehospital",jsondata,jsondata.actuals.hospitalBeds.currentUsageCovid)

        document.querySelector(".stateicu").innerHTML=jsondata.actuals.icuBeds.currentUsageCovid;
        this.ibedcolors(".stateicu",jsondata,jsondata.actuals.icuBeds.currentUsageCovid)

        document.querySelector(".statevacc").innerHTML=jsondata.actuals.vaccinesAdministered;
        this.colors(".statevacc",jsondata,jsondata.actuals.vaccinesAdministered)
    }
    static DisplayUS(jsondata){
        document.querySelector(".uscases").innerHTML=jsondata.actuals.cases;
         this.colors(".uscases",jsondata,jsondata.actuals.cases)
        document.querySelector(".usdeaths").innerHTML=jsondata.actuals.deaths;
        this.colors(".usdeaths",jsondata,jsondata.actuals.deaths)
        document.querySelector(".usrisklevel").innerHTML=jsondata.riskLevels.overall
        this.riskcolor(".usrisklevel",jsondata.riskLevels.overall)
        document.querySelector(".usptests").innerHTML=jsondata.actuals.positiveTests;
        this.colors(".usptests",jsondata,jsondata.actuals.positiveTests)

        document.querySelector(".usntests").innerHTML=jsondata.actuals.negativeTests;
        this.colors(".usntests",jsondata,jsondata.actuals.negativeTests)

        document.querySelector(".usncases").innerHTML=jsondata.actuals.newCases;
        this.colors(".usncases",jsondata,jsondata.actuals.newCases)

        document.querySelector(".usndeaths").innerHTML=jsondata.actuals.newDeaths;
        this.colors(".usndeaths",jsondata,jsondata.actuals.newDeaths)

        document.querySelector(".ushospital").innerHTML=jsondata.actuals.hospitalBeds.currentUsageCovid;
        this.hbedcolors(".ushospital",jsondata,jsondata.actuals.hospitalBeds.currentUsageCovid)

        document.querySelector(".usicu").innerHTML=jsondata.actuals.icuBeds.currentUsageCovid;
        this.ibedcolors(".usicu",jsondata,jsondata.actuals.icuBeds.currentUsageCovid)

        document.querySelector(".usvacc").innerHTML=jsondata.actuals.vaccinesAdministered;
        this.colors(".usvacc",jsondata,jsondata.actuals.vaccinesAdministered)
    }

    static riskcolor(htmlclass,metric){
        let good="#31572c";
        let ok="#F7c548";
        let bad="#B10f2e";
        
       if(metric===1){
            document.querySelector(htmlclass).style.color=good

        }
        else if(metric===2){
            document.querySelector(htmlclass).style.color=ok

        }
        else if(metric===3){
            document.querySelector(htmlclass).style.color=bad

        }
        else if(metric===4){
            document.querySelector(htmlclass).style.color=bad

        }
    }
    static hbedcolors(htmlclass,jsondata,metric,){
        let good="#31572c";
        let ok="#F7c548";
        let bad="#B10f2e";
       
       if(metric<= 30/100*jsondata.actuals.hospitalBeds.capacity){
            document.querySelector(htmlclass).style.color=good;
        }
        else if (metric> 30/100*jsondata.actuals.hospitalBeds.capacity){
            document.querySelector(htmlclass).style.color=ok;
        }
        else if (metric>= 75/100*jsondata.actuals.hospitalBeds.capacity){
            document.querySelector(htmlclass).style.color=bad;
        }

    }
    static ibedcolors(htmlclass,jsondata,metric,){
        let good="#31572c";
        let ok="#F7c548";
        let bad="#B10f2e";
        
     if(metric<= 30/100*jsondata.actuals.icuBeds.capacity){
            document.querySelector(htmlclass).style.color=good;
        }
        else if (metric> 30/100*jsondata.actuals.icuBeds.capacity){
            document.querySelector(htmlclass).style.color=ok;
        }
        else if (metric>= 75/100*jsondata.actuals.icuBeds.capacity){
            document.querySelector(htmlclass).style.color=bad;
        }

    }
    static colors(htmlclass, jsondata,metric){
        
        let good="#31572c";
        let ok="#F7c548";
        let bad="#B10f2e";
        
    if(metric<= 30/100*jsondata.population){
            document.querySelector(htmlclass).style.color=good;
        }
        else if (metric> 30/100*jsondata.population){
            document.querySelector(htmlclass).style.color=ok;
        }
        else if (metric>= 75/100*jsondata.population){
            document.querySelector(htmlclass).style.color=bad;
        }


    }
}