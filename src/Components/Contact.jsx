import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="title center">Contact</h1>
      <form className='center contact' action="https://api.web3forms.com/submit" method="POST" >
        <input type="hidden" name="access_key" value="292096eb-a849-4b0a-861f-0f2d3330a36b"/>

        <label className='underline'>Your name:</label>
        <input type="text" id="name" name="name" required/>
        <label className='underline'>Email address:</label>
        <input type="email" id="email" name="email" required />
        <label className='underline'>Message:</label>
        <textarea name="message" id="message" cols="30" rows="5" required></textarea>
        <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}></input>
        <button type='sumbit' className='contact-btn' onClick={()=>{
                  }}>Send question</button>
      </form>
    </section>
  )
}

export default Contact
