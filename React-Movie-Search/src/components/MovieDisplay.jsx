

export default function MovieDisplay({movie}) { // {} destructuring so we are using movie directly instead of storing it in variable.
  const loaded=()=>{
    // The loaded component must return some JSX if the data exists
    return (
    <>
    <h1>{movie.Title}</h1>
    <h1>{movie.Genere}</h1>
    <img src={movie.poster} alt={movie.Title}/>
    <h1>{movie.year}</h1>
    </>
    );
  }
  // Function to return loading JSX if data doesnt exists
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  }

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}