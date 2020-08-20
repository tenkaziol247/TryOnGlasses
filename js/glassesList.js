export class GlassesList{
    constructor(){
        this.gList = [];
    }
    addGlassesList(objGlasses){
        this.gList.push(objGlasses);
    }
    renderGlassesList(){
        let content = this.gList.reduce((text, item)=>{
            return text + `
            <div class="col-4">
                <img class="img-fluid vglasses__items" onclick="chooseGlasses(event)" src="${item.src}" id="${item.id}">
            </div>
            `
        }, '');
        return content;
    }
}