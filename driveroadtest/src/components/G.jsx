import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../DropdownCss.css';
import Overview from './GComponents/Overview';
import GTest from './GComponents/GTest';
const G = ({auth}) => {
    const [toggleTab, setToggleTab] = useState('Overview');
    const [overlayMenu, setOverlayMenu] = useState(true);

    const tabs = (name) => {
        setToggleTab(name);
    }

    const navSwitch = (val) =>{
        setOverlayMenu(val);
        if(val){
            document.getElementById("myNav").style.height = "5%";
        }else{
            document.getElementById("myNav").style.height = "100%";
        }
    }
  return (
    <div>
        <section id="G">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-5 G1Contents" id='myNav'>
                          {/* <!-- Button to close the overlay navigation --> */}
                          <NavLink href="javascript:void(0)" className={overlayMenu ?"closebtn hidebtn": "closebtn showbtn"} id="closebtn" onClick={() =>navSwitch(true)}>&times;</NavLink>

<NavLink href="javascript:void(0)" className={overlayMenu ? "openbtn showbtn": "openbtn hidebtn"} id="openbtn" onClick={()=>navSwitch(false)}>&#9776; open</NavLink>


                    <ul className='mt-5 G1ContentsList'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview</NavLink></li>
                                <li className={toggleTab === "GTest" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('GTest')}>G Test</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-8 my-5">
                            <div className="title h6">
                                G:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <Overview /> </div>
                            <div className={toggleTab === "GTest" ? "display activeContent" : "display-4 content"}><GTest /></div>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default G