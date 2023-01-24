import React from "react"
import Loader from "../components/Loader"
import Movies from "../components/Movies"
import Search from "../components/Search"

export default class Main extends React.Component{
        state={
            movies:[]
        }

        componentDidMount(){
                fetch('http://www.omdbapi.com/?apikey=c8f83f2&s=panda')
                .then(Response=>Response.json())
                .then(data=>this.setState({movies: data.Search}))    
        }
        searchMovies = (str) =>{
            fetch(`http://www.omdbapi.com/?apikey=c8f83f2&s=${str}`)
                .then(Response=>Response.json())
                .then(data=>this.setState({movies: data.Search}))  
        }


   render(){
    return( 
       
        <div  className="container content">
             <Search  searchMovies={this.searchMovies}/>
            {this.state.movies.length ? (<Movies movies={this.state.movies}/>) : <Loader/>}
           
        </div>

    )
   }
}