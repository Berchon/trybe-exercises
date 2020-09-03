/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
Valor esperado no console:
*/

let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Não",    
  };

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };

for (keys in info1) {
    if (keys != "recorrente"){
        console.log(info1[keys] + " e " + info2[keys]);
    }
    else{
        if ((info1[keys] === "Sim") && (info2[keys] === "Sim")) {
            console.log("Ambos recorrentes");
        }
        else if ((info1[keys] === "Não") && (info2[keys] === "Não")) {
            console.log("Nenhum recorrente");
        }
        else if (info1[keys] === "Sim") {
            console.log(info1.personagem + " recorrente e " + info2.personagem + " não recorrente");
        }
        else {
            console.log(info1.personagem + " não recorrente e " + info2.personagem + " recorrente");
        }
    }
    
}