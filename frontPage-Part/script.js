const addItemBtn = document.querySelector('#adding'
)

// const cartIncrease = document.querySelector('.selectedNumber')
// addItemBtn.addEventListener("click",()=>{
//     additem()
// })

// let count = 0; 

// function additem(){
//     count++
   
//     if(count <= 3){
//         cartIncrease.innerHTML = count
//     }else{
//         alert("can't afford")
//     }
// }

const audio = document.querySelector("#audio")
addItemBtn.addEventListener('click',()=>{
    audio.play()
})