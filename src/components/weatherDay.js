import React from 'react';

class Weatherday extends React.Component{

   


render(){
    console.log(this.props.item)

    return(
        <>
            <tr>
                <th>{this.props.itemPushed.date} hellow</th>
                <td>{this.props.itemPushed.description} </td>                  

            </tr>  

        </>
    )  
   
}


}

export default Weatherday