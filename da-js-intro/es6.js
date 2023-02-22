const nombre = "johan"
const apellido = "portilla"

console.log(nombre+""+apellido);
console.log(`${nombre} ${apellido}`)
function Componente({BackgroundColor}){
    return(<div classname={`bg-color-${BackgroundColor}`}>hola</div>)
}