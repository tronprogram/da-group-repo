var obj={
    foo: function (){return foo},
    bar: function (){
        document.addEventListener("click", function (event){
            that.foo()

        }).bind()
    }
}