import { BolsitaContext } from "./BolsitaContext"
import { useReducer } from "react"

const estadoInicial = []

export const BolsitaProvider = ({children}) => {
    
const menuReducer = (state = estadoInicial, action = {}) => {
    switch(action.type){
        case '[Pr] Agregar Pedido':
            return[...state, action.payload]

        case '[Pr] Quitar Pedido':
            return state.filter(menu => menu.id !== action.payload)

        case '[Pr] Disminuir Cantidad':
            return state.map(item => {
                const cant = item.cantidad - 1
                if(item.id === action.payload && item.cantidad>1)
                    return {...item, cantidad: cant}
                return item
            })

        case '[Pr] Aumentar Cantidad':
            return state.map(item => {
                const cant = item.cantidad + 1
                if(item.id === action.payload)
                    return {...item, cantidad: cant}
                return item
            })
        default:
            return state
    }
}



    const [listado, dispatch] = useReducer(menuReducer, estadoInicial)

    const agregarPedido  = (menu) => {
        menu.cantidad = 1
        const action = {
            type:'[Pr] Agregar Pedido',
            payload: menu
        }    
        dispatch(action)
    }
    const quitarPedido = (id) => {
        const action = {
            type:'[Pr] Quitar Pedido',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type:'[Pr] Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type:'[Pr] Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    }

    
  return (
    <BolsitaContext.Provider value={{listado, agregarPedido, quitarPedido, aumentarCantidad, disminuirCantidad}}>
        {children}
    </BolsitaContext.Provider>
  )
}
