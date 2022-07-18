


addresult=document.querySelector(".addresult")
multiresult=document.querySelector(".multiresult")
function add(){
    let num1=document.querySelector("#first").value
    let num2=document.querySelector("#second").value
    addresult.innerHTML=parseInt(num1)+parseInt(num2) 
    
}add()

function multiply(){
 let num3=document.querySelector("#third").value
let num4=document.querySelector("#fourth").value
multiresult.innerHTML=parseInt(num3)*parseInt(num4)

}multiply()



