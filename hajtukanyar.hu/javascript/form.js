const form = document.querySelector('.form-tartalom');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let hibak = [];
    
    const nevInput = document.getElementById('nev');
    if (!nevInput.value.trim().includes(' ')) {
        hibak.push("Kérlek, add meg a teljes nevedet (vezeték- és keresztnév)!");
    }

    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        hibak.push("Kérlek, érvényes email címet adj meg!");
    }

    const datumInput = document.getElementById('datum');
    if (!datumInput.value) {
        hibak.push("Kérlek, add meg a születési dátumodat!");
    } else {
        const szuletesiDatum = new Date(datumInput.value);
        const ma = new Date();
    
        const kulonbseg = ma - szuletesiDatum; 
        const kor = kulonbseg / (1000 * 60 * 60 * 24 * 365.25);
    
        if (kor < 18) {
            hibak.push("A játékban csak 18 éven felüliek vehetnek részt!");
        }
    }

    const csapatSelect = document.getElementById('csapat');
    if (csapatSelect.value === "") {
        hibak.push("Válassz egy kedvenc csapatot!");
    }

    const checkbox = document.querySelector('.checkbox-opcio input[type="checkbox"]');
    if (!checkbox.checked) {
        hibak.push("A játékhoz el kell fogadnod a szabályzatot!");
    }

    if (hibak.length > 0) {
        alert("Hiányos adatok:\n\n- " + hibak.join("\n- "));
        return; 
    }
    
    let helyesValaszokSzama = 0;
    let osszesKerdes = 5;

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "7") {
        helyesValaszokSzama++;
    }

    const q2 = document.querySelector('input[name="q2"]');
    if (q2 && parseInt(q2.value) === 1986) {
        helyesValaszokSzama++;
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "mercedes") {
        helyesValaszokSzama++;
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "drag") {
        helyesValaszokSzama++;
    }

    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "verstappen") {
        helyesValaszokSzama++;
    }

    if (helyesValaszokSzama > 0) {
        alert(`Köszönjük, hogy résztveszel játékunkban! Helyes válaszok száma: ${helyesValaszokSzama} / ${osszesKerdes}.`);
        window.location.href = "main.html";
    } else {
        alert(`Köszönjük, hogy résztveszel játékunkban. Sajnos ez most nem sikerült.`);
        window.location.href = "main.html";
    }

});






