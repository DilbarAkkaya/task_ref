import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {
  state = {
    advOpen: false
  }

  handleClick = () => {
    this.setState(({ advOpen }) => ({
      advOpen: !advOpen
    })
    )
  }

  componentDidMount() {
    setTimeout(this.handleClick, 3000)
    console.log(111)
  }
  setInputRef = elem => {
    this.myRef = elem;
  }
  focusFirstTI = () => {
    if (this.myRef) {
      this.myRef.focus();
    }
  }

  render() {
    return (
      <Container>
        <form onClick={this.handleClick} className='w-50 border mt-5 p-3 m-auto'>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>Email address</label>
            <input ref={this.setInputRef} type='email' className='form-control' id='exampleFormControlInput1'
              placeholder='name@example.com' />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>Example textarea</label>
            <textarea onClick={this.focusFirstTI} className='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
          </div>
          {
            this.state.advOpen ?
              <Portal>
                <Msg />
              </Portal> : null
          }
        </form>
      </Container>
    )
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
  return (
    <div style={{
      'width': '500px',
      'height': '150px',
      'backgroundColor': 'red',
      'position': 'absolute',
      'right': '0',
      'bottom': '0'
    }}>

    </div>
  )
}
function App() {
  return (
    <Form />
  );
}

export default App;