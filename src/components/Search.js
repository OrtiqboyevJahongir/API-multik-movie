import React from "react";
export default class Search extends React.Component{
       state ={
        search:''
       }    
    
    
       hendeleKey=(e)=>{
         if(e.key==='Enter'){
            this.props.searchMovies(this.state.search);
            
         }
        
       }
   
    render(){
            return(
                <div className="input-group">
                <div className="form-outline ">
                  <input type="search" 
                  id="form1" 
                  className="form-control "
                  value={this.state.search}
                  onChange={(e)=>this.setState({search:e.target.value})}
                  onKeyDown={this.hendeleKey}
                  
                  />
                  <label className="form-label" for="form1">Search</label>
                </div>
                <button onClick={()=>this.props.searchMovies(this.state.search)}
                 type="button" className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            )
        }
}