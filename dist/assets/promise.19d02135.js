import{b as e,o as t,f as a,g as o,t as s,bu as i}from"./vendor.6eb48644.js";const n={id:"trafic-light"},r={setup(r){const c=e("5555"),l=e=>new Promise(((t,a)=>{setTimeout((()=>t(e+=1)),1e3)}));(async()=>{l(5).then((e=>c.value=e));try{const e=await l(1),t=await l(e),a=await l(t);console.log(e,t,a)}catch(e){console.log(e,"err")}})();const u=async(e,t)=>{i((()=>{})),document.getElementById("trafic-light").style.background=t,c.value=t,await(e=>new Promise(((t,a)=>{setTimeout(t,e)})))(e)};return t((()=>{(async()=>{for(;;)await u(3e3,"red"),await u(1e3,"yellow"),await u(2e3,"green")})()})),(e,t)=>(a(),o("div",n,s(c.value),1))}};export default r;