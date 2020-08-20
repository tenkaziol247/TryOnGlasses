/**
 * 1. Xây dựng danh sách kính để thử
 * 2. Thử kính (lấy đối tượng và hiển thị)
 * 3. Xây dựng chức năng trước và sau khi đeo kính
 */

let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];

import {Glasses} from './glasses.js';
import {GlassesList} from './glassesList.js';

let getEle = (id)=>{
    return document.getElementById(id);
}
let objGlassesList = new GlassesList();

let showGlassesList = ()=>{
    let divGlassesList = getEle('vglassesList');

    dataGlasses.forEach((item)=>{
        let objGlasses = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        objGlassesList.addGlassesList(objGlasses);
    });

    divGlassesList.innerHTML = objGlassesList.renderGlassesList();
}

showGlassesList();

let chooseGlasses = (e)=>{
    let idChose = e.target.getAttribute('id');

    let objGlassesChose = objGlassesList.gList.find((item)=>{
        return item.id === idChose;
    });
    
    showFullInfo(objGlassesChose);
}

window.chooseGlasses = chooseGlasses;

let showFullInfo = (objGlassesChose)=>{
    let elementAvatar = getEle('avatar');
    let elementInfo = getEle('glassesInfo');

    elementAvatar.innerHTML = `<img class="img-fluid tryOnGlassesMixi" id="glasses" src="${objGlassesChose.virtualImg}">`;

    elementInfo.innerHTML = `
    <h5>${objGlassesChose.name} - ${objGlassesChose.brand} (${objGlassesChose.color})</h5>
    <p class="card-text">
    <span class="btn btn-danger btn-sm mr-2">$${objGlassesChose.price}</span>
    <span class="text-success">${objGlassesChose.status ? "Stocking" : "Sold Out"}</span>
    </p>
    <p class="card-text">
    ${objGlassesChose.description}
    </p>
    `

    elementInfo.style.display = "block";
}

let removeGlasses = (isDisplay)=>{
    let glasses = getEle('glasses');
    if(glasses != null){
        if(isDisplay){
            glasses.style.opacity = '0.9';
        } else{
            glasses.style.opacity = '0';
        }
    } else {
        alert('Please, choose glasses!')
    }
}

window.removeGlasses = removeGlasses;