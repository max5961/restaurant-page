export function clear(){
    const content = document.getElementById('content');
    const footer = document.querySelector('.footer');
    while(content.childNodes[2] && content.childNodes[2] != footer){
            content.removeChild(content.childNodes[2]);
    }
}