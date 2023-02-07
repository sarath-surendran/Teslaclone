let closeBtn = document.getElementById('close')
let menuBtn = document.getElementById('menubtn')
let list = document.querySelector('.asidelist')


menuBtn.addEventListener("click",()=>{
    //  alert('hello')
    list.classList.add('active')
    
})
closeBtn.addEventListener("click",()=>{
    // alert('hello')
    list.classList.remove('active')
    
})