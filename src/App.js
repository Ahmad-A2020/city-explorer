// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'
import Wetather from './components/weather.js'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      city:'',      
      LocationData:'',
      show:false,  
      erromassage:false, 
      weatherData:''
      
        

    }
  }
  updateCityName=(event)=>{
    
    this.setState({
      city:event.target.value,

    });

  }
  getWeather=async()=>{
    let weatherport=process.env.REACT_APP_SERVER;
    let requstWeatherURL=`${weatherport}/weather?latR=${this.state.LocationData.lat}&lonR=${this.state.LocationData.lon}`;
    let weatherData= await axios.get(requstWeatherURL);
    this.setState({
      weatherData:weatherData
    })
  }

  UpdateData=async (ev)=>{
    ev.preventDefault();
    let dataURL=`https://eu1.locationiq.com/v1/search.php?key=pk.daf0a7c54b3538d28f2c905ab9b4d7a0&q=${this.state.city}&format=json`;
    

    try{

      let LocationData= await axios.get(dataURL);
      console.log(this.state.LocationData.lon);
      console.log(this.state.LocationData.lat)
      this.setState({
        LocationData:LocationData.data[0],
        show:true,
      });       

    }
    catch{
      this.setState({
        show:false,
        erromassage:true,

      });
    }
    this.getWeather();
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
      
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.daf0a7c54b3538d28f2c905ab9b4d7a0&center=${this.state.LocationData.lat},${this.state.LocationData.lon}`} alt={this.renderPhoto} fluid />
            {this.state.weatherData}
            {/* <button onSubmit={this.getWeather}> Weather Data</button> */}
            <Wetather weatherDat={this.state.weatherData}/>

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
