import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../DropdownCss.css';
import Overview from './GComponents/Overview';
import GTest from './GComponents/GTest';
const G = ({auth}) => {
    const [toggleTab, setToggleTab] = useState('Overview');

    const tabs = (name) => {
        setToggleTab(name);
    }

  return (
    <div>
        <section id="G">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-5">
                    <ul className='mt-5'>
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