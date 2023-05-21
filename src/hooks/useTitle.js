import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title}-Ting Tong DisneyLand`;
    },[title])
};
export default useTitle;