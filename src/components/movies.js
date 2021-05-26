import React from 'react';

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
                    <tr key={index}>
                        <th> {index} </th>
                        <th> {item.title} </th>
                        <th> {item.overview} </th>
                        <th> {item.average_votes} </th>
                        <th> {item.total_votes} </th>
                        <th> {item.movieLanguage} </th>
                        <img src={item.image_url} alt={item.title} />
                        <th> {item.popularity} </th>
                        <th> {item.release_on} </th>

                    </tr>
                );                
            })
            }

        </table>
        </>
        )




    }




}

export default Movies;
