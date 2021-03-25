import React from 'react'

export default function Index() {
    return (
    <div>
    <section id="topbar" class="d-none d-lg-block bg-danger">
    <div class="container d-flex">
    <p class="text-white" id="announce">MEMBER NOTICE: Please click here for an important <a href="#">COVID-19 message</a> and information. </p>
    </div>
  </section>
  <section id="topbar" class="d-none d-lg-block">
    <div class="container d-flex">
      <div class="contact-info mr-auto">
       
      </div>
      <div class="social-links">
           <i class="icofont-phone"></i><a href="telto:" class="text-bold">Call Us</a>
           <i class="icofont-pin ml-4"></i><a href="#" class="text-bold">Come See Us</a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="facebook"><i class="icofont-search"></i></a>
      </div>
    </div>
  </section>

  <header id="header">
    <div class="container d-flex">

      <div class="logo mr-auto">
        <a href="index.html"><img src="assets/img/logoWhite.png" alt="" class="img-fluid" /></a>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li class="drop-down"><a href="">PRODUCTS</a>
            <ul>
              <li><a href="#">SHARE SAVINGS & CHECKING</a></li>
              <li><a href="#">YOUTH & TEEN CLUBS</a></li>
              <li><a href="#">GENERATION NOW</a></li>
              <li><a href="#">LOAN PRODUCTS</a></li>
              <li><a href="#">RATES</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="">SERVICES</a>
            <ul>
              <li><a href="#">ONLINE SERVICES</a></li>
              <li><a href="#">LOST/STOLEN CARD</a></li>
              <li><a href="#">REPO LOT</a></li>
              <li><a href="#">FINANCIAL CALCULATORS</a></li>
              <li><a href="#">FAQS</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="">ABOUT US</a>
            <ul>
              <li><a href="#">ABOUT LOCO CREDIT UNION</a></li>
              <li><a href="#">CU MEMBERSHIP</a></li>
              <li><a href="#">MEMBER NOTICE</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </li>
         

        </ul>
      </nav>

    </div>
  </header>

 
  <section id="hero">
    <div class="hero-container" data-aos="fade-up">
      <a href="/login" class="btn-get-started scrollto" id="bttn">Online Banking Login ››</a>
    </div>
  </section>

  <main id="main">


  
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-3">
            <div class="box" data-aos="fade-up" style={{borderRight: '2px black solid'}}>
              <h4>Credit Card Payment</h4>
              <i class="icofont-card" id="icon"></i>
              <p>Click the link below to make convenient credit card payments online.</p>
                <br />
                <a href="#"  id="bttn">PROCEED FOR PAYMENT ›</a>
            </div>
          </div>

          <div class="col-lg-3 mt-4 mt-lg-0">
            <div class="box" data-aos="fade-up" data-aos-delay="100"  style={{bordeeRight: '2px black solid'}}>
              <h4>Online Loan Payment</h4>
              <i class="icofont-car" id="icon"></i>
              <p>Click the link below to make a convenient payment on your loan online.</p>
                <br />
                <a href="#" id="bttn">PROCEED FOR PAYMENT ›</a>
            </div>
          </div>

          <div class="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200"  style={{bordeRight: '2px black solid'}}>
            <div class="box">
              <h4>Virtual Branch Login</h4>
              <i class="icofont-user" id="icon"></i>
              <p>Click the link below to login to Virtual Branch and access your account online.</p>
                <br />
                <a href="#" id="bttn">ACCESS ACCOUNT NOW ›</a>
            </div>
          </div>

             <div class="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="box">
              <h4>Apply for a Loan Now!</h4>
              <i class="icofont-newspaper" id="icon"></i>
              <p>Click the links below to apply for a loan or a MasterCard® credit card.</p>
                <br />
                <a href="#" id="bttn">SINGLE ›</a>
                <a href="#"  id="bttn">JOINT ›</a>
                <a href="#" class="ml-5 mt-2" id="bttn">CREDIT ›</a>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="owl-carousel testimonials-carousel" data-aos="zoom-in">
          <div class="testimonial-item p-4">
          <h4 style={{fontSize: '25px'}} class="text-bold">Testimonials</h4>
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                   The loan officer for our car was amazing! 

              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>Mrs. Butler</h3>
          </div>
          <div class="testimonial-item p-4">
            <h4 style={{fontSize: '25px'}} class="text-bold">Testimonials</h4>
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Fast, friendly service, plus they offer services such as vehicle warranties and secure credit cards...I love it!!! 
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>James Richardson</h3>
          </div>
          <div class="testimonial-item p-4">
             <h4 style={{fontSize: '25px'}} class="text-bold">Testimonials</h4>
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Absolutely beautiful remodel and quick service if ever in a hurry! 
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>Morgan Pieper</h3>
          </div>
        </div>
      </div>
    </section>
          
  
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="row  justify-content-center">
            <div class="col-md-6">
            <img src="assets/img/cardValetBlue.png" class="mb-4"/>
            <br />
            <a href="#"><img src="assets/img/appleStore.png" width="40%"/></a>
            <a href="#"><img src="assets/img/googlePlay.png" width="40%"/></a>
            </div>
            <div class="col-md-6">
            <img src="assets/img/loco1.png" class="mb-4"/>
            <br />
            <a href="#"><img src="assets/img/appleStore.png" width="40%"/></a>
            <a href="#"><img src="assets/img/googlePlay.png" width="40%"/></a>
            </div>
        </div>
      </div>
    </section>

  </main>

 
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">
            <div class="col-md-4 text-left">      
                <a href="#">808 Washington Avenue</a>
                                <br />
                <a href="#">Alamogordo, NM 88310</a>
                                <br />
                <a href="telto:2164546718">Call: (216) 454-6718</a>
                                <br />
                <a href="mailto:info@lococreditunion.com">Email: info@lococreditunion.com</a>
            </div>
            <div class="col-md-4">
                <img src="assets/img/logoWhite.png"/>
            </div>
            <div class="col-md-4 text-right">
                <a href="#">Calculators</a>
                               <br />
                <a href="#">Privacy Policy</a>
                                <br />
                <a href="#">Locations/Hours</a>
                                <br />
                <a href="#">Routing# 312276030</a>
            </div>
        </div>
        <div class="row  justify-content-center">
            <div class="col-md-9 text-left">
                <p>*APR = ANNUAL PERCENTAGE RATE. RATE BASED ON CREDITWORTHINESS AND TERM OF LOAN.
                    <br />
                   **APY = ANNUAL PERCENTAGE YIELD. RATES ARE SUBJECT TO CHANGE AT ANY TIME AND ARE NOT GUARANTEED.
                    <br />
                  WE PROVIDE LINKS TO THIRD PARTY PARTNERS, INDEPENDENT FROM LOCO CREDIT UNION. THESE LINKS ARE PROVIDED ONLY AS A CONVENIENCE. 
                     <br />
                  WE DO NOT MANAGE THE CONTENT OF THOSE SITES. THE PRIVACY AND SECURITY POLICIES OF EXTERNAL WEBSITES WILL DIFFER FROM THOSE OF LOCO CREDIT UNION.</p>
            </div>
            <div class="col-md-3 mt-5">
                <img src="assets/img/Capture.PNG" />
            </div>
        </div>
        <div class="row  justify-content-center">
            <div class="col-sm-12">
                <p>
                Powered By: OMNICOMM<a href="#"><i class="icofont-star"></i></a>NDER
                </p>
            </div>
        </div>
      </div>
    </div>
  </footer>
            
        </div>
    )
}
