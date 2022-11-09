import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Grover-Grocery`;
    },[title])
}

export default useTitle;