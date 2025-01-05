import { IGetMovie } from "../interface/interface";

export const getFetchMovie = async ({ nameMovie }: { nameMovie: string }): Promise<{ dataMovies: IGetMovie[] }> => {

    if (nameMovie !== "") {
        const data = await fetch(`http://www.omdbapi.com/?apikey=4a3b711b&s=${nameMovie}`);
        const response = await data.json();
        const { Search } = response;

        return { dataMovies: Search };
    }

    return { dataMovies: [] };
}