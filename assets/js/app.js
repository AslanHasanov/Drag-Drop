let boxes= document.querySelectorAll('.box')
let dropArea =document.querySelectorAll(".area")

boxes.forEach(box=>{
    box.ondragstart=function(e){
        e.dataTransfer.setData('mrb',this.id)
    }
})

dropArea.forEach(drop=>{
    drop.ondragover=function(e){
        e.preventDefault()
    }
    drop.ondrop=function(e){
        let id= e.dataTransfer.getData("mrb")
        let newi= document.getElementById(id)
        drop.append(newi)
    }
})







