import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../DropdownCss.css';
import Overview from './G2Components/Overview';
import G2Maps from './G2Components/G2Maps';
const G2 = ({auth}) => {

    const [toggleTab, setToggleTab] = useState('Overview');

    const tabs = (name) => {
        setToggleTab(name);
    }

    return (
        <div>
            <section id="G2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview</NavLink></li>
                                <li className={toggleTab === "Maps" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Maps')}>Route Maps</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                G2:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <Overview /> </div>
                            <div className={toggleTab === "Maps" ? "display activeContent" : "display-4 content"}><G2Maps /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default G2