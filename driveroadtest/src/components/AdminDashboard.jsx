import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../DropdownCss.css';
import G1OverviewAd from './AdminComponents/G1OverviewAd';

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
                                <li className={toggleTab === "T1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T1')}>Knowledge Test #1</NavLink></li>
                                <li className={toggleTab === "T2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T2')}>Traffic Signs #2</NavLink></li>
                                <li className={toggleTab === "P1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P1')}>Practice Knowledge Exam</NavLink></li>
                                <li className={toggleTab === "P2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P2')}>Practice Signs Exam</NavLink></li>
                                <li className={toggleTab === "P3" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P3')}>Practice Knowledge+Signs Exam</NavLink></li>
                                <li className={toggleTab === "Final" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs("Final")}>Final Test</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                Admin Dashboard:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <G1OverviewAd /> </div>
                            {/* <div className={toggleTab === "T1" ? "display activeContent" : "display-4 content"}><KnowledgeTest1 /></div>
                            <div className={toggleTab === "T2" ? "display activeContent" : "display-4 content"}><TrafficSigns2 /></div>
                            <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeExam /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><PracticeSignsExam /></div>
                            <div className={toggleTab === "P3" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeandSignsExam /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalTest /></div> */}
                        </div>
                    </div>

                            {/* G2 */}

                    <div className={editTab === 'G2' ? 'row' : 'row content'}>
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview G2</NavLink></li>
                                <li className={toggleTab === "T1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T1')}>Knowledge Test #1</NavLink></li>
                                <li className={toggleTab === "T2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T2')}>Traffic Signs #2</NavLink></li>
                                <li className={toggleTab === "P1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P1')}>Practice Knowledge Exam</NavLink></li>
                                <li className={toggleTab === "P2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P2')}>Practice Signs Exam</NavLink></li>
                                <li className={toggleTab === "P3" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P3')}>Practice Knowledge+Signs Exam</NavLink></li>
                                <li className={toggleTab === "Final" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs("Final")}>Final Test</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                Admin Dashboard:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <G1OverviewAd /> </div>
                            {/* <div className={toggleTab === "T1" ? "display activeContent" : "display-4 content"}><KnowledgeTest1 /></div>
                            <div className={toggleTab === "T2" ? "display activeContent" : "display-4 content"}><TrafficSigns2 /></div>
                            <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeExam /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><PracticeSignsExam /></div>
                            <div className={toggleTab === "P3" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeandSignsExam /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalTest /></div> */}
                        </div>
                    </div>

                            {/* G */}

                    <div className={editTab === 'G' ? 'row' : 'row content'}>
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview G</NavLink></li>
                                <li className={toggleTab === "T1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T1')}>Knowledge Test #1</NavLink></li>
                                <li className={toggleTab === "T2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T2')}>Traffic Signs #2</NavLink></li>
                                <li className={toggleTab === "P1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P1')}>Practice Knowledge Exam</NavLink></li>
                                <li className={toggleTab === "P2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P2')}>Practice Signs Exam</NavLink></li>
                                <li className={toggleTab === "P3" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P3')}>Practice Knowledge+Signs Exam</NavLink></li>
                                <li className={toggleTab === "Final" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs("Final")}>Final Test</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                Admin Dashboard:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <G1OverviewAd /> </div>
                            {/* <div className={toggleTab === "T1" ? "display activeContent" : "display-4 content"}><KnowledgeTest1 /></div>
                            <div className={toggleTab === "T2" ? "display activeContent" : "display-4 content"}><TrafficSigns2 /></div>
                            <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeExam /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><PracticeSignsExam /></div>
                            <div className={toggleTab === "P3" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeandSignsExam /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalTest /></div> */}
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default AdminDashboard