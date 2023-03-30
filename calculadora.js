function calcular() {
    let = conjunto = (document.getElementById("kits").value)
    let pontos
    if (conjunto >= 80) {
        pontos = 5000
    }
    else if ((conjunto >= 64) && (conjunto < 80)) {
        pontos = 4000
        if (conjunto != 64 || conjunto != 80) {
            padrao = conjunto - 64
        }
    }
    else if ((kits >= 40) && (kits < 64)) {
        pontos = 2500
        if (conjunto != 40 || conjunto != 64){
            padrao = conjunto - 40
        }
    }
    else if ((conjunto >= 16) && (kits < 40)) {
        pontos = 1000
        if (conjunto != 16 || conjunto != 40){
            padrao = conjunto - 16
        }
    }
    else if ((kits >= 0) && (kits < 16)) {
        pontos = 0
    }
    let = kit = (document.getElementById("kit").value)
    let = lata = (document.getElementById("lata").value)
    let = arroz5 = (document.getElementById("arroz5").value)
    let = arroz1 = (document.getElementById("arroz1").value)
    let = feijao2 = (document.getElementById("feijao2").value)
    let = feijao1 = (document.getElementById("feijao1").value)
    let = macarrao = (document.getElementById("macarrao").value)
    let = oleo = (document.getElementById("oleo").value)
    let = sangue = (document.getElementById("sangue").value)
    let = pontos + (padrao * 50) + (kit * 25) + (lata * 10) + (arroz5 * 5) + (arroz1 * 1) + (feijao2 * 2) + (feijao1 * 1) + (macarrao * 0.5) + (oleo * 1) + (sangue * 15)
}
function calcularkits() {

}