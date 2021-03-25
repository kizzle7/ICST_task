import React,{useState} from 'react'
import Cookie from 'js-cookie'

export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)



    const handleChange =(evt) => {
        const value = evt.target.value;
        setName(value)
      }

      const handleChange2 =(evt) => {
        const value = evt.target.value;
        setPassword(value)
      }

      const login = (e) => {
          e.preventDefault();
          const user = {
              name: name,
              password: password
          }
          if(user.name === "Sandra Brown" && user.password === "confirm3210"){
              setLoad(true)
              Cookie.set('userInfo', user)
              setTimeout(() => {
                window.location.href = "/dashboard";


              },1700)

          }
          else{
              setError(true)
              setTimeout(() => {
                  setError(false)
              },2000)
          }


      }


    return (
        <div>
             <img src="assets/img/upban.PNG" width="100%" />
    <div class="bg-white d-flex">

      <div class="logo mr-auto p-2">
        <a href="index.html"><img src="assets/img/app.PNG" alt="" id="img" class="img-fluid ml-4" /></a>
        <a href="index.html"><img src="assets/img/getstr.PNG" alt="" id="img" class="img-fluid" /></a>
        <a href="index.html"><img src="assets/img/aboutsec.PNG" alt="" id="img" class="img-fluid" /></a>
      </div>

    </div>

  <main id="main">

      <div class="container">
        <a href="index.html"><img src="assets/img/checkbal.PNG" alt="" class="checkbal" /></a>
      </div>

    <section id="portfolio-details" class="portfolio-details">
      <div class="container-log text-left" style={{marginTop: '1%'}}>
          <p id="remainder">
            LOCO CREDIT UNION WILL BE CLOSED THE REMAINDER OF THE DAY MARCH 24, 2021 DUE TO UNFORESEEN CIRCUMSTANCES BEYOND OUR CONTROL. WE WILL OPEN BACK UP TOMORROW MARCH 26, 2021. WE APOLOGIZE FOR ANY INCONVENIENCE THIS MAY CAUSE. THANK YOU FOR YOUR UNDERSTANDING
          </p>
      </div>
        <div class="row">
            <div class="col-md-5 ml-5">
                 <div class="sectionHeader colJustifyFormSubmit">
                        User Logon
                 </div>
                <div class="">
                <form>
                    {error && <p className=" text-center text-danger">Incorrect Details Entered!</p>}
  <div class="form-group">
    <label for="exampleInputEmail1" style={{color: '#0F213D'}}>Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" style={{color: '#0F213D'}}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handleChange2} />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  {load ?
 <button class="btn btn-default" type="button" disabled style={{color: '#fff', background: '#0F213D'}}>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Signing In...
</button>:
  <button type="submit" color= "#0F213D" class="btn btn-primary" style={{color: '#fff', background: '#0F213D'}} onClick={login}>Submit</button>}
</form>
                   
                    <a href="" class="text-primary colJustifyFormSubmit mt-5">Forgot Security Code?</a>
                </div>
            </div>
            <div class="col-md-5">
            <div class="contentSection">
                <div class="sectionHeader colJustifyFormSubmit">
                    First Time User?
                </div>
                <div class="sectionBody">
                    <div class="colJustifyFormSubmit">
                        If you have not already received a Logon ID and Security Code, enroll now for access.
                    </div>
                    <div class="colJustifyFormSubmit">
                        <input type="submit" name="btnEnroll" value="Enroll" onclick="" id="btnEnroll" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>

  </main>

 
  <footer id="below">
    <div class="footer-top">
      <div class="container">
        <div class="row  justify-content-center">
          <div class="col-lg-6">
            <p class="text-bold text-center mt-3">LOCO CREDIT UNION</p>
            <p class="text-bold text-center">Online Banking Member Service: 937-348-6583 or Toll Free 937-348-6583 M-F 9am to 5pm Mountain</p>
          </div>
        </div>
        <div class="row footer-newsletter justify-content-center">
          <div class="col-lg-6">
              <img src="assets/img/footer.PNG" class="below" />
          </div>
        </div>
        <p class="text-right">© 2020 Fiserv, Inc or its affiliates</p>    
      </div>
    </div>
    </footer>


 
            
        </div>
    )
}
