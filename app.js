
const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', ()=> {
    createNotification();
})
const createNotification = () =>{
    const notification = document.createElement('div')
    notification.classList.add('toast');
    notification.innerText= 'javascript';
    container.appendChild(notification) ;

setTimeout(() => {
    notification.remove();
} , 3000)
}
