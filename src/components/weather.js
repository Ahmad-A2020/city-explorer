import React from 'react';

class Weather extends React.Component{
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
            console.log({this.props.weatherDat.valid_date})
            <table>
                <tr>
                    <th>{this.props.weatherDat.valid_date}</th>


                </tr>

            </table>
            </>
        )
    }




}
export default Weather;
