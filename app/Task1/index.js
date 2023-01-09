import React, {Component} from 'react';

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch('http://localhost:3000/list')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      })
      .finally(() => {
        this.setState({loading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className='row border'>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={'row'}>
            {this.state.list &&
              this.state.list.map(({id, name, note}) => {
                return (
                  <div key={id} id={id} className={'col col-2 col-3 border'}>
                    <p>id - {id}</p>
                    <p>name - {name}</p>
                    <p>note - {note}</p>
                  </div>
                );
              })}
          </div>
        )}
      </>
    );
  }
}
