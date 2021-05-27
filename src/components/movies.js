import React from 'react';
import Movie from './movie'

class Movies extends React.Component{

   

    render( ){

        return(

        <>
        <table>
            <tr>
                <th>NO</th>
                <th>Title</th>
                <th>Overview</th>
                <th>Average_votes</th>
                <th>Total votes</th>
                <th>Movie Language</th>
                <th>Image</th>
                <th>Popularity</th>
                <th>Date of release</th>

            </tr>
            { this.props.moviesDatapushed.map((item,index)=>{
                return(

                    <Movie item={item} key={index} index={index} />
                    
                );                
            })
            }

        </table>
        </>
        )




    }




}

export default Movies;
