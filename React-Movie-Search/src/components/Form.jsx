import { useState,useEffect } from "react"


export default function Form(props){
    const [formData,setFormData]=useState({
        searchterm:""

    });
    //handleChange-updates formData when we type into form

    const handleChange=(event)=>{

//use event object to detect key and value to update
setFormData({...formData,[event.target.name]:event.target.value});
    };
    const handleSubmit=(event)=>{
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is App's getMovie function
        props.moviesearh(formData.searchterm);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
                />
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
    // The component must return some JSX
    // return <h1>The Form Component</h1>;
  };
// export default function MovieDisplay({ movie }){
//     // Function to return loaded JSX
//     const loaded = () => {
//       return (
//         <>
//           <h1>{movie.Title}</h1>
//           <h2>{movie.Genre}</h2>
//           <img src={movie.Poster} alt={movie.Title} />
//           <h2>{movie.Year}</h2>
//         </>
//       );
//     };
  
//     // Function to return loading JSX
//     const loading = () => {
//       return <h1>No Movie to Display</h1>;
//     };
  
//     // Ternary operator will determine which functions JSX we will return
//     return movie ? loaded() : loading();
//   }