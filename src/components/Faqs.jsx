import React from 'react';
const Faqs=(props)=>{
  const myStyle={
position: 'absolute',
width: '581px',
height: '72px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '20px',
lineHeight: '38px',
display: 'flex',
alignItems: 'center',
color: '#000000',

};

    return(
        <>
        <div className="container">
        <div className="left-div">
            <h6 className='hl1' style={{ ...myStyle,marginTop: '350px' ,marginLeft: '223px'}}> How to complete Identity Verification?</h6>
            <h6 className='hl2' style={{ ...myStyle,marginTop: '450px' ,marginLeft: '223px'}}> How to Redeem Savings Trial Fund?</h6>
            <h6 className='hl3' style={{ ...myStyle,marginTop: '550px' ,marginLeft: '223px'}}>How to buy Cryptocurrency via P2P?</h6>
        </div>
        <div className="right-div">
            <h6 className='hr1' style={{ ...myStyle,marginTop: '350px' ,marginLeft: '800px'}}>How to sell coins with Simplex?</h6>
            <h6 className='hr2' style={{ ...myStyle,marginTop: '450px' ,marginLeft: '800px'}}>How to report stolen funds?</h6>
            <h6 className='hr3' style={{ ...myStyle,marginTop: '550px' ,marginLeft: '800px'}}>How to prevent phishing attacks?</h6>
        </div>
    </div>
      </>

    )
}

export default Faqs;