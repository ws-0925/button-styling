
import { GUI } from 'https://cdn.skypack.dev/dat.gui';

const SCENE = document.querySelector('.scene');
const BUTTON_TEXT = document.querySelector('.text');

const ARTICLE = document.querySelector("article");
const SECTION = document.querySelector('section');


const CONFIG = {
  text: "Deploy",
  hue: 180,
  //alpha: 1,
  window: 1.4,
  speed: 1,
  blur: 10,
  spread: 120,
  thickness: 2,
  radius: 32,
  border: 3,
  speed: 2,
   constant: false,
   exploded: false};



const UPDATE = () => {
  console.info('cool');
  for (const KEY of Object.keys(CONFIG)) {
    if (KEY === 'exploded' || KEY === 'constant') break;
    document.documentElement.style.setProperty(`--${KEY}`, CONFIG[KEY]);
  }
  document.body.dataset.showGlows = CONFIG.constant;

	SECTION.style.setProperty("--border-width", CONFIG.border);
  SECTION.style.setProperty("--border-radius", CONFIG.radius);
  SECTION.style.setProperty("--border-speed", CONFIG.speed);
};


const TOGGLE = () => {
  const exploded = CONFIG.exploded;  
  if (!exploded) {    
    const TRANSITION = SCENE.getAnimations();
  }
};

const CHANGE_LABEL = () => {
  BUTTON_TEXT.innerText = CONFIG.text;
};

UPDATE();

var changflg = 1;
const { Splitting } = window;
      const results = Splitting();
      const glitches = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('');

      for (let r = 0; r < results.length; r++) {if (window.CP.shouldStopExecution(0)) break;
        const chars = results[r].chars;
        for (let c = 0; c < chars.length; c++) {if (window.CP.shouldStopExecution(1)) break;
          chars[c].style.setProperty('--count', Math.random() * 5 + 1);
          for (let g = 0; g < 10; g++) {if (window.CP.shouldStopExecution(2)) break;
            chars[c].style.setProperty(
            `--char-${g}`,
            `"${glitches[Math.floor(Math.random() * glitches.length)]}"`);

          }window.CP.exitedLoop(2);
        }window.CP.exitedLoop(1);
      }window.CP.exitedLoop(0);
     // window.ScrollOut({
        //alert("FDF");
      //scrollingElement: '.container',
      //targets: 'p' });

var myTimeout = setTimeout(addClass, 3000);
		   
function addClass(){		     
  if(changflg == 1){
    var element = document.getElementById("span1");
    element.classList.add("reveal1");
    var element1 = document.getElementById("span2");
    element1.classList.add('reveal');

  var css = `span [data-char]:after{
    -webkit-animation-iteration-count: calc(var(--char-index) * 0.55);
            animation-iteration-count: calc(var(--char-index) * 0.55);            
        }

  .reveal [data-char]:after {
        -webkit-animation-name: glitch-switch;
                animation-name: glitch-switch;                    
  }`;
  var style = document.createElement('style');

  if (style.styleSheet) {
      style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
}
  myTimeout = setTimeout(removeClass, 3000);

}

function removeClass(){
    if(changflg == 1){
    var element = document.getElementById("span1");
    element.classList.remove("reveal1");
    var element1 = document.getElementById("span2");
    element1.classList.remove('reveal');
    }
    myTimeout = setTimeout(addClass, 3000);
  }

jQuery('.butclass').mouseover(function(){
  changflg = 0;
});
jQuery('.butclass').mouseout(function(){
  changflg = 1;
});