import React, {useState} from 'react'
import '../App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Modal, Alert,Button,notification } from 'antd';
import OtpInput from 'react-otp-input';
import mark from  './img/mark.png'
import photo from './img/use.jpeg'

const pin = 3888;

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }
export default function Dashboard() {
    const [sidebarTrue, setSIdebar] = useState(true)
    const [alert1, setAlert1] = useState(false)

    const [clicked, setClicked] = useState(false)
    const [final, setFinal] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [loadSPin, setLoadSpin] = useState(false)
    const [sidebar, setSIde] = useState(true)
    const [display, setDisplay] = useState(false)
    const [otp, setOtp] = useState(0)
    const [otp2, setOtp2] = useState('')

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const [load1, setLoad1] =  useState(false);
    const [load2, setLoad2] = useState(false)
    const [load3, setLoad3] = useState(false)
    const [load4, setLoad4] = useState(false)


    const [showPay, setShowPay] = useState(false)
    const [first, setFirst] = useState({firstName: "",
    lastName: "", third: "", fourth:""})

     const handleChangeOtp = otp => {
         setOtp(otp)
     }
     const handleChangeOtp2 = otp => setOtp2(otp);


    const [load, setLoader] = useState(0)


    const handleChange =(evt) => {
        const value = evt.target.value;
        setFirst({
          ...first,
          [evt.target.name]: value
        });
      }

      const openPay = () => {
          setShowPay(true)
      }

    const sendMoney = (e) => {
        e.preventDefault()
        if(first.firstName && first.lastName, first.third && first.fourth){
            setLoadSpin(true)
            if(load === 100) return 
            setLoader(load + 50)
            setTimeout(() => {
                setLoadSpin(false)
                setShowPay(false)
                setClicked(true)
            },2000)

        }
        else{
            setDisplay(true)
            setTimeout(() => {
                setDisplay(false)
            },1100)
        }
     
    }

    const doneCancel = () => {
        setFinal(false)
        setOtp('');
        setShow1(false)
        setShow2(false)
        setShowPay(false)
        setClicked(false)
        setLoader(0)
        setClicked2(false)
        setFirst({
            ...first,firstName: '', lastName: '', third: '', fourth: ''
          });
    }

    const handleOk = () => {
        setLoad1(true)
        setTimeout(() => {
            setClicked(false)
            setShow1(true)
        },1800)
       
      };
      const handleOk2 = () => {
          console.log(otp)
        if(otp === '3888'){
            console.log('correct')
            setLoad2(true)
            setTimeout(() => {
              setShow1(false)
              setLoader(load + 30)
              setClicked2(true)
  
            },1800)
            
        }
        else{
            openNotification('WRONG PIN')
        }
         
       
       
      };

      const openNotification = (pin) => {
        notification['error']({
          message: pin,
          description:
            'The PIN entered is incorrect.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

      const handleOk3 = () => {
          setLoad3(true)
          setTimeout(() => {
            setLoad3(false)
            setShow2(true)
            setClicked2(false)
            setLoader(load + 19)
          })
        
       
       
      };
      const handleOk4 = () => {
          if(otp2 === "2476"){
            setLoad3(false)
            setShow2(false)
            // setClicked2(false)
            // setLoader(load + 1)
            // setFinal(true)
            setFinal(false)
            setOtp('');
            setShow1(false)
            setShowPay(false)
            setClicked(false)
            setLoader(0)
            setClicked2(false)
            setLoad1(false)
            setLoad2(false)
            setOtp2('')
            setLoad3(false)
            setFirst({
                ...first,firstName: '', lastName: '', third: '', fourth: ''
              });
              
          }
          else{
              openNotification('INCORRECT AND UNMATCHED PIN')
          }
  
       
       
      };
    
      const handleCancel = () => {
        setShowPay(false);
        setFirst({
            ...first,firstName: '', lastName: '', third: '', fourth: ''
          });
      };


    const toggleSide = () => {
        console.log('clicked')
        setSIdebar(!sidebarTrue)
    }

    const closeSide = () =>{

    }
    return (
        <div>
            <div id="wrapper">
{sidebarTrue &&
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div class="sidebar-brand-text mx-3"><img src="img/logoWhite.png" style={{width: '200px'}} /></div>
  </a>
  <hr class="sidebar-divider my-0" />
  <li class="nav-item active">
    <a class="nav-link" href="/dashboard">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span></a>
  </li>
  <hr class="sidebar-divider" />
  <li class="nav-item">
    <a class="nav-link collapsed" href="#">
      <i class="fas fa-fw fa-cog"></i>
      <span>Transactions</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
      <i class="fas fa-fw fa-bank"></i>
      <span>My Funds</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <a class="collapse-item dropdown-item btn-get-started scrollto" onClick={openPay}>Send Funds</a>
        <a class="collapse-item" href="#">Receive Funds</a>
      </div>
    </div>
  </li>
  <hr class="sidebar-divider" />
  <li class="nav-item">
    <a class="nav-link" href="#">
      <i class="fas fa-fw fa-chart-area"></i>
      <span>Notifications</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
      <i class="fas fa-fw fa-folder"></i>
      <span>Support</span>
    </a>
    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <a class="collapse-item" href="login.html">Logout</a>
        <a class="collapse-item" href="forgot-password.html">Forgot Password?</a>
      </div>
    </div>
  </li>
  <hr class="sidebar-divider d-none d-md-block" />
  {/* <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle" onClick={closeSide}></button>
  </div> */}
</ul>}

<div id="content-wrapper" class="d-flex flex-column">
  <div id="content">

    
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars" onClick={toggleSide}></i>
      </button>


  
      <ul class="navbar-nav ml-auto">

   
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Sandra Brown </span>
            <img class="img-profile rounded-circle" src={photo} />
          </a>
        
          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a class="dropdown-item" href="#">
              <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <a class="dropdown-item" href="#">
              <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>

      </ul>

    </nav>
      </div>
    

  
    <div class="container-fluid">

    
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Online Banking</h1>
      </div>
        
      
      <div class="row">
        <div class="col-xl-6 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 w-75 py-2">
            <div class="card-body">
                <a class="dropdown-item btn-get-started scrollto" id="bttn" href="#" onClick={openPay}>
              Send Money ››
            </a>
            </div>
          </div>
        </div>
    
        <div class="col-xl-6 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
             
  <a href="" class="btn-get-started scrollto" id="bttn">Receive Money ››</a>
            </div>
          </div>
        </div>
  </div>

      
      <div class="row">
           <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Current Total Balance</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">$1,050,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Current Available Balance</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">$1,050,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Pending Transactions</div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">0%</div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div class="progress-bar bg-info" role="progressbar" style={{width: '0%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
   </div>
        
        
      
  <div class="row">
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Loan Debts</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">$0</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Pending Funds Request</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">$0</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Active Loans</div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">0%</div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div class="progress-bar bg-info" role="progressbar" style={{width: '0%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      </div>

    
  


  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
       <footer id="below">
    <div class="footer-top">
    <div class="container">
    <div class="row  justify-content-center">
      <div class="col-lg-6">
        <p class="text-bold text-center tetx-black">Online Banking Member Service:  937-348-6583 or Toll Free  937-348-6583 M-F 9am to 5pm Mountain</p>
      </div>
    </div>
    <div class="row footer-newsletter justify-content-center">
      <div class="col-lg-6">
          <img src="img/footer.PNG" class="below"/>
      </div>
    </div>
    <p class="text-right">© 2020 Fiserv, Inc or its affiliates</p>    
  </div>
</div>
</footer>
    </div>
  </footer>
 

    </div>
  
</div>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
      <a class="btn btn-primary" href="/login">Logout</a>
    </div>
  </div>
</div>
</div>

<div class="modal fade " id="SendMoney" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content  justify-content-center">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel"><span><img src="img/medlogo.PNG"/></span> Money Transfer</h5>
      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
        {display && <p className=" text-center text-danger">All fields are required to proceed!</p>}
        <i class="fas fa-home fa-2x text-dark-300 mr-2"></i>
        <input type="text" placeholder="Beneficiary Bank Name"  name="firstName"
          value={first.firstName}
          onChange={handleChange} class="form-group w-75 p-1"/>
        <br />
        <i class="fas fa-pen fa-2x text-dark-300 mr-2"></i>
        <input type="number" placeholder="Beneficiary Account Number"   name="lastName"
          value={first.lastName}
          onChange={handleChange} class="form-group w-75 p-1"/>
        <br />
        <i class="fas fa-user fa-2x text-dark-300 mr-2"></i>
        <input type="text" placeholder="Beneficiary Name" 
          name="third"
          value={first.third}
          onChange={handleChange}
        class="form-group w-75 p-1"/>
        <br />
        <i class="fas fa-pen fa-2x text-dark-300 mr-2"></i>
        <input type="number" placeholder="Amount ($)" 
          name="fourth"
          value={first.fourth}
          onChange={handleChange}
        class="form-group w-75 p-1" />
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-dismiss="modal" >Cancel</button>
      <button class="btn btn-primary"  onClick={sendMoney}>Send</button>
     
        <ProgressBar percentage={load} />

    </div>
  </div>
</div>
</div>

<Modal title="Money Transfer" visible={showPay} onCancel={handleCancel} maskClosable={false} footer={null}>
<div class="text-right">
     <img src="img/medlogo.PNG"/>
    
    </div>
    <br />
    <br />
<form>
    {display && <p className="text-danger text-center">All fields are required!</p>}
    
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="fas fa-home fa-2x text-dark-300"></i>
</span>
  </div>
  <input type="text" class="form-control" placeholder="Beneficiary Bank Name"
   name="firstName"
   value={first.firstName}
   onChange={handleChange}
  style={{height: '3rem'}} aria-describedby="basic-addon1" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="fas fa-pen fa-2x text-dark-300"></i></span>
  </div>
  <input type="text" class="form-control" 
   name="lastName"
   value={first.lastName}
   onChange={handleChange}
  placeholder="Beneficiary Account Number" style={{height: '3rem'}}  aria-describedby="basic-addon1" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="fas fa-user fa-2x text-dark-300"></i>
</span>
  </div>
  <input type="text" class="form-control" 
    name="third"
    value={first.third}
    onChange={handleChange}
  placeholder="Beneficiary Name"  style={{height: '3rem'}}  aria-describedby="basic-addon1" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="fas fa-pen fa-2x text-dark-300"></i>
</span>
  </div>
  <input type="text" class="form-control"
   name="fourth"
   value={first.fourth}
   onChange={handleChange}
   placeholder="Amount ($)"  style={{height: '3rem'}} aria-label="Username" aria-describedby="basic-addon1" />
</div>
 <div className="text-right"> 
 {loadSPin ?
 <button class="btn btn-primary" type="button" disabled style={{color: '#fff', background: '#0F213D'}}>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Processing...
</button>:
 <button type="submit" class="btn btn-default" style={{background:'#0F213D', color: 'white'}} onClick={sendMoney}>Submit</button>}




 </div>
</form>
  
      </Modal>

      <Modal title="Success Status" visible={clicked} onOk={handleOk} okText={load1 ? (<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
): "Continue"}>

      <h4 className="text-center" style={{color: '#0F213D'}}> Status</h4>
      <div className="d-flex justify-content-center align-items-center mb-3">
      <div id="circle">{load}%</div>
     </div>

    <ProgressBar percentage={load} />
        
      </Modal>

      <Modal title="Success Status" visible={clicked2} onOk={handleOk3} okText={load3 ? (<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
): "Continue"}>

<h4 className=" text-center" style={{color: '#0F213D'}}> Status</h4>
<div className="d-flex justify-content-center align-items-center mb-3">
<div id="circle">{load}%</div>
</div>

<ProgressBar percentage={load} />
  
</Modal>

<Modal title="Transaction Completed" visible={final} footer={null} onCancel={doneCancel}>

<h4 className="text-success text-center">Transaction Completed</h4>
<div className="d-flex justify-content-center align-items-center mb-3">
<div id="circle"><img src={mark} alt="" className="w-100"/></div>
</div>

<ProgressBar percentage={load} />
  
</Modal>


      <Modal title="Enter Secret Code" visible={show1} onOk={handleOk2} okText={load2 ? (<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
): "Submit"}>

<h4 className="text-center" style={{color: '#0F213D'}}>Enter your Secret Code</h4>
<div className="otp-page">
    <br /><br /><br /><br />
<OtpInput
        value={otp}
        onChange={handleChangeOtp}
        numInputs={4}
        inputStyle = {{width: '5rem', height: '2.4rem', fontSize:'18px'}}
        separator={<span>-</span>}
      />
</div>
  
</Modal>



<Modal title="Code Confirmation" visible={show2} onOk={handleOk4} okText= {load4 ? (<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
): "Submit"}>

<h4 className="text-center" style={{color: '#0F213D'}}>Confirm your Secret Code</h4>
<div className="otp-page">
    <br /><br /><br /><br />
<OtpInput
        value={otp2}
        onChange={handleChangeOtp2}
        numInputs={4}
        inputStyle = {{width: '5rem', height: '2.4rem', fontSize:'18px'}}
        separator={<span>-</span>}
      />
</div>
  
</Modal>


            
        </div>
    )
}
