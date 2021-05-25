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
      LocationData2:'',
      show:false,
      showWeather:false,  
      erromassage:false, 
      weatherDataD1:'',
      weatherDataD2:'',
      weatherDataD3:'',
      
        

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

  getWeather=async()=>{

    console.log(this.state.showWeather)
    let weatherport='http://localhost:3012'
    // process.env.REACT_APP_SERVER;
    let requstWeatherURL=`${weatherport}/weather?cityName=${this.state.city}`
    // 'http://localhost:3012/weather?cityName=Amman'
    // `${weatherport}/weather?cityName=${this.state.LocationData2.display_name.split()[0]}`;

    try{
        let weatherData= await axios.get(requstWeatherURL);
        this.setState({
          weatherDataD1:weatherData.data.data[0],
          weatherDataD2:weatherData.data.data[1],
          weatherDataD3:weatherData.data.data[2],
          showWeather:true,  
        })
        console.log(this.state.weatherData2)
        console.log(this.state.showWeather)
      }
      catch{
        this.setState({
          show:false,
          erromassage:true,
  
        });
      }
  }

  UpdateData=async (ev)=>{
    ev.preventDefault();
    let dataURL=`https://eu1.locationiq.com/v1/search.php?key=pk.daf0a7c54b3538d28f2c905ab9b4d7a0&q=${this.state.city}&format=json`;

    // for weather 

    let weatherport=process.env.REACT_APP_SERVER;
    // let requstWeatherURL='http://localhost:3010/weather?latR=47.60621&lonR=-122.33207'
    // `${weatherport}/weather?latR=${this.state.LocationData.lat}&lonR=${this.state.LocationData.lon}`;
    // let weatherData= await axios.get(requstWeatherURL);
    // this.setState({
    //   weatherData:weatherData
    // })
    

    try{

      let LocationData= await axios.get(dataURL);
      // let weatherData= await axios.get(requstWeatherURL); // for weathe 
      
      this.setState({
        LocationData2:LocationData.data[0],
        // weatherData2:weatherData.data,
        show:true,
      });     
      console.log(this.state.LocationData2.lon);
      console.log(this.state.LocationData2.lat);
      // console.log(this.state.weatherData2);
      this.getWeather();


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
             show={this.state.showWeather} 
            weatherDataD1={this.state.weatherDataD1} 
            weatherDataD2={this.state.weatherDataD2}
            weatherDataD3={this.state.weatherDataD3}

            />
            {/* <p>{this.state.weatherData2.data[0]} </p> */}
            {/* <p>{this.state.weatherData2}</p> */}




            {/* {this.state.showWeather &&
            <>
            <p>{this.state.weatherData2.data[0].rh} </p> */}
            {/* <Wetather weatherData2={this.state.weatherData2} /> */}

            {/* </>} */}

            {/* <p>{this.state.weatherData2.data[0].rh}</p> */}
            {/* <button onSubmit={this.getWeather}> Weather Data</button> */}
            {/* <Wetather weatherDat={this.state.weatherData}/> */}

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
