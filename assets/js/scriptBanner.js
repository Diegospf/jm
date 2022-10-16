function firstTypeWrite(elemento, staticName){
    elemento.innerHTML = staticName;
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    elemento.style.opacity='1';
    textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra , 250*i)    
      });
}

function typeWrite(elemento, staticName){
    elemento.innerHTML = staticName;
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = 'JM';
    elemento.style.display='block';
    textoArray.forEach((letra, i) => {
        if(i>1)
            setTimeout(() => elemento.innerHTML += letra , 250*i)    
      });
}

function distypeWrite(elemento){
    elemento.innerHTML = 'JMRH';
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        newWord = elemento.innerHTML.slice(0, elemento.innerHTML.split('').length - 1);
        setTimeout(function() {
            if (i > 2)
                newWord = elemento.innerHTML.slice(0, elemento.innerHTML.split('').length - 1);
                elemento.innerHTML = newWord
        }, 150*i);
      });
}

function subtitleShow(elemento){
    elemento.style.opacity = "1"
}

const nomeJMRH = document.querySelector('.jmrh-nome');

const subtitle = document.querySelector('.subtitulo');

const nomeJMRHStatic = nomeJMRH.innerHTML;

setTimeout(function(){
    firstTypeWrite(nomeJMRH,nomeJMRHStatic);
},500)

setTimeout(function(){
    subtitleShow(subtitle);
},1500)

setTimeout(function(){
    distypeWrite(nomeJMRH);
},8000)

setInterval(function () {
    setTimeout(function(){
        typeWrite(nomeJMRH,nomeJMRHStatic);
    },0)
    
    setTimeout(function(){
        distypeWrite(nomeJMRH);
    },7000)
},14000)


