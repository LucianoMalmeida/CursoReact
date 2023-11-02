import { useState } from "react"

export const CartWidget = () => {
    const [count, setCount] = useState (10)



    return (
        <>
        <button> <i class="fas fa-shopping-cart"></i> {count} </button>
        </>
        

    )

}