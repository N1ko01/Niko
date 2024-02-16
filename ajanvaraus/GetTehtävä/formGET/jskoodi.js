window.onload = parametrit

function parametrit () {

    const queryString = window.location.search;
    console.log(queryString);
    
    const urlParams = new URLSearchParams(queryString);

    const email = urlParams.get('email')
    
    const aihe = urlParams.get('aihe')
    const paikka = urlParams.get('paikka')
    const paiva = urlParams.get('päivä')
    const radio = urlParams.get('radio')
    const ika = urlParams.get('ika')

    document.getElementById("email").innerHTML = "Sähköposti: " + email
    document.getElementById("aihe").innerHTML = "Aihe: " + aihe
    document.getElementById("paikka").innerHTML = "Paikka: " + paikka
    document.getElementById("paiva").innerHTML = "Päivämäärä: " + paiva
    document.getElementById("radio").innerHTML = "Aika: " + radio
    document.getElementById("ika").innerHTML = "Ikä: " + ika



}