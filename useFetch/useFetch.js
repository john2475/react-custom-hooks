import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const isMounted = useRef(true);

    // Este useEffect solo se dispara cuando de demonta el componente
    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])


    
    const [state, setState] = useState({data:null, loading:true, error:null});

    useEffect(() => {
        setState({data:null, loading:true, error:null});

        fetch( url )
            .then( resp => resp.json())
            .then ( data => {

                
                
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }else{
                    console.log('SetState no se llamó!')
                    }

                
            });

    }, [url])
    
    return state;
}
