import React, { Component } from 'react' ;
import {getMovies } from './fake_movies.js' ;

class Movies extends Component{
    state={
        movies: getMovies()
        
    } ;


    render(){
        return (
           <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Gendre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
            {this.state.movies.map(movie => (
                    <tr>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                    </tr>
                    )   
                )
            }
                
            </tbody>
           </table>
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