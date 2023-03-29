function calcular () {
    let= padrao=(document.getElementById("padrao").value)
    let= kit=(document.getElementById("kit").value)
    let= lata=(document.getElementById("lata").value)
    let= arroz5=(document.getElementById("arroz5").value)
    let= arroz1=(document.getElementById("arroz1").value)
    let= feijao2=(document.getElementById("feijao2").value)
    let= feijao1=(document.getElementById("feijao1").value)
    let= macarrao=(document.getElementById("macarrao").value)
    let= oleo=(document.getElementById("oleo").value)
    let= sangue=(document.getElementById("sangue").value)
    let= (padrao*50)+(kit*25)+(lata*10)+(arroz5*5)+(arroz1*1)+(feijao2*2)+(feijao1*1)+(macarrao*0.5)+(oleo*1)+(sangue*15)}
    
function calcularkits () {
    let= kits =(document.getElementById("kits").value)
    let pontos 
    if (kits >= 80) {
        pontos=5000
    }
    else if ((kits >= 64) && (kits < 80)){
    pontos=4000
}
    else if ((kits >= 40) && (kits < 80)){
        pontos=2500
    }
    else if ((kits >= 16) && (kits < 40)){
        pontos=1000
    }
    else if ((kits >= 0) && (kits < 16)) {
        pontos=0
    }
    if (ponto==-1){
        document.getElementById("pontos").innerHTML = "Impossivel de calcular"
    }
    else {
        document.getElementById("pontos").innerHTML = "A pontuação foi de: " + pontos
    }
}