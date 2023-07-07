import React, { useState } from 'react';
import './MyForm.css';
import '../App.css';
import image2 from '../assests/images/img2.png'
import Captcha from '../assests/images/recaptcha-icon.png'
import FileUploadButton from './FileUploadButton';

const MyForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    emailID: '',
    subject: '',
    category: '',
    description: '',
    ticketType: '',
    captcha: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleCaptcha = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      captcha: true
    }));
   
  };

  const myStyle={
    color: '#000',
fontFamily: 'Mulish',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '200',
lineHeight: 'normal',
borderRadius: '10px',
border: '1px solid #CCC',
    
    };

  return (
<>
<div className='page2'>
<div className='form-img'>
    <h1>Fill up your ticket</h1>
    <img src={image2} style={{backgroundColor:"transparent"}} alt="image"/>
</div>
    <div className='form-div'>
       
    <form onSubmit={handleSubmit}>
      <div>
      <h3>Submit a Ticket</h3><br/><br/>
        <label htmlFor="userId" style={{ marginRight: '50px' }}>User ID</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          style={{ ...myStyle,width: '877px',height: '86px'}}
        />
      </div>
        <br/>
      <div>
        <label htmlFor="emailID" style={{ marginRight: '50px' }}>Email ID</label>
        <input
          type="text"
          id="emailID"
          name="emailID"
          value={formData.emailID}
          onChange={handleChange}
          style={{ ...myStyle,width: '877px',height: '86px'}}
        />
      </div>
    <br/>
      <div>
        <label htmlFor="subject" style={{ marginRight: '50px' }}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ ...myStyle,width: '877px',height: '86px'}}
        />
      </div>
        <br/>
      <div>
        <label htmlFor="category" style={{ marginRight: '50px' }}>Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{ ...myStyle,width: '877px',height: '86px'}}
        />
      </div>
        <br/>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div>
    <label htmlFor="description">Description</label>
    <input
      id="description"
      name="description"
      value={formData.description}
      onChange={handleChange}
      style={{ ...myStyle, width: '800px', height: '285px' }}
    />
  </div>
  <div>
    <FileUploadButton />
  </div>
</div>
  
<br/>
      <div>
        <label htmlFor="ticketType">Ticket Type</label>
        <input
          id="ticketType"
          name="ticketType"
          value={formData.ticketType}
          onChange={handleChange}
          style={{ ...myStyle,width: '469px',height: '86px'}}
        />
          
      </div>
<br/>
<br/>

      <div class="form-container">
      <div class="form-group" style={{ width: '190px',height: '40px'}}>
      
        <input
          type="checkbox"
          id="captcha"
          name="captcha"
          value={formData.captcha}
          onChange={handleCaptcha}
        />
        <p htmlFor="captcha"  style={{ marginLeft:'10px'}}>I am not a robot.</p>
        <img src={Captcha} alt="image" style={{height:'25px',width:'35px',marginLeft:'40px'}}/>

      </div>
      <div className="btn-container">
      <button className='btn3' onChange={handleSubmit} type='submit'>Submit</button>
        <button className='btn2' type='submit'>Cancel</button>
        </div>
      </div>
    </form>
    </div>
    </div>
    </>
  );
};

export default MyForm;
