import React from 'react';

class Movie extends React.Component{

    render(){
        return(
            <tr >
                <th> {this.props.index} </th>
                <th> {this.props.item.title} </th>
                <th> {this.props.item.overview} </th>
                <th> {this.props.item.average_votes} </th>
                <th> {this.props.item.total_votes} </th>
                <th> {this.props.item.movieLanguage} </th>
                <img src={this.props.item.image_url} alt={this.props.item.title} />
                <th> {this.props.item.popularity} </th>
                <th> {this.props.item.release_on} </th>

            </tr>
        );

    }
}
export default Movie