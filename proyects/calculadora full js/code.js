let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

let Barshower = document.createElement('div');
Barshower.className = 'barshower';
container.appendChild(Barshower);

barshower_info = document.createElement('p');
barshower_info.className = 'barshower-info';
Barshower.appendChild(barshower_info);

let container_button = document.createElement('div');
container_button.className = 'container_buttons';
container.appendChild(container_button);

let icons = ["(",")","%","AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];
let operations = {
  suma:"+",
  resta:"-",
  multiplicacion: "*",
  division:"/"
}

let createbutton = (i,icon)=>{
  let button = document.createElement('button');
  button.className = `button button_${i}`;
  container_button.appendChild(button);
  button.innerHTML=`${icon}`;
  button.addEventListener('click',()=>{
    switch(icon){
      case "AC":
        barshower_info.innerHTML = "";
        break
      case "=":
        x = `${parseFloat(barshower_info.innerHTML)}`;
        console.log(x);
        barshower_info.innerHTML=x;
        break;
      default:
        if(icon in operations){
          console.log(`${icon} se seleccionó`);
        }
        barshower_info.innerHTML = barshower_info.innerHTML+`${icon}`;
        console.log(barshower_info.innerHTML);
    // if(icon==="AC"){
    //   barshower_info.innerHTML = "";
    // }
    // else{
    //   barshower_info.innerHTML = barshower_info.innerHTML+`${icon}`;
    //   console.log(barshower_info.innerHTML);
    // }
  }})
}


for (let i = 0; i <20;i++) {
  createbutton(i,icons[i]);
}