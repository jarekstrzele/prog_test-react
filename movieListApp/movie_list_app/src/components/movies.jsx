import React, { Component } from 'react' ;
import {getMovies } from './fake_movies.js' ;

class Movies extends Component{
    state={
        movies: getMovies()
        
    } ;
    deleteHandler = (movie) => {
        // const updatedList = this.state.movies.filter(m => m._id != movie._id) ;
        // this.setState({movies: updatedList}) ;

        const movies = this.state.movies.filter(m => m._id != movie._id) ;
        // this.setState({movies: movies}) ;
        this.setState({ movies}) ;
    }

    render(){
        if (this.state.movies.length === 0){
            return <p> No movies in the database! </p>
        }


        return (
        <>
            <p>Showing {this.state.movies.length} movies from the database.</p>
           <table className="table">
            <thead>
                <tr key="{movie._id}">
                    <th>Title</th>
                    <th>Gendre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
            {this.state.movies.map(movie => (
                    <tr>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.deleteHandler(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    )   
                )
            }
                
            </tbody>
           </table>
        </>
        )
    }
}

// <table>
// <thead> 
//     <tr>
//         <th> Title </th>
//         <th> Gendre </th>
//         <th> Stock </th>
//         <th> Rate </th>
//     </tr>
// </thead>

// <tbody>
//     <tr>
//         <td> </td>
//         <td> </td>
//         <td> </td>
//         <td> </td>
//     </tr>
// </tbody>

// </table>

export default Movies ;