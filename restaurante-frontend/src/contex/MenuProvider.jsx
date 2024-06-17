import { MenuContext} from "./MenuContext"
import { useEffect, useState } from "react";
export const MenuProvider = ({ children }) => {

    const [menus, setMenus] = useState([]);

    const fetchMenus = async () => {
        const response = await fetch('/Menu')
        const data = await response.json()
        console.log(data)
        setMenus(data)
    }

    useEffect(() => {
        fetchMenus()
    }, [])


    return (
        <MenuContext.Provider value={{menus}}>
            {children}
        </MenuContext.Provider>
    )
}
