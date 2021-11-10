import {useState} from 'react'

function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
    }
        

      

    return (
        <div className="w-150">
            <button className="btn btn-primary" onClick={handlerAdd}>Sumar</button>
            <label>{0}</label>
            <button className="btn btn-primary" onClick={handlerRm}>Quitar</button><br />
            <br />
            <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar al carrito</button>
        </div>           
    )
 
}



export default ItemCount


