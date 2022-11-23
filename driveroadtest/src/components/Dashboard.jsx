import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-4 my-5 ">
                        <h5 className="display-6"> Username </h5>

                        <i className="fa fa-star">Mock Tests</i>
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-2">Dashboard</h1>
                        <hr className='w-100' />
                        <table>
                            <th>S.No.</th>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard