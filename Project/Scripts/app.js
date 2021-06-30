// ========================   ABOUT US   =====================

let layer = document.querySelector('.layer');
let description = document.querySelector('.desc');


layer.addEventListener("mouseover",() => {
 if(description.style.display === 'none'){
    description.style.display ='block';
 } 
 else{
    description.style.display='none';
 }
})



let layerTwo = document.querySelector('#layer2');
let descriptionTwo = document.querySelector('.desc2');

layerTwo.addEventListener("mouseover",() => {
 if(descriptionTwo.style.display === 'none'){
    descriptionTwo.style.display ='block';
 } 
 else{
    descriptionTwo.style.display='none';
 }
})



let layerThree = document.querySelector('#layer3');
let descriptionThree = document.querySelector('.desc3');

layerThree.addEventListener("mouseover",() => {
 if(descriptionThree.style.display === 'none'){
    descriptionThree.style.display ='block';
 } 
 else{
    descriptionThree.style.display='none';
 }
})






