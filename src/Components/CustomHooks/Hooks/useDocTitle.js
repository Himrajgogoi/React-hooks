import{useEffect} from 'react'

function useDocTitle(count) {
    useEffect(()=>{
        document.title= `Count ${count}`
 }, [count])
    return null;
}

export default useDocTitle
