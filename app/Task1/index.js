import React, {Component} from 'react';

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      loader: false,
    };
  }
  componentDidMount() {
    // this.sw
    this.setState({isLoader: true});
    fetch('http://localhost:3000/list', {method: 'GET'})
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          list: result,
        });
      })
      .finally(() => {
        this.setState({loader: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.loader ? (
          <div className={'border'}>
            <span>Loading...</span>;
          </div>
        ) : (
          <div className={'row'}>
            {this.state.list &&
              this.state.list.map((item) => {
                return (
                  <div className={'col-3 col border'} key={item.id}>
                    <p>id - {item.id}</p>
                    <p>name - {item.name}</p>
                    <p>note - {item.note}</p>
                  </div>
                );
              })}
          </div>
        )}
      </>
    );
  }
}
