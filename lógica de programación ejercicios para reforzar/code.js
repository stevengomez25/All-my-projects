main_body = document.createElement('div');
main_body.className = 'main_container'


main_body.innerHTML = ('<div class="container fizz">Fizz buzz Ejercicio</div>');
main_body_fizzbuzz = main_body.querySelector('.fizz');
console.log(main_body_fizzbuzz)
document.body.appendChild(main_body);
button_runner = document.createElement('button');
button_runner.innerHTML = "Correr"
main_body_fizzbuzz.appendChild(button_runner)
button_runner.addEventListener('click',()=>{
    for(var i=1; i<=100;i++){
        if(i%3===0 && i%5===0){
            info = main_body_fizzbuzz.appendChild(document.createElement('h5'));
            info.className = 'response'
            info.innerHTML=`fizzbuzz`;
        }else if(i%5===0){
            info = main_body_fizzbuzz.appendChild(document.createElement('h5'));
            info.className = 'response'
            info.innerHTML=`buzz`;
        }else if(i%3===0){
            info = main_body_fizzbuzz.appendChild(document.createElement('h5'));
            info.className = 'response'
            info.innerHTML=`fizz`;
        }else{
            info = main_body_fizzbuzz.appendChild(document.createElement('h5'));
            info.className = 'response'
            info.innerHTML=`${i}`;
        }
    }
})

segundo_ejercicio = document.createElement('div')
segundo_ejercicio.className = 'container segundo'
main_body.appendChild(segundo_ejercicio)
segundo_ejercicio.innerHTML = "Anagrama"
button_runner_2 = document.createElement('button')
segundo_ejercicio.appendChild(button_runner_2)
button_runner_2.innerHTML = "Correr"
button_runner_2.addEventListener('click', () => {
    first_input = segundo_ejercicio.appendChild(document.createElement('input'))
    first_input.className = 'first_input_2'
    first_input.type = 'text'
    second_input = segundo_ejercicio.appendChild(document.createElement('input'))
    second_input.className = 'second_input_2'
    second_input.type = 'text'
    button_verifier = segundo_ejercicio.appendChild(document.createElement('button'))
    button_verifier.innerHTML = "Verificar"
    button_verifier.addEventListener('click',()=>{
        response_anagrama = segundo_ejercicio.appendChild(document.createElement('div'))
        array_first_word = first_input.value.toLowerCase().split("")
        array_second_word = second_input.value.toLowerCase().split("")
        console.log(array_first_word,array_second_word)
        let new_array = []
        for(i in array_first_word){
            element = array_first_word[i]
            if(array_second_word.includes(element)){
                new_array.push(element)
            }
        }
        console.log(new_array)
    })
})