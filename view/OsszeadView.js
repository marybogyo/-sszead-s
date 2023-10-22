class OsszeadView{
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlOsszeallit();
        this.pEgyenlo = this.szuloElem.children(".egyenlo");

        this.pEgyenlo.on("click", ()=>{
            this.#esemenyTrigger("osszead");
        })
    }


    #htmlOsszeallit(){
        let txt = "<input type='number' class='a'></input><p> ➕ </p><input type='number' class='b'></input><p class='egyenlo'> = </p><p class='eredmeny'></p>";

        this.szuloElem.append(txt);
    }


    #esemenyTrigger(esemenyNev){
        const ertek = new CustomEvent(esemenyNev, {detail: this})
        window.dispatchEvent(ertek);
    }
}
export default OsszeadView;