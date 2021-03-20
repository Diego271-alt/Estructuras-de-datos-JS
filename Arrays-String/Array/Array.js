/* ------------    Arrays  ----------------------- */


class Arrays {
    constructor(){
        //Número de elementos para el array 
        this.lenght=0;
        //Guardamos todos los elementos nuevos 
        this.data={}
    }

    //Obtener elemento 
    get(index){
        return this.data[index];
    }
    push(object){
        //Estamos agregando un elemento e indexamos la longitud para poder darle un indice al elemento que se añadió
        this.data[this.lenght] = object
        this.lenght++;
        return this.data;
    }
    pop(){
        //Borramos el último elemento del Array
        delete this.data[this.lenght - 1 ]
        //Bajamos el  tamaño una unidad
        this.lenght--;
        return this.data
    }
    delete(index){

        const item = this.data[index];
        this.shiftIndex(index)
        return item
    }
    shiftIndex(index){
        
        for (let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data[ i + 1];
        }
        delete this.data[this.lenght - 1 ];
        this.lenght--; 
        return 

    }
}

//Nueva instancia de clase 


const array = new Arrays()

/*------- INPUT ------ */
/*
    array.push("Diego ")
*/
/*------- Output ------ */
/*
    {0: "DIEGO"}
*/

