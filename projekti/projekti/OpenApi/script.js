async function a(){
    let data = await fetch('https://1.1.1.1/cdn-cgi/trace').then(res=>res.text())
    let arr = data.trim().split('\n').map(e=>e.split('='))
    let ip = arr[2]
    document.getElementById("moi").innerHTML = "Tässä ois sun iipees bro: " + ip[1]
    console.log(arr)
    }