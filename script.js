const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});
document.querySelectorAll("section,.case,.solutions article,.process-grid>div,.package-grid article").forEach(x=>{x.style.opacity="0";x.style.transform="translateY(18px)";x.style.transition="opacity .65s ease,transform .65s ease";io.observe(x)});
document.addEventListener("scroll",()=>{document.querySelectorAll(".in").forEach(x=>{x.style.opacity="1";x.style.transform="none"})},{passive:true});
window.addEventListener("load",()=>document.querySelectorAll(".in").forEach(x=>{x.style.opacity="1";x.style.transform="none"}));
