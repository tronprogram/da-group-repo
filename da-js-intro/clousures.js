const saludar=function(nombre){
    return "Hola"+nombre;
}
saludar("Ronal")
saludar;

// redundant as hell but oh well
const a ="hola"
function global(){
    const b ="que";
    function local(){
    const c = "hace"
    return a+b+c    
    }
    return local;
}
global()
global()()
const closure = global();
closure();

const miContador = (function(){
    let _contador = 0;
    function incrementar(){
        return _contador++;
    }
    function decrementar(){
        return _contador--;
    }
    function valor(){
        return _contador;
    }
    return{
        incrementar,
        decrementar,
        valor,
    }
})();
miContador.valor()
miContador.incrementar()
miContador.valor()
miContador.incrementar()
miContador.decrementar()
miContador.incrementar()
miContador.valor()
miContador.incrementar()
miContador.valor()
miContador.incrementar()
miContador.decrementar()
miContador.incrementar()
miContador.valor()