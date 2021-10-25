class Api{
    constructor() {
    }
    static Connect(fips){


        const apiKey="aad72368172b4a9a846763308eaf6a11";
        const Url = "https://api.covidactnow.org/v2/county/"+fips+".json?apiKey="+apiKey;

        
        fetch(Url)
             .then(response => response.json())
             .then(responseasjson => {
                
                responseasjson= JSON.parse(JSON.stringify(responseasjson, this.replacer)); 

                console.log(responseasjson);
                 this.Display(responseasjson);
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
    
    
    static Display(jsondata){
        let good="#31572c";
        let ok="#F7c548";
        let bad="#B10f2e";
        
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