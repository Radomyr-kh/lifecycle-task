import React, {Component} from 'react';

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch('http//api.example.com/items')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    // if (this.state.list === null) {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        {this.state.items.map((item) => {
          <div key={item.id}>
            id - {item.id}
            name - {item.name}
            note - {item.note}
          </div>;
        })}
      </div>
    );
  }
}
