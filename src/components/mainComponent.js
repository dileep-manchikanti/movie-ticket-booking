import React,{Component} from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import Movie from './movie';
import SignUp from './signUp';
import SignIn from './signIn';
import Home from './home';
class Main extends Component{
    render(){
        // console.log(this.props.data);
        // const MovieWithName=({Movie})=>{
        //     console.log("hi");
        //     console.log(Movie.params.id);
        //     return(
        //     <Movie id={Movie.params.id} />
        //     );
        // };
        return(
            <div>
        <Routes>
          <Route exacat path='/' element={<SignUp />} />
          <Route exact path='/signIn' element={<SignIn />} />
          <Route exact path='/dashboard' element={<Home />} />
          <Route  name="movie" path='/movie' element={<Movie />} />
          {/* <Route path="" element={<Navigate to="/signUp" />} /> */}
        </Routes>
        </div>
        );
    }
}
 export default Main;