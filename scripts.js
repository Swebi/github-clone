
function invalid(){

        let mydiv = document.getElementById("invalid")
        mydiv.className = 'invalid';
    
        data = `<p onclick=remove()> Incorrect username or password.</p>`;
        mydiv.innerHTML = data;
}

function remove(){
    
    let mydiv = document.getElementById("invalid")
    mydiv.className = '';
    mydiv.innerHTML=''

}