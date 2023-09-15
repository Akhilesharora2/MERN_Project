import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../DropdownCss.css';
import G1OverviewAd from './AdminComponents/G1Admin/G1OverviewAd';
import P1Ad from './AdminComponents/G1Admin/P1Ad';
import P2Ad from './AdminComponents/G1Admin/P2Ad';
import E1Ad from './AdminComponents/G1Admin/E1Ad';
import E2Ad from './AdminComponents/G1Admin/E2Ad';
import E3Ad from './AdminComponents/G1Admin/E3Ad';
import FinalAd  from './AdminComponents/G1Admin/FinalAd';

import G2OverviewAd from './AdminComponents/G2Admin/G2OverviewAd';

import GOverviewAd from './AdminComponents/GAdmin/GOverviewAd';

const AdminDashboard = () => {

    const [editTab, setEditTab] = useState('G1');
    const [toggleTab, setToggleTab] = useState('Overview');

    const tabs = (name) => {
        setToggleTab(name);
    }
    const editTabs = (name) => {
        setEditTab(name);
    }

    return (
        <div>
            <section id="G1">
                <div className='bg-warning py-2 text-center'>You are entered into the Editors mode.</div>
                <div className="container">
                    <div className="row">
                        <div className=''>
                            <button className={editTab === 'G1' ? 'buttons btn btn-primary rounded-pill' : 'buttons btn btn-outline-primary rounded-pill' } onClick={() => editTabs('G1')}>G1</button>
                            <button className={editTab === 'G2' ? 'buttons btn btn-primary rounded-pill' : 'buttons btn btn-outline-primary rounded-pill' } onClick={() => editTabs('G2')}>G2</button>
                            <button className={editTab === 'G' ? 'buttons btn btn-primary rounded-pill' : 'buttons btn btn-outline-primary rounded-pill' } onClick={() => editTabs('G')}>G</button>
                        </div>
                    </div>

                    {/* G1 */}

                    <div className={editTab === 'G1' ? 'row' : 'row content'}>
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview G1</NavLink></li>
                                <li className={toggleTab === "P1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P1')}>Knowledge Test #1</NavLink></li>
                                <li className={toggleTab === "P2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P2')}>Traffic Signs #2</NavLink></li>
                                <li className={toggleTab === "E1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('E1')}>Practice Knowledge Exam</NavLink></li>
                                <li className={toggleTab === "E2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('E2')}>Practice Signs Exam</NavLink></li>
                                <li className={toggleTab === "E3" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('E3')}>Practice Knowledge+Signs Exam</NavLink></li>
                                <li className={toggleTab === "Final" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs("Final")}>Final Test</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                Admin Dashboard:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <G1OverviewAd /> </div>
                            <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><P1Ad /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><P2Ad /></div>
                            <div className={toggleTab === "E1" ? "display activeContent" : "display-4 content"}><E1Ad /></div>
                            <div className={toggleTab === "E2" ? "display activeContent" : "display-4 content"}><E2Ad /></div>
                            <div className={toggleTab === "E3" ? "display activeContent" : "display-4 content"}><E3Ad /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalAd /></div>
                        </div>
                    </div>

                            {/* G2 */}

                    <div className={editTab === 'G2' ? 'row' : 'row content'}>
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview G2</NavLink></li>
                                <li className={toggleTab === "Maps" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Maps')}>Maps</NavLink></li>
                                
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                Admin Dashboard:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <G2OverviewAd /> </div>
                            {/* <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><KnowledgeTest1 /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><TrafficSigns2 /></div>
                            <div className={toggleTab === "E1" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeExam /></div>
                            <div className={toggleTab === "E2" ? "display activeContent" : "display-4 content"}><PracticeSignsExam /></div>
                            <div className={toggleTab === "E3" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeandSignsExam /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalTest /></div> */}
                        </div>
                    </div>

                            {/* G */}

                    <div className={editTab === 'G' ? 'row' : 'row content'}>
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview G</NavLink></li>
                                <li className={toggleTab === "P1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P1')}>G Test</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                Admin Dashboard:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <GOverviewAd /> </div>
                            {/* <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><KnowledgeTest1 /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><TrafficSigns2 /></div>
                            <div className={toggleTab === "E1" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeExam /></div>
                            <div className={toggleTab === "E2" ? "display activeContent" : "display-4 content"}><PracticeSignsExam /></div>
                            <div className={toggleTab === "E3" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeandSignsExam /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalTest /></div> */}
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default AdminDashboard