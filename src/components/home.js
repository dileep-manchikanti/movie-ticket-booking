import React,{Component} from 'react';
import {fetch} from 'cross-fetch';
import {Card,CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
// import {getDatabase} from 'firebase/database';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
		'X-RapidAPI-Key': 'fa716db22dmshbfc9d7bfcfa55cdp1f6addjsn05f1a6bd08e8'
	}
};
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            modalOpen:false,
            selected:0
        }
        // this.toggleModal=this.toggleModal.bind(this);
    }
    
    // toggleModal(movieName){
    //     this.setState({
    //         selected:movieName,
    //         modalOpen:!this.state.modalOpen
    //     });
    // }
    async componentDidMount(){
        const response=await fetch('https://movies-app1.p.rapidapi.com/api/movies', options);
        const json=await response.json();
        this.setState({
          movies:json.results
        });
        // console.log(JSON.stringify(this.state.movies));
      }
    render(){
        const movies=this.state.movies.map((movie)=>{
            return(
                <div  className="col-12 col-md-6">
                    <button>
                        <Link to='/movie' state={{
                            movie:movie
                        }} >
                        <Card className='card'>
                            <CardImg className='cardImg' width="100%" height="100%" src={movie.image} alt={movie.title}  />
                        </Card>
                        </Link>
                    </button>
                </div>
            );
        });
        return(
            <div className='container'>
                <div>
                    {movies}
                </div>
            </div>
        );
    }
}
export default Home;