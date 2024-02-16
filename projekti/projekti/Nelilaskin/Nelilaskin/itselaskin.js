function lisays(luku) {
    document.getElementById('naytto').innerHTML += luku
    // Lisää luvun/operaattorin 'naytto' elementtiin
}
function yhtasuuri() { 
    // Hakee 'naytto' elementistä luvut/operaattorit
    lasku = document.getElementById("naytto").textContent
    // Laskee ne 'vastaus' muuttujan arvoon
    let vastaus = eval(lasku)
    // Tyhjentää näytön
    document.getElementById('naytto').innerHTML = ""
    // Näyttää vastauksen
    document.getElementById('naytto').innerHTML += vastaus
}
function tyhjennys () {
    // Tyhjentää näytön
    document.getElementById('naytto').innerHTML = ""
}
function poisto() {
    // Hakee 'naytto' elementistä luvut/operaattorit
    lasku = document.getElementById("naytto").textContent
    // Poistaa viimeisimmän
    document.getElementById('naytto').innerHTML = lasku.slice(0, -1)
}