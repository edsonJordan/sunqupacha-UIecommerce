const  getImg = async ()=>  {
    /* http://market.designmodo.com/aware-mobile-kit/ */
    const url = "./img/items-primary";
    fetch(`./img/items-primary`)
    .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
    .then(res=> res.json())
    .then(res=> {
        console.log(res);        
    })
}
/* Index */
document.getElementById("foot--slider")?.addEventListener('change', (e)=>{
        const items = document.getElementById("items--card").children;               
        for(const data of items) {
            let extrac = data.className.split(" ");
            if(e.target.id === extrac[1] ){                
                data.classList.toggle('active');
            }else{
                data.classList.remove('active');
            }                                    
        }        
})
document.getElementById("menu--check")?.addEventListener('change', (e)=>{
        document.getElementById("nav").classList.toggle("none");
    
});

/* Store */
document.getElementById("filter-order").addEventListener('click', (e)=>{
    /* console.log(e.target.classList.toggle("active")); */
    console.log(e.target);
    
})