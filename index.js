var listAircrafts = [];
var posicao = null;
class Aeronave {
    constructor(company, capacity, rab, type, category) {
        this.Company = company,
            this.Capacity = capacity,
            this.Rab = rab,
            this.Type = type,
            this.Category = category
    }
}
// CRIAR AERONAVAVE INSERIR NA LISTA
document.getElementById("btnCadastro").addEventListener("click", function () {
    let company = document.getElementById("inputCompany").value;
    let capacity = document.getElementById("inputCapacity").value;
    let rab = document.getElementById("inputRab").value;
    let type = document.getElementById("selectTypeAircraft").value;
    let category = document.getElementById("selectCategoryAircraft").value;

    let aeronave = new Aeronave(company, capacity, rab, type, category);
    if (company == '' || capacity == '' || rab == '' || type == '' || category == '') {
        alert("Preencha todos os campos!!!");
    }
    else if (rab.length < 6) {
        alert("RAB deve conter 6 digitos");
    } else if (rab[2] != "-") {
        alert("RAB Inválido\nSiga o exemplo: (XX-XXX)");
    }
    else if (posicao == null) {
        listAircrafts.push(aeronave);
        posicao = null;
        Clean();
    } else {
        listAircrafts[posicao] = aeronave;
        posicao = null;
        Clean();
    }
    GetAircrafts();
});

function GetAircrafts() {
    let innerHtml = "<tr>";
    for (let i = 0; i < listAircrafts.length; i++) {
        innerHtml += "<td>" + listAircrafts[i].Rab + "</td>"
            + "<td>" + listAircrafts[i].Company + "</td>"
            + "<td>" + listAircrafts[i].Type + "</td>"
            + "<td>" + listAircrafts[i].Category + "</td>"
            + "<td>" + listAircrafts[i].Capacity + "</td>"
            + "<td>" + "<a href='#' class = 'btn btn-warning btnUpdate' rel='" + i + "'>Editar</a>" + "</td>"
            + "<td>" + "<a href='#' class = 'btn btn-danger btnDelete' rel='" + i + "'>Excluir</a>" + "</td>" + "</td></tr>"
    }
    document.getElementById("tbody").innerHTML = innerHtml;
}

document.getElementById("tbody").addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("btnUpdate")) {
        posicao = parseInt(el.getAttribute("rel"));
        document.getElementById("inputCompany").value = listAircrafts[posicao].Company;
        document.getElementById("inputCapacity").value = listAircrafts[posicao].Capacity;
        document.getElementById("inputRab").value = listAircrafts[posicao].Rab;
        document.getElementById("selectTypeAircraft").value = listAircrafts[posicao].Type;
        document.getElementById("selectCategoryAircraft").value = listAircrafts[posicao].Category;
    }
});

document.getElementById("tbody").addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("btnDelete")) {
        posicao = el.getAttribute("rel");
        listAircrafts.splice(parseInt(posicao), 1);
        posicao = null;
        GetAircrafts();
    }
});

function Clean() {
    document.getElementById("inputCompany").value = '';
    document.getElementById("inputCapacity").value = '';
    document.getElementById("inputRab").value = '';
    document.getElementById("selectTypeAircraft").value = '';
    document.getElementById("selectCategoryAircraft").value = '';
}
