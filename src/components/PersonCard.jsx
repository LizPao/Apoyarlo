import { Component } from 'react'
import { Helmet } from 'react-helmet';


class PersonCard extends Component {
    render() { 
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <Helmet>
                    <title>Page 1</title>
                </Helmet>
                <div>
                    <h1>{ firstName } { lastName }</h1>
                    <p>Age: { age }</p>
                    <p>Hair Color: { hairColor }</p>
                </div>   
            </>
        );
    }
}

export default PersonCard;