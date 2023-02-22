const datos=[{
    id:1,
    title: "Iron Man",
    year:"2008"
},
{
    id:2,
    title: "Spiderman: Homecoming",
    year:"2017",
},
{
    id:3,
    title: "Avengers: Endgame",
    year:"2019"
}];
function getDatos() {
    if(datos.length===0){
        reject(new Error("Missing Data"))
    }
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });

}
// getDatos().then((datos)=>console.log(datos));
async function FetchingData(){
    try{
        const DatosFetched = await getDatos();
        console.log(DatosFetched);
    }catch(err){
        console.log(err.message);
    }   
    
}
FetchingData();