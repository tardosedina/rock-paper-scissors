let titid = document.getElementById("title");
let optid = document.getElementById("opt");
let rulid = document.getElementById("rules");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

let language = {
    eng: {
        title: "Rock-paper-scissors",
        opt: "Select an option"
    },
    hun: {
        title: "Kő-papír-olló",
        opt: "Válassz lépést:"
    }
}

if(window.location.hash) {
    if(window.location.hash == "#eng") {
        titid.textContent = language.eng.title;
        optid.textContent = language.eng.opt;
    } else if (window.location.hash == "#hun") {
        titid.textContent = language.hun.title;
        optid.textContent = language.hun.opt;
    }
}