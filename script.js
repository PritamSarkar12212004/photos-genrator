key="aoL7QgceCZPFcc1EquhArhHM51x549oHKulaed4lZa4"

// let section
let box=document.querySelector(".box")
let btn=document.querySelector("#btn")
let valu=document.querySelector("#input")
let nBtn=document.querySelector("#nextbtn")
// this is the function
async function api(){
    const name=valu.value
    let response=await fetch(`https://api.unsplash.com/search/photos?page=${nBtn}&query=${name}&client_id=${key}`)
    let result=await response.json()
    let fResult=result.results
    console.log(fResult)
    fResult.map(element => {
        let url=element.urls.small
        console.log(url)
        let img=document.createElement("img")
        box.appendChild(img)
        img.src=url
    });
}

//this is the sbtn click
btn.addEventListener("click",()=>{
    box.style.display="block"

    api()
})
nBtn.addEventListener("click",()=>{
    
    console.log(nBtn)
    api()
})
