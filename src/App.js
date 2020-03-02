import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      act: 0,
      index: '',
      datas: [],
    };
  }

  componentDidMount = () => {
    this.refs.name.focus();
  };

  fsubmit = e => {
    e.preventDefault();

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if (this.state.act === 0) {
      let data = {
        name,
        address,
      };
      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({ datas: datas, act: 0 });

    this.refs.myform.reset();
    this.refs.name.focus();
  };

  fdelete = i => {
    let datas = this.state.datas;
    datas.splice(i, 1);

    this.setState({ datas: datas });

    this.refs.myform.reset();
    this.refs.name.focus();
  };

  fEdit = i => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i,
    });
  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h1>REACT CRUD OPERATION</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="content">
            <form ref="myform" className="myform">
              <input
                type="text"
                ref="name"
                placeholder="Your Name"
                className="formfield"
              />
              <input
                type="text"
                ref="address"
                placeholder="Your address"
                className="formfield"
              />
              <button
                className="btn-lg btn-danger"
                onClick={e => this.fsubmit(e)}
              >
                <b>SUBMIT</b>
              </button>
            </form>
            <br></br>
            <div>
              {datas.map((data, i) => (
                <li key={i} className="mylist">
                  {i + 1}. {data.name}, {data.address}
                  <button onClick={() => this.fEdit(i)}>edit</button>
                  <button onClick={() => this.fdelete(i)}>delete</button>
                </li>
              ))}
            </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
