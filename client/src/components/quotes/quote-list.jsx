import React from 'react';
import axios from 'axios';


export default class QuoteList extends React.Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    axios.get('https://ohbrother.herokuapp.com/api/quotes')
      .then(res => {
        console.log(res);
        this.setState({quotes: res.data})
      });
  }

  render() {
    return (
      <ul>
        { this.state.quotes.map(quotes => <li>{quotes.quote}</li>)}
      </ul>
    )
  }
}
