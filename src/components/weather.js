import React from 'react';
import Weatherday from './weatherDay.js'

class Weather extends React.Component{
    
    render(){

        return(
            <>          

            <table>
                <tr>
                    <th>Day</th>
                    <th>Description</th>                                      

                </tr>  
                {this.props.weatherDataPushed.map((item,index)=>{
                    return (
                    <Weatherday itemPushed={item} key={index} />
                    )

                })}


            </table>     
        
            </>
            
        )
    }

}
export default Weather;
