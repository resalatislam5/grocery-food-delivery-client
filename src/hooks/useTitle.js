import { useEffect } from "react"
// main title section
const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Grover-Grocery`;
    },[title])
}

export default useTitle;