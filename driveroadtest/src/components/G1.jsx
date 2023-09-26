import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../DropdownCss.css';
import Overview from './G1Components/Overview';
import KnowledgeTest1 from './G1Components/KnowledgeTest1';
import TrafficSigns2 from './G1Components/TrafficSigns2';
import PracticeKnowledgeExam from './G1Components/PracticeKnowledgeExam';
import PracticeSignsExam from './G1Components/PracticeSignsExam';
import PracticeExam from './G1Components/PracticeExam';
import FinalTest from './G1Components/FinalTest';

const G1 = ({ auth }) => {

    const [toggleTab, setToggleTab] = useState('Overview');

    const tabs = (name) => {
        setToggleTab(name);
    }

    const LoginRequired = () => {
        alert('Login Required to access!');
    }

    return (
        <div>
            <section id='G1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-5">
                            <ul className='mt-5'>
                                <li className={toggleTab === "Overview" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('Overview')}>Overview</NavLink></li>
                                <li className={toggleTab === "T1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T1')}>Knowledge Test #1</NavLink></li>
                                <li className={toggleTab === "T2" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('T2')}>Traffic Signs #2</NavLink></li>
                                <li className={toggleTab === "P1" ? "display py-1 activeTab" : "display py-1"}>
                                    <NavLink onClick={() => tabs('P1')}>Practice Knowledge Exam</NavLink></li>
                                {
                                    auth ?
                                        (<> <li className={toggleTab === "P2" ? "display py-1 activeTab" : "display py-1"}>
                                            <NavLink onClick={LoginRequired}><i className="fa fa-lock" style={{ 'color': 'red' }}> Practice Signs Exam</i></NavLink></li>
                                            <li className={toggleTab === "P3" ? "display py-1 activeTab" : "display py-1"}>
                                                <NavLink onClick={LoginRequired}><i className="fa fa-lock" style={{ 'color': 'red' }}> Practice Knowledge+Signs Exam</i></NavLink></li>
                                            <li className={toggleTab === "Final" ? "display py-1 activeTab" : "display py-1"}>
                                                <NavLink onClick={LoginRequired}><i className="fa fa-lock" style={{ 'color': 'red' }} > Final Test</i></NavLink></li>
                                        </>)
                                        :
                                        (<>
                                            <li className={toggleTab === "P2" ? "display py-1 activeTab" : "display py-1"}>
                                                <NavLink onClick={() => tabs('P2')}> Practice Signs Exam</NavLink></li>
                                            <li className={toggleTab === "P3" ? "display py-1 activeTab" : "display py-1"}>
                                                <NavLink onClick={() => tabs('P3')}>Practice Knowledge+Signs Exam</NavLink></li>
                                            <li className={toggleTab === "Final" ? "display py-1 activeTab" : "display py-1"}>
                                                <NavLink onClick={() => tabs("Final")}>Finally before you go</NavLink></li>
                                        </>)
                                }
                            </ul>
                        </div>
                        <div className="col-md-8 my-5">
                            <div className="title h6">
                                G1:/
                            </div>
                            <div className={toggleTab === "Overview" ? "display activeContent" : "display-4 content"}> <Overview /> </div>
                            <div className={toggleTab === "T1" ? "display activeContent" : "display-4 content"}><KnowledgeTest1 /></div>
                            <div className={toggleTab === "T2" ? "display activeContent" : "display-4 content"}><TrafficSigns2 /></div>
                            <div className={toggleTab === "P1" ? "display activeContent" : "display-4 content"}><PracticeKnowledgeExam /></div>
                            <div className={toggleTab === "P2" ? "display activeContent" : "display-4 content"}><PracticeSignsExam /></div>
                            <div className={toggleTab === "P3" ? "display activeContent" : "display-4 content"}><PracticeExam /></div>
                            <div className={toggleTab === "Final" ? "display activeContent" : "display-4 content"}><FinalTest /></div>

                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default G1