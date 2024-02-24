let btn=document.querySelector("button");
let yes=document.createElement("button");
let no=document.createElement("button");
yes.setAttribute("id","yes");
no.setAttribute("id","no");
yes.innerText="Yes"
no.innerText="Yesss"
let event=btn.addEventListener("click",()=>{
    btn.innerText="clicked"
    document.querySelector("h2").innerText="I AM SORRY MOM"
    document.querySelector("h6").innerText="Will you for give me mom ?"
     document.querySelector("body").append(yes)
     document.querySelector("body").append(no)
})
yes.addEventListener("click",()=>{
    alert("😁 Lets make BAGI today 😁")
})
no.addEventListener("click",()=>{
    alert("😁 Lets make BAGIsssssssss today 😁")
})
