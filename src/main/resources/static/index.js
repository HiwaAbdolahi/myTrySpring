function regKunde() {
    const kunde = {
        navn : $("#navn").val(),
        adresse : $("#adresse").val()
    };

    $.post("/lagre", kunde, function (){
        hentAlle();
    });
    $("#navn").val("");
    $("#adresse").val("");
}

function hentAlle(){
    $.get("/henteAlle",function (data){
        formaterData(data);
    });
}

function formaterData(kunder){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th>" +
        "<th>Adresse</th>" +
        "</tr>";
    for (const kunde of kunder){
        ut += "<tr><td>"+kunde.navn+"</td><td>"+kunde.adresse+"</td></tr>";
    }
    ut += "</table>";
    $("#kundene").html(ut)
}

function slettKundene(){
    $.get("/slettAlle", function (){
        hentAlle()
    })
}
