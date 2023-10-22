class OsszeadModel{
    #aszam;
    #bszam;
    constructor(){
        this.#aszam = 0;
        this.#bszam = 0;
    }

    setAszam(szam){
        this.#aszam= szam;
    }

    setBszam(szam){
        this.#bszam= szam;
    }
    
    osszeadMuvelet(){

        return this.#aszam + this.#bszam;

    }


}
export default OsszeadModel;