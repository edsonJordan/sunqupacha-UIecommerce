const img = []
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