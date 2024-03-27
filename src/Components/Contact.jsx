import { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const messageRef = useRef(null);
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState({ message: '', type: '' });

    useEffect(() => emailjs.init("UPKiX0DNl53drZO_I"), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_pn6stf3";
        const templateId = "template_jvtbozr";
        
        try {
            // setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                message: messageRef.current.value,
                recipient: emailRef.current.value
            });
            setAlert(true);
            setMessage({ message: 'Email sent successfully', type: 'success' });
            
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        } catch (error) {
            console.error('Error sending email:', error);
            setAlert(true);
            setMessage({ message: 'Failed to send email', type: 'danger' });
        } finally {
            // setLoading(false);
        }
    }

    return (
        <div className='d-flex flex-column p-4' id='contact'>
            <div>
                <h1 className='text-warning text-center fw-bold'>Contact</h1>
            </div>
            <div className="container row text-light py-4 m-auto">
                <div className="col-md-6 ">
                    <div className='my-3'>
                        <h2 className='text-danger text-center fw-bold fst-italic'>Contact Details</h2>
                    </div>
                    <div className='contact-icon d-flex ' style={{ margin: '30px 0' }} >
                        <FaLocationDot size={25} color='lightblue' className='mx-4' />
                        <span className='fs-5'>Pune - Maharashtra</span>
                    </div>
                    <div className='contact-icon d-flex ' style={{ margin: '40px 0' }}>
                        <MdEmail size={25} color='red' className='mx-4' />
                        <span className='fs-5'>atul387659@gmail.com</span>
                    </div>
                    <div className='contact-icon d-flex ' style={{ margin: '30px 0' }}>
                        <FaPhone size={25} color='green' className=' mx-4' />
                        <span className='fs-5'>+91 8329907500</span>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className='my-3'>
                        <h2 className='text-danger text-center fw-bold fst-italic'>Send Message</h2>
                    </div>
                    {alert && <h6 className={`text-${message.type} text-center my-3`}>{message.message}</h6>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3 ">
                            <input required ref={nameRef} type="text" name='name' className="form-control text-light bg-transparent" id="floatingInput" placeholder="Name" />
                            <label htmlFor="floatingInput" className='bg-transparent'>Your Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input ref={emailRef} type="email" placeholder= "Enter your email" className="form-control text-light bg-transparent" id="floatingPassword"  />
                            <label htmlFor="floatingPassword">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea ref={messageRef}  placeholder="Leave a message here"  className="form-control text-light bg-transparent" rows={4} id="floatingTextarea" />
                            <label htmlFor="floatingTextarea" >Message</label>
                        </div>
                        <div className="d-flex">
                            <button type='submit' className='btn btn-danger mx-auto'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
