let i = 1

while (i < 11){
    console.log(i);
    i++;
}
function bucleWhile(num){
    let i = 0;
    while(i<num){
        console.log(i);
        i++
    }
}

bucleWhile(11);

function DoWhile(i){
    let i = 0;
    do{
        console.log(i);
        i++;
    } while(i<num);
}
DoWhile(0);



const obj = {
    unArray: new Array(10000)
}

function BadPerformance(){
    console.time("bad");
    for(let i=0; i<obj.unArray.length; i++){
        obj.unArray[i] = 'hola';
    } console.timeEnd('bad')
}
function GoodPerformance(){
    console.time("good");
    let unArray = obj.unArray;
    for(let i=0, longitud = unArray.length; i<longitud; i++) {
        unArray[i] = 'hola';
    } console.timeEnd('good')
}
const unArray = obj.unArray;

for(let i=0, longitud =unArray.length; i<longitud; i++){
    obj.unArray[i] = "hola"
}

const miArray = [1, 2, 3, 4];
miArray.forEach((functionitem, index)=>{
    console.log(`El valor  de la posición ${index} es ${item}`)
})

const libro={
    titulo:"How to not fail at Physics Class",
    autor:"some guy",
    numPaginas: 100,
    editorial:"wawa",
    precio:"20150560360469$",
}

const props = Object.getOwnPropertyNames(libro);
props.forEach(name =>{
    let valor = Object.getOwnPropertyDescriptor(libro, name).value
    console.log(`La prop ${name} contiene ${valor}`)
})

for (let prop in libro){
    console.log(`La prop ${prop} contiene ${libro[prop]}`)
}
