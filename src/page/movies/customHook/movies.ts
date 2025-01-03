import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IGetMovie } from "../interface/interface";
import { getFetchMovie } from "../service/moviesService";

export function useSearchMovies() {
    const [error, setError] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const isFirstRender = useRef(true);

    useEffect(() => {

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (search === '') {
            setError('Se debe ingresar una pelicula');
            return;
        }
        setError('');

    }, [search]);

    return { search, setSearch, error }
}

export function useMovies({sort }: { search: string,sort:boolean }) {
    
    const [movies, setMovies] = useState<any[]>([]);
    const [error, setError] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const priviewSearch = useRef<string>('');

    const getMovies = useCallback (async (search:string) => {
        
        if (search === priviewSearch.current) return;        

        try {
            setLoading(true);
            priviewSearch.current = search;
            const { dataMovies } = await getFetchMovie({ nameMovie: search });                        
            setMovies(dataMovies);         
        }catch(error){
            setError('Error al obtener las peliculas');         
        }finally{
            setLoading(false);
        }          
    },[])    

    const sorterMovies = useMemo(()=>{          
        return sort? [...movies].sort((a,b)=>a.Title.localeCompare(b.Title)):movies;       
    },[sort,movies]); 

    return { movies:sorterMovies, getMovies,loading };

}