import { useState } from "react"

export const CartWidget = () => {
    const [count, setCount] = useState (10)



    return (
        <>
        <div> <i class="fas fa-shopping-cart"></i> {count} </div>
        </>
        

    )

}
