const download=(file,texto)=>{
    let elemento=document.createElement('a');
    elemento.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(texto));
    elemento.setAttribute('download',file);
    elemento.style.display="none";
    document.body.appendChild(elemento);
    elemento.click();
    document.body.removeChild(elemento);
}

const guardar=()=>{
    const texto=document.getElementById("input").value;
    console.log(texto);
    var file="texto.txt"
    download(file,texto);
}


const boton=document.getElementById("button");
boton.addEventListener("click",guardar);