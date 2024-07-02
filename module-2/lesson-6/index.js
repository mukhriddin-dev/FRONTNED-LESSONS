const wrapperBox = $(".wrapper");
const box = $$(".box");

for (let i = 0; i < 10; i++) {
    const boxItem = createElement(
        "div",
        "box",
        `<div><button data-id="${Math.ceil( Math.random()*1000)+i}" id="sub">read more..</button><button id="sup">like</button></div>`
    );
    boxItem.dataset.id=`userID: ${Math.ceil( Math.random()*1000)+i}`;
    wrapperBox.appendChild(boxItem);
}

wrapperBox.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "sub" && e.target.nodeName === "BUTTON") {
        // console.log(e.target);
        // console.log(e.target.tagName);
        // console.log(e.target.nodeName);
        // console.log(`Box  ${e.target.textContent} sub  clicked`);
        console.log(e.target.getAttribute("data-id"));
        
    }

    if (e.target.id === "sup") {
        console.log(e.target);
        console.log(`Box  ${e.target.textContent} sup  clicked`);
    }
});

box.forEach((element, index) => {
    // console.log(element)
    element.addEventListener("click", () => {
        console.log(`Box  ${index + 1} clicked`);
    });
});

// const div=$('.div');
// const form=$(".form");
// const btn=$(".btn");
// const submitFom = $("#form");

// div.addEventListener('click', (e)=>{

//    console.log("div clicked")
// })

// form.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     console.log("form clicked")
//  })

// btn.addEventListener('click', (e)=>{
//      e.stopPropagation(); // stop propagation of click events
//     console.log("btn clicked")
// })

// submitFom.addEventListener('submit', (e)=>{
//     e.preventDefault(); // prevent form from submitting and reloading the page.
//     console.log("form submitted")
// })


const button=$("#button");
button.className = "btn btn-success";
button.dataset.user="Davronbek ID:123";
console.log(button);
console.log(button.getAttribute("data-user"));



