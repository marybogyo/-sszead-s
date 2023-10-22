import OsszeadView from "../view/OsszeadView.js";
import OsszeadModel from "../model/OszzeadModel.js";
class OsszeadController{
    constructor(){
        new OsszeadView($(".ad"));
        this.osszeAd = new OsszeadModel();

        $(window).on("osszead", (event)=>{
            let a = parseInt($(".a").val());
            let b = parseInt($(".b").val());

            console.log(a);
            console.log(b);

            this.osszeAd.setAszam(a);
            this.osszeAd.setBszam(b);

            let ertek = this.osszeAd.osszeadMuvelet();
            console.log(ertek);
            $(".eredmeny").html(ertek);
        })
    }
}
export default OsszeadController;