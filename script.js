document.getElementById("year").textContent = new Date().getFullYear();

function showJoin(){
  const modal=document.getElementById("modal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}
function closeJoin(){
  const modal=document.getElementById("modal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
}
document.getElementById("modal").addEventListener("click",e=>{
  if(e.target.id==="modal") closeJoin();
});
