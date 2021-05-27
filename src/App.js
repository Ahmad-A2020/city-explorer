// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'
import Wetather from './components/weather.js'
import Movies from './components/movies.js'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      city:'',      
      LocationData2:'',
      show:false,
      showWeather:false,  
      erromassage:false, 
      weatherData:[],       
      moviesData:[],   
    }
  }
  updateCityName=(event)=>{
    event.preventDefault();
    let cityInserted=event.target.value;
    let cityUpper=cityInserted.charAt(0).toUpperCase()+cityInserted.slice(1);    
    this.setState({
      city:cityUpper,
    });

  }
  // Declare the functions that connected with the submitt form 
  // City Weather 

  getWeather=async()=>{

    let weatherport=process.env.REACT_APP_SERVER
    let locallyPort='http://localhost:3016'
    let remoteHerakuServer='https://city-explorer-server3.herokuapp.com'

    let requstWeatherURL=`${weatherport}/weather?lat=${this.state.LocationData2.lat}&lon=${this.state.LocationData2.lon}`  

    try{
        let weatherDataSource= await axios.get(requstWeatherURL);
        console.log('form invoked weatherDataSource',weatherDataSource.data)

        this.setState({
          weatherData:weatherDataSource.data,         
        })
        console.log(this.state.weatherData)

      }
      catch{
        this.setState({
          show:false,
          erromassage:true,
  
        });
      }
  }

  // Declare the functions that connected with the submitt form 
  // movies that include city's name 

  invokeMovieAPIData=async()=> {
    let locallyPort='http://localhost:3016'
    let remoteHerakuServer='https://city-explorer-server3.herokuapp.com'    
    let serverURL=process.env.REACT_APP_SERVER;   
    // console.log(serverURL)    

    let moviesDataSour= await axios.get(`${serverURL}/movies?cityName=${this.state.city}`);
    this.setState({
      moviesData:moviesDataSour.data,
    }) 

  }
  UpdateData=async (ev)=>{
    ev.preventDefault();
    let dataURL=`https://eu1.locationiq.com/v1/search.php?key=pk.daf0a7c54b3538d28f2c905ab9b4d7a0&q=${this.state.city}&format=json`;  
    
    try{

      let LocationData= await axios.get(dataURL);
      
      this.setState({
        LocationData2:LocationData.data[0],
        show:true,
      });     
      console.log(this.state.LocationData2.lon);
      console.log(this.state.LocationData2.lat);
      this.getWeather();
      this.invokeMovieAPIData();
    }
    catch{
      this.setState({
        show:false,
        erromassage:true,
      });
    }   
  }  
  
  render(){
    return(
      <>
      <h1> City Explore WebSite </h1>
      
      <form onSubmit={this.UpdateData} >
       <input type='text' placeholder='Enter Name of city' onChange={this.updateCityName}/> 
       <input type='submit' value='Explore!'/> 
      </form>

      <div className='image'>

        {  
        this.state.show && 
          <>
      
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.daf0a7c54b3538d28f2c905ab9b4d7a0&center=${this.state.LocationData2.lat},${this.state.LocationData2.lon}`} alt={this.renderPhoto} fluid />
            <button value='show weather' onSubmit={this.getWeather}>show weather</button>
            
            <Wetather
             
            weatherDataPushed={this.state.weatherData} 
            
            />
            < Movies moviesDatapushed={this.state.moviesData}/>  

          </>
        }
        {
          this.state.erromassage &&

          <Alert >
          This is invalied value
        </Alert>
        }

      </div>
      
      
      </>
    );
  }
}
export default App;
