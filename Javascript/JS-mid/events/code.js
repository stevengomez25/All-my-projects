body = document.querySelector("body");
input = document.createElement('input');
input.setAttribute('type', 'text');
body.appendChild(input);

input.addEventListener('select',function(e){
    start = e.target.selectionStart;
    end = e.target.selectionEnd;
    textocompleto = input.value;
    if (textocompleto.length > 40) {
        cuadrito = document.createElement("div");
        body.appendChild(cuadrito);
        cuadrito.outerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/PDJLvF1dUek?si=mVlT6UvvVaWKSMYs&amp?autoplay=1&cc_load_policy=1;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay="1"; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
    
    cuadrito.innerHTML = textocompleto.substring(start,end);
})

input.addEventListener('keyup',function(e){body.style.backgroundColor = "blue"})
input.addEventListener('keydown',function(e){body.style.backgroundColor = "red"})
input.addEventListener('keypress',function(e){body.style.backgroundColor = "yellow"})