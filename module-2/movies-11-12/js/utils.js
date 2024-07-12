function $(s){
    return document.querySelector(s);
}

function $$(s){
    return document.querySelectorAll(s);
}


function createElement(tagName, classList , content){
    const el = document.createElement(tagName);
    if(classList){
        el.setAttribute('class', classList);
    }

    if(content){
        el.innerHTML=content;
    }
    return el;
}

