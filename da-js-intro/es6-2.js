const nombre="daniel"
const edad="16"
const twitter="twitter.com"


const persona={
    nombre:nombre,
    edad:edad,
    twitter:twitter,
}
console.log(persona)

function Componente({initialState, totalCount}){
    const[state, setState]=setState({initialState,totalCount})
}


function nombredelafuncion(){
    return "hola";
}
const funcionflecha=()=>"hola"

nombredelafuncion();
funcionflecha();


function ListaDeTareas(){
    return(
        <ul>
            {listado.map(elemento=>(<li>{elemento.nombre}</li>))}
        </ul>
    )
}

const square={
    x:10,
    y:10,
}
function calcSurface({x, y}){
    return x*y;
}
calcSurface(square);

function Avatar({username, url}){
    return <img src={url} alt={username}/>
}

function sum (a, b){
    if(a===undefined ||b===undefined){
        console.log("Please insert 2 values.")
        return;
    }
    return a+b;
}
sum(3+2)

const array=[1,2,3,4,5]
const otroarray=[6,7,8,9,10]

const nuevoarray=[...array, ...otroarray]
console.log(nuevoarray)

const obj1={
    a:"a",
    b:"b",
    c:"c",
}
const obj2={
    d:"d",
    e:"e",
}
const nuevoobjeto= Object.assign(...obj1,...obj2);
console.log(nuevoarray)
console.log(nuevoobjeto)
function Componente({id, ...props}){
    return <Nuevocomponente key={id}{...props}/>}



// non working code, amazing
// export function sum(a,b){
//     ...
// }
// export function anotherfunction(){}
// ---
// export function subs(a,b){
//     ...
// }
// ---
// import {sum} from './sum';
// import subs from './subs';
// function calculadora(){
//     sum();
//     subs();
// }

import React from 'react'
React.useState
React.useFragment
React.fragment

const coche={
    brand:"Renault",
    // model:"Twingo",
}
let model=coche.model ? coche.model:"Twingo";

model;

// oh boy react time
// // function ListaTareas({tareas}){
// //     return(
// //         <ReactFragment>
// //             {tareas.length ?(
// //                 <ul>
// //                     {tareas.map...}
// //                 </ul>
// //             ):(
// //                 <div>No hay tareas</div>
// //             )}
// //         </ReactFragment>
// //     )
// // }
// this obviously wont work because i don't have react installed

function suma2(a,b){
    a=a??0
    b=b??0
    return a+b
}
suma2(4)

function Avatar({user}){
    return <img src={user.imageUrl ?? 'example.com'}/>
}
const user={
    nombre,
    edad,
    location:{
        x,
        y,
        city:{
            zipcode,
            ldl,
        }
    }
}
function User(){
    return(<div>ZIP CODe: {user?.location?.city?.zipcode}</div>)
}
