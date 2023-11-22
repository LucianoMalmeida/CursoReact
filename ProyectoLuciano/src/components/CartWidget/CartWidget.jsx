import { useState } from "react"

export const CartWidget = () => {
    const [count, setCount] = useState (10)



    return (
        <>
        <div> <i className="fas fa-shopping-cart"></i> {count} </div>
        </>
        

    )

}
