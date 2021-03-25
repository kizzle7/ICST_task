import React from 'react'
import './index.css'
import {Table} from 'reactstrap'
import logo from './img/female.jpg'
export default function () {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <h4 className="title">blueBox</h4>
                        <div className="area">
                            <div className="user-pane d-flex justify-content align-items-center">
                                <img src={logo}  alt="user" className="rounded-circle logo-size" />
                                <div>
                                <div className="user-name">Angelina  Doe</div>
                                <div className="position">Design Manager</div>
                                </div>
                               
                                
                            </div>
                            <ul className="nav-items">
                                <li className="d-flex justify-content-between align-items-center">
                                    <p className="active">Dashboard</p>
                                    <p className="ml-4"><i className="fa fa-home"></i></p>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>UI Elements</p>
                                    <p className=""><i className="fa fa-paper-plane-o"></i></p>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>Components</p>
                                    <p className=""><i className="fa fa-barcode"></i></p>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>Form Stuff</p>
                                    <p className=""><i className="fa fa-list"></i></p>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>Datatables</p>
                                    <p className=""><i className="fa fa-table"></i></p>
                                </li>
                              
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>Icons</p>
                                    <p className=""><i className="fa fa-adjust"></i></p>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>Sample Page</p>
                                    <p className="ml-5"><i className="fa fa-folder"></i></p>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <p>Extra</p>
                                    <p className=""><i className="fa fa-star-half"></i></p>
                                </li>


                            </ul>
                        </div>
                        <div className="pt-3">
                        <button type="button" class="btn-add">Add Projects</button>
                        </div>
                    </div> 
                    <div className="col-md-10 main">
                        <div className="main">
                        <div className="header-area">
                        <div className=" d-flex justify-content-between align-items-center">
                            <div className="mr-auto"><i className="fa fa-search fa-2x pr-3"></i> Search Pages</div>
                            <div className="d-flex justify-content-between align-items-center">
                            <img src={logo}  alt="user" className="rounded-circle logo-size" />
                            <div className="user-name">Angelina  Doe <i className="fa fa-chevron-down"></i></div>

                            </div>
                            <p className="pl-5 pt-3"><i className="fa fa-envelope-o"></i></p>
                            <p className="pl-5 pt-3"><i className="fa fa-clock-o"></i></p>
                            <p className="pl-5 pt-3 pr-5"><i className="fa fa-lock"></i></p>

                            </div>

                        </div>

                        </div>
                 

                        <div className="main-body">
                            <br />
                            <p className="lead-text font-weight-bold"><i className="btn-house  text-white fa fa-home "></i> Dashboard</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="col-md-4 box1 mr-4">
                                    <p><i className="fa fa-home"></i></p>
                                    <p>Stock Total</p>
                                    <p>$150, 000</p>
                                    <p>Incresed by 60%</p>

                                </div>
                                <div className="col-md-4 box2 mr-4">
                                    <p><i className="fa fa-home"></i></p>
                                    <p>Total Profit</p>
                                    <p>$150, 000</p>
                                    <p>Incresed by 60%</p>

                                </div>
                                <div className="col-md-4 box3">
                                    <p><i className="fa fa-home"></i></p>
                                    <p>Unique Visitors</p>
                                    <p>$150, 000</p>
                                    
                                    <p>Incresed by 60%</p>

                                </div>
                            </div>
                            <br />
                            <br />
                            <br />

                            <div className="table-card" style={{width:'100%'}}>
                                <p className="lead-text">Standard Table Design</p><br />
                                <Table style={{width: '100%'}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>User Type</th>
          <th>Joined</th>
          <th>Status</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="td">Mark Brand</td>
          <td>markbrand@gmail.com</td>
          <td>Action</td>
          <td>18, Apr, 2018</td>
          <td><button type="button" class="btn-type3">Add Projects</button>
</td>

        </tr>
        <tr>
          <td>Mark Brand</td>
          <td>markbrand@gmail.com</td>
          <td>Action</td>
          <td>18, Apr, 2018</td>
          <td><button type="button" class="btn-type1">Add Projects</button>
</td>

        </tr>
        <tr>
          <td>Mark Brand</td>
          <td>markbrand@gmail.com</td>
          <td>Action</td>
          <td>18, Apr, 2018</td>
          <td><button type="button" class="btn-type1">Add Projects</button>
</td>

        </tr>
        <tr>
          <td>Mark Brand</td>
          <td>markbrand@gmail.com</td>
          <td>Action</td>
          <td>18, Apr, 2018</td>
          <td><button type="button" class="btn-type2">Add Projects</button>
</td>

        </tr>
        <tr>
          <td>Mark Brand</td>
          <td>markbrand@gmail.com</td>
          <td>Action</td>
          <td>18, Apr, 2018</td>
          <td><button type="button" class="btn-type3">Add Projects</button>
</td>

        </tr>
      </tbody>
    </Table>

                            </div>


                            {/* <div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Standard Table Design</h5>
    
  </div>
</div> */}
                        </div>
                       

                        </div>
                    </div>
                </div>

            </div>
            
    )
}
