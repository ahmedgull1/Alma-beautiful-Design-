

let addBtn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');
let saidbar = document.querySelector('.saidbar');

addBtn.onclick = () => {
    saidbar.classList.remove('-mr-[400px]');
}

removeBtn.onclick = () => {
    saidbar.classList.add('-mr-[400px]');
}



const buttons = document.querySelectorAll(".slider-btn");
const childs = document.querySelectorAll(".child");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        childs.forEach((c) => {
            c.style.transform = `translateX(-100%)`; 
            c.style.zIndex = 0; 
        });

        childs[index].style.transform = `translateX(0)`; 
        childs[index].style.zIndex = 10;
    });
});



let button = document.querySelectorAll('.icon')
let main = document.querySelector('.main')

let data = [

    {
        icons: `<i class="fa-regular fa-heart "></i>`,
        position: 'GRAPHIC DESIGN',
        About: 'Ahmed is a web developer',
        desc: 'Lorem ipsum is placeholder text commonly used in for previewing layouts and visual mockups.'
    },
    {
        icons: `<i class="fa-regular fa-heart "></i>`,
        position: 'GRAPHIC DESIGN',

        desc: 'My name is ahmed khan Basically i am from balochitan i have done my backelars in july 2023 university of loralai'
    },
    {
        icons: `<i class="fa-solid fa-radio"></i>`,
        position: 'GRAPHIC DESIGN',

        desc: 'My name is ahmed khan Basically i am from balochitan i have done my backelars in july 2023 university of loralai'
    },
    {
        icons: `<i class="fa-regular fa-heart "></i>`,
        position: 'GRAPHIC DESIGN',

        desc: 'My name is ahmed khan Basically i am from balochitan i have done my backelars in july 2023 university of loralai'
    },
    {
        icons: `<i class="fa-solid fa-laptop"></i>`,
        position: 'GRAPHIC DESIGN',

        desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius facilis sequi vero repudiandae molestiae voluptatibus suscipit beatae consectetur voluptate?'
    },
    {
        icons: `<i class="fa-solid fa-address-book"></i>`,
        position: 'GRAPHIC DESIGN',

        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad.'

    },
]

button.forEach((btn, index) => {
    btn.addEventListener("mouseenter", () => {
        main.innerHTML = `
          <div class="center-icon">
              ${data[index].icons}
          </div>
          <div class="description main">
            <h2>${data[index].position}</h2>
            <p>${data[index].desc}</p>
          </div>
          `;
    });
});

let btns = document.querySelectorAll('.btns')
let div = document.querySelector('.div')

let arr = [
    {
        decsription: "Rapidiously integrate multimedia based resources whereas low-risk yiel innovate market positioning products without B2B products resources before.",
        name: 'JACK SHAPEARD',
        level: 'Company'
    },
    {
        decsription: "Compellingly fashion low-risk high-yield  thinking after synergistic users. Quickly empower web-enabled manufactured products alignments.",
        name: 'MARIA MADEIRA',
        level: 'AGENCY'
    },
    {
        decsription: "Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products.",
        name: 'LUCAS NOEL',
        level: 'NAAPO AGENCY'
    },
    {
        decsription: "Energistically engage diverse vortals and prospective methods of empowerment pontificate diverse JONAS BENFAS.",
        name: 'JONAS BENFAS',
        level: 'NAAPO'
    },
    {
        decsription: "Enthusiastically syndicate inexpensive services and bandwidth phosfluorescently develop cooperative content vis-a-vis best-of-breed alignments.",
        name: 'LUCAS DOE',
        level: 'MARKETPLACE'
    },
    {
        decsription: "Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products.",
        name: 'CARINA LUCAS',
        level: 'NAAPO AGENCY'
    },
]

btns.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
        div.innerHTML =
            `
        <p class="text-black text-center text-xl ">"${arr[index].decsription}"</p>
        <h2 class="text-black text-center text-xl mt-3">${arr[index].name}</h2>
        <p class="text-black text-center text-sm mt-2 font-bold text-red-400 hover:text-black cursor-pointer">${arr[index].level}</p>
        `
    })
})

let randum = document.querySelector('.randum');

var text = ['W E B D , E S I G N I N G  ', 'G R A P H I C , D E S I G N I N G', 'I L L U S T R A T I O N S ','A P P L I C A T I O N'];
var index = 0;

function textchange() {
  randum.innerHTML = text[index];
  index = (index + 1) % text.length; 
}

setInterval(textchange, 3000);

