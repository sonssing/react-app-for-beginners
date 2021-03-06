import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies()
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1> 
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie 
                            //key 값 중요. react.js에서만 map안에서 component들을 render할때 사용
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image} 
                            title={movie.title} 
                            rating={movie.rating} 
                            summary={movie.summary} 
                            genres={movie.genres} 
                        /> 
                     ))}
                </div>
            )}
        </div>
    );
}

export default Home;