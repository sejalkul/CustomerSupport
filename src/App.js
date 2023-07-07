import React,{useState} from 'react';
import './App.css';
import MyForm from './components/MyForm';
import Squares from './components/Squares';
import Faqs from './components/Faqs';
import img0 from './assests/images/img0.png';
import searchIcon from './assests/images/searchnormal.png';
import leftImg from './assests/images/left-img.png';
function App() {
  const [showForm, setShowForm] = useState(false);

  const handleTicketButtonClick = () => {
    setShowForm(true);
  };
  return (
    <>
    <div className="supp-centre">
    Support Centre
    </div>
    <div className="inp-field">
      <div className='search-icon'>
      <img src={searchIcon}  />
      </div>
      <div className='text-field'>
          <input type='text' placeholder='Search help articles'></input>
      </div>
      <button className='inp-btn' type='submit'>Search</button>
    </div>
    <img src={img0} className="right-aligned-image" />
    
  <div >
    <Squares heading="Identity Verification" para="Find how to instantly verify your identity" color="rgba(108, 99, 255, 0.38)"/>
    <Squares heading="Spot & Margin Trading" para="Find info on spot and margin trading" color="rgba(19, 251, 42, 0.17)"/>
    <Squares heading="Reset Password" para="Change your password in an instant" color="#E7E9AD"/>
    <Squares heading="Deposit/Withdrawal" para="Learn about deposit/withdrawal" color="#E7E9AD"/>
    <Squares heading="Change account Info" para="Info regarding account details change" color="rgba(108, 99, 255, 0.38)"/>
    <Squares heading="Unlock account" para="Accidentaly locked your account? Find out how to unlock" color="rgba(19, 251, 42, 0.17)"/>
    <Squares heading="Rise Ticket" para="If your facing any trouble please do reach out by rising a ticket"
    styles={{ left: '890px', top: '103px' }} />
    
</div>
<div className="faqs">
      FAQs
    </div>
      <Faqs/>
      <div className='images-div'>

      <div className="images-container">
        <div className='left-img'>
        <img src={leftImg} alt="Image 1" className="small-image" />
        <h2>Submit a Ticket</h2>
        <button className='btn' type='submit' onClick={handleTicketButtonClick}>Fill Your ticket</button>
        </div>
          
        <div className='right-img'>
        <img src='./img1.png' alt="Image 2" className="small-image" />
        <h2>Need to Enquire ? </h2>
        <button className='btn3' type='submit'>Contact Us</button>
        <button className='btn2' type='submit'>LIve Chat</button>
        </div>       
        </div>
      </div>
      <br/>
      {showForm && <MyForm />}
    
    </>
  );
}

export default App;
