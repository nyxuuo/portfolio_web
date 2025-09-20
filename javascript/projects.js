function openModal(id){
    document.getElementById(id).style.display = "block";
}

function closeModal(id){
    document.getElementById(id).style.display = "none";
}

// klik diluar modal = tutup
window.onclick = function(event) {
    const modals = this.document.getElementsByClassName("modal");
    for (let m of modals){
        if (event.target === m){
            m.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // check hash in url
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)){
        document.querySelector(hash).style.display="block";
    }
})

function closeModal(id){
    document.getElementById(id).style.display="none";
    history.pushState("", document.title, window.location.pathname + window.location.search);
}