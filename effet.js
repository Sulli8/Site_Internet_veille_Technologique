const title = document.getElementById('autotext');
const text = "Bienvenue sur le Portofolio de Sullivan SEXTIUS ";

let index = 0;

const play = () => {
  title.innerHTML = text.slice(0,index);
  index++;
  if(index > text.length){
    index = 0;
  }
};
let timer = setInterval(play, 300);
play()
