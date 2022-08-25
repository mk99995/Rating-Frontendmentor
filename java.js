
let submit = document.getElementById("su");
let tahdet = null;
let nappulaLista = [];

function teeNappulat(n) {
    for (let i = 0; i < n; i++) {
        let b = document.createElement("button");
        b.classList.add("ymp")
        b.innerHTML = i+1;
        document.getElementById("nappulat").append(b);
        nappulaLista[i] = b;
    }
}

teeNappulat(5);

for (let i = 0; i < nappulaLista.length; i++) {
    nappulaLista[i].onclick = function() {
        tahdet = i+1;
    }
}

submit.onclick = function() {
    if(tahdet != null) {
        document.getElementById("pisteetTeksti").append("You selected " + tahdet + " out of 5");
        document.getElementById("menu1").style.display = "none";
        document.getElementById("menu2").style.display = "block";
    } else {
        return;
    }
    
}
