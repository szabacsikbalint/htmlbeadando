const pilotak = [
    {nev: "Max Verstappen", csapat: "Red Bull", szam: 1, cimek: 4, gyozelmek: 71, polok: 49},
    {nev: "Lewis Hamilton", csapat: "Mercedes", szam: 44, cimek: 7, gyozelmek: 105, polok: 104},
    {nev: "Charles Leclerc", csapat: "Ferrari", szam: 16, cimek: 0, gyozelmek: 8, polok: 27},
    {nev: "Lando Norris", csapat: "McLaren", szam: 4, cimek: 1, gyozelmek: 11, polok: 16},
    {nev: "Fernando Alonso", csapat: "Aston Martin", szam: 14, cimek: 2, gyozelmek: 32, polok: 22},
    {nev: "Oscar Piastri", csapat: "McLaren", szam: 81, cimek: 0, gyozelmek: 9, polok: 6},
    {nev: "George Russell", csapat: "Mercedes", szam: 63, cimek: 0, gyozelmek: 5, polok: 24},
    {nev: "Carlos Sainz", csapat: "Williams", szam: 55, cimek: 0, gyozelmek: 4, polok: 29},
    {nev: "Esteban Ocon", csapat: "Haas", szam: 31, cimek: 0, gyozelmek: 1, polok: 0},
    {nev: "Nico Hülkenberg", csapat: "Kick Sauber", szam: 27, cimek: 0, gyozelmek: 0, polok: 1},
];

let kivalasztottPilota;
let kattinthato = true;

function ujKor() {
    kattinthato = true;
    document.getElementById("eredmeny").innerHTML = "";
    const container = document.getElementById("valaszok");
    container.innerHTML = "";

    kivalasztottPilota = pilotak[Math.floor(Math.random() * pilotak.length)];

    document.getElementById("nyomok").innerHTML = 
        `<p>Csapat: ${kivalasztottPilota.csapat}</p>
        <p>Rajtszám: <b>${kivalasztottPilota.szam}</b></p>
        <p>VB-címek: <b>${kivalasztottPilota.cimek}</b></p>
        <p>Győzelmek: <b>${kivalasztottPilota.gyozelmek}</b></p>
        <p>Pole pozíciók: <b>${kivalasztottPilota.polok}</b></p>
        <br>`
    ;

    let opciok = [kivalasztottPilota];
    
    while (opciok.length < 4) {
        let randomPilota = pilotak[Math.floor(Math.random() * pilotak.length)];
        if (!opciok.includes(randomPilota)) {
            opciok.push(randomPilota);
        }
    }

    opciok.sort(() => Math.random() - 0.5);

    opciok.forEach(pilota => {
        const gomb = document.createElement("button");
        gomb.innerText = pilota.nev;
        gomb.classList.add("kviz-gomb");
        gomb.onclick = () => tippEllenorzes(pilota, gomb);
        container.appendChild(gomb);
    });
}

function tippEllenorzes(tippeltPilota, megnyomottGomb) {
    if (!kattinthato) return;
    kattinthato = false;

    const eredmenyMezo = document.getElementById("eredmeny");
    const osszesGomb = document.querySelectorAll(".kviz-gomb");

    if (tippeltPilota.nev === kivalasztottPilota.nev) {
        megnyomottGomb.classList.add("helyes-valasz");
        eredmenyMezo.innerHTML = `Helyes válasz! Szép munka!`;
    } else {
        megnyomottGomb.classList.add("hibas-valasz");
        eredmenyMezo.innerHTML = `Nem talált! A helyes válasz: <b>${kivalasztottPilota.nev}</b>`;
        
        osszesGomb.forEach(gomb => {
            if (gomb.innerText === kivalasztottPilota.nev) {
                gomb.classList.add("helyes-valasz");
            }
        });
    }
    setTimeout(ujKor, 2500);
}

ujKor();