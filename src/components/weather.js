import React from 'react';

class Weather extends React.Component{
    
    render(){

        return(
            <>          

            <table>
                <tr>
                    <th>Day</th>
                    <th>Description</th>                                      

                </tr>  
                {this.props.weatherDataPushed.map(item=>{
                    return(

                    <tr>
                        <th>{item.date}</th>
                        <td>{item.description} </td>                  

                    </tr>  
                    )  

                })}


            </table>     
        
            </>
            
        )
    }

}
export default Weather;
