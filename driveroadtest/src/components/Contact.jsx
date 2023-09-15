import React, {useState} from 'react';

const Contact = () => {


    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });

    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value });
    }

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        //Object Destructuring
        // Store object data into variables
        const { name, email, message } = msg;
        try {
            //It is submitted on PORT 3000
            // Which is Front end but we need to 
            // Submit it on back end which is PORT 3001.
            // So we need Proxy
            const res = await fetch('/message/message', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            if(res.status === 400 || !res){
                window.alert("Message not sent:(")
            }else{
                //You need to restart the server to work with Proxy.
                window.alert("Message Sent:)");   
                setMsg({
                    name: "",
                    email: "",
                    message:""
                })             
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact us</h3>
                            <h1 className="display-6 text-center mb-4">Have some <b>Feedback/Questions?</b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 my-auto">
                            <img src="./assets/contact.png" alt="Contact" className='w-75' />
                        </div>
                        <div className="col md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="John Smith" name="name" value={msg.name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={msg.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="message" value={msg.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className='btn btn-outline-primary px-3'> Send Message
                                    <i className="fa fa-paper-plane ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact