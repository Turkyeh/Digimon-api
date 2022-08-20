
// document.getElementById(but).onclick = function () {
//     background - color=blue;
// }




const main = document.querySelector("main")
const row = document.querySelector(".row")



function Digimon (name,level,image) {
    this.name = name
    this.level = level
    this.image = image
}



const dataArr = []
window.addEventListener("load",() => {
   fetch("https://digimon-api.vercel.app/api/digimon")
   .then(response => response.json())
   .then(data => {
    for(let i = 7; i < 43; i++)
    {
        dataArr.push(data[i]) 
    }
    const objs = []
    let names = []
    let imgs = []
    let levels = []
    dataArr.map((el) => {
        objs.push(new Digimon(el.name,el.level,el.img))
        names.push(el.name)
        levels.push(el.level)
        imgs.push(el.img)
    })
    getData(objs,names,imgs,levels)
   })
})



const getData = (objs,names,imgs,levels) => {
    console.log(objs);
    for (let i = 0; i < objs.length; i++) {
            const col = document.createElement("div")
            col.className = "col-sm-3";
            row.append(col); 
            let card = document.createElement("div");
            card.className = "card"
            col.append(card);
    
            let imgCard = document.createElement("img");
            imgCard.className = "card-img-top w-100";
            imgCard.style.width = "100px"
            imgCard.src = imgs[i]
            card.append(imgCard)
    
            let cardBody = document.createElement("div");
            cardBody.className = "card-body"
            cardBody.textContent = levels[i]
            card.append(cardBody);
    
            let cardTitle = document.createElement("h5");
            cardTitle.className = "card-title"
            cardTitle.textContent = names[i]
            cardBody.append(cardTitle);
    }
    
}