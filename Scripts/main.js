class App {
    constructor() {
        
        let capi=new countyApi();
    
        Utils.state();
        Utils.us();
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

class countyApi{
    constructor(){
        document.querySelector(".submit").addEventListener("click",e=>{
        
        let fips= document.querySelector(".modalselect").value;
        Utils.county(fips);
        });
    }
}

(() => {
    const app = App.getInstance();
    
})();