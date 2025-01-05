
import { useCallback, useEffect, useState } from 'react';
import ListMovies from './components/ListMovies';
import { useMovies, useSearchMovies } from './customHook/movies';
import debounce from 'just-debounce-it';

function Movies() {

  const [sort, setSort] = useState<boolean>(false);
  const { search, setSearch, error } = useSearchMovies();
  const { movies, getMovies, loading } = useMovies({ search,sort });

  const debounceGetMovies = useCallback(debounce((search:string)=>{  
    getMovies(search);
  },500),[])

  const asignamentValue = (event: any) => {
    const value = event.target.value;
    setSearch(value);
    debounceGetMovies(value);
  }  

  const getmoviesData = (event: any) => {
    console.log("getmoviesData");
    
    event.preventDefault();
    getMovies(search);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className='container mx-auto'>
      <h1 className="text-4xl font-bold text-center">Movies</h1>
      <form onSubmit={getmoviesData}>
        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-white">Buscar</label>
        <div className='flex flex-row justify-center gap-3'>
          <input onChange={asignamentValue} value={search} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Avengers..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className='flex flex-row justify-center items-center'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Buscar</button>
        </div>
      </form>
      {
        loading ? <p>Cargando...</p> :
          <ListMovies movies={movies} />
      }
    </div>
  )
}

export default Movies