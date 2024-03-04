import React from "react";
import styles from '../../styles/styles.module.css';
import logo from '../../assets/images/logo.png';

const HomeNavbar = () => {

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid d-flex bd-highlight">
          <div className="w-100 bd-highlight">
            <img className="img-fluid" src={logo} alt="" style={{ maxHeight: '10rem', maxWidth: '10rem' }} />
            <button className="navbar-toggler flex-shrink-1 bd-highlight" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse flex-shrink-1 bd-highlight" id="navbarSupportedContent">
         
              <button className={styles.btn}>SignUp</button>
              
              <button className={styles.btn}>Login</button>
              
             
            
          </div>
        </div>
      </nav>
    </>

  );
}
export default HomeNavbar;