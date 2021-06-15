import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import './animation.css'
import ThankYou from '../thankYou'


const TextInput = styled.input `
    width: 100%;
    margin-bottom: 1rem;
    margin-top: .3rem;
    margin-left: 0px; 
`
const TextArea = styled.textarea `
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: .3rem;
    margin-left: 0px; 
`


function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join('&')
}

function  EmailLogic () {
  const [submit, setSubmit] = useState(false)
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleMaskChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');  
}

  const thankYou = ()=> {
    setSubmit(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => thankYou())
      .catch((error) => error)
  }

   if (submit === false){
    return (
      <Container>
      <Row>
          <Col>
              <h2>Let's Connect!</h2>
              <form name="DevContact"
              method="Post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}>
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" aria-label="hidden"/>
              <p hidden>
              <label>
                  Don’t fill this out: <input name="bot-field" onChange={handleChange} aria-label="hidden"/>
              </label>
              </p>
      
                  <label htmlFor="name">Your Name</label>
                  <TextInput type='text' id='contact-name' maxLength='50' name='name' placeholder='Jane Doe' onChange={handleChange} />    
                  <label htmlFor="email">E-mail</label>
                  <TextInput type='email' id='contact-email' maxLength='75' name='email' placeholder='example@test.com' onChange={handleChange} />
                  <label htmlFor= 'phone'>Phone Number</label>
                  <TextInput type='tel' id= 'contact-telephone' maxLength='75' name='phone' placeholder='(000) 000-000' onChange={handleMaskChange} />
                  <label htmlFor='message'>What problem can I solve for you?</label>
                  <TextArea htmlFor='text' id='contact-msg' name='message' maxlength= '500' placeholder = 'Type Away...' onChange={handleChange} />
                  <button type='submit' className="neon-button">Submit</button>
              </form>
              
          </Col>
          
          </Row>   
  
  </Container>   
    )
   }else if (submit === true) {
     return <ThankYou/>
   } 
};

export default EmailLogic;


