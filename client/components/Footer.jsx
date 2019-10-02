import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor: '#1B245C', height: '5vh', width: '100vw', position: 'fixed', bottom: '0px'}}>
      <div style={{float: 'right', position: 'relative', padding: '1.5vh'}}>
        <img src={'/images/BBook-footer-socmedia-nstagram.svg'} style={{right: '10vw', position: 'relative'}}></img>
        <img src={'/images/BBook-footer-socmedia-twitter.svg'} style={{right: '8vw', position: 'relative'}}></img>
        <img src={'/images/BBook-footer-socmedia-fb.svg'} style={{right: '6vw', position: 'relative'}}></img>
      </div>
    </div>
  )
}

export default Footer
