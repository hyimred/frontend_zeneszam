class Zene {
    constructor(cim, min, sec) {
      this.cim = cim;
      this.min = min;
      this.sec = sec;
    }

}

let cim = "";
let min = 0;
let sec = 0;
let lista = new Array();

let osszido = 0;

function btn() {
    cim = document.getElementById('cim').value;
    min = parseInt(document.getElementById('min').value);
    sec = parseInt(document.getElementById('sec').value);

    if (sec >= 60) {
        alert("másodperc több mint 60")
    } else {
        let zene = new Zene(cim,min,sec);
        lista.push(zene);
        console.log(lista);
        console.log(zene.min+"   "+zene.sec+"   "+osszido)
        osszido += parseInt(zene.min*60)+parseInt(zene.sec);
        
        document.getElementById("osszido").textContent ='Összes idő: ' + `${Math.floor(osszido / 60)}:${osszido % 60}`;
         
    }
    
}



document.getElementById('add').addEventListener('click',btn);

