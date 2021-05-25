import React from 'react';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:this.props.show,
            wind_dir:this.props.weatherData,
            
        }
    }
    // let filteredData=findCityWeather.map(item=>{
    //     return(
    //         {        
    //         date:item.valid_date,
    //         hightemp:item.max_temp,
    //         lowtemp:item.low_temp,
    //         wind_dir:item.wind_dir,
    //         }
    //     )
    // })

    render(){

        return(
            <>          

            <table>

                <tr>
                    <th>Day</th>
                    <th>Max tempreture</th>
                    <th>Low tempreture</th>
                    <th>Wind Speed</th>                   

                </tr>  

                <tr>

                    <th>{this.props.weatherDataD1.valid_date}</th>
                    <td>{this.props.weatherDataD1.max_temp} </td>
                    <td>{this.props.weatherDataD1.low_temp} </td>
                    <td>{this.props.weatherDataD1.wind_dir} </td>

                </tr>    
                <tr>

                    <th>{this.props.weatherDataD2.valid_date}</th>
                    <td>{this.props.weatherDataD2.max_temp} </td>
                    <td>{this.props.weatherDataD2.low_temp} </td>
                    <td>{this.props.weatherDataD2.wind_dir} </td>

                </tr>    
                <tr>

                    <th>{this.props.weatherDataD3.valid_date}</th>
                    <td>{this.props.weatherDataD3.max_temp} </td>
                    <td>{this.props.weatherDataD3.low_temp} </td>
                    <td>{this.props.weatherDataD3.wind_dir} </td>

                </tr>    


            </table>     
        
            </>
            
        )
    }

}
export default Weather;
