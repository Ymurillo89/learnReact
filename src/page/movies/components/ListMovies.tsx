import { IGetMovie } from "../interface/interface";

function ListMovies({ movies=[] }: { movies: IGetMovie[] } ) {

  const hasMovies: boolean = movies.length > 0;

  return (

    hasMovies ?
      <ul className='grid gap-5 sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {movies.map((movie: any) => (
          <li key={movie.imdbID} className='mt-4'>
            <h3 className='text-center text-xl font-semibold'>{movie.Title}</h3>
            <picture className='flex flex-row items-center justify-center mt-2'>
              <img src={movie.Poster} alt="imgMovies" className='borrder rounded-md shadow-xl' />
            </picture>

          </li>
        ))}
      </ul>
      :
      <p>Not fount movies</p>
  )
}

export default ListMovies