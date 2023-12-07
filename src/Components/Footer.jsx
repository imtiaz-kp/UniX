import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{ backgroundColor: 'rgb(106, 27, 154)', color: 'white' }} className=' d-flex justify-content-center align-items-center flex-column px-3 px-md-5'>
      <div className="footr-conternt d-flex flex-column flex-md-row w-100 mt-3">
        <div className="website mb-4 mb-md-0" style={{ flex: '1 1 100%' }}>
          <h4><i className="fa-brands fa-stack-overflow fa-bounce"></i> {' '}UniX-HuB</h4>
          <h6>Designed and built with all the love in the world by the "MI" team with the help of our contributors.</h6>
          <h6>Code licensed MIT, docs CC BY 3.0.</h6>
          <p>Currently v5.3.2</p>
        </div>
        <div className="links mb-4 mb-md-0" style={{ flex: '1 1 100%' }}>
          {/* Add your links here */}
        </div>
        <div className="guides mb-4 mb-md-0" style={{ flex: '1 1 100%' }}>
          {/* Add your guides here */}
        </div>
        <div className="contact flex-md-grow-1" style={{ flex: '1 1 100%' }}>
          <div className='d-flex flex-column flex-md-row mb-3'>
            <input className='form-control mb-3 mb-md-0 me-md-1' placeholder='Enter your mail'></input>
            <button className="btn btn-info" style={{ flex: '1 1 auto', minWidth: '150px' }}>Subscribe</button>
          </div>
          <div className='icons mt-3 d-flex justify-content-evenly fs-4'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook"></i></Link>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram"></i></Link>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-twitter"></i></Link>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-envelope"></i></Link>
          </div>
        </div>
      </div>
      <p>copyright 2023 Project Management Application. Build with React.</p>
    </div>
  );
}

export default Footer;
