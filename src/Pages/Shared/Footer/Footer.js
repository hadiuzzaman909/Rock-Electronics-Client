import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <div className='mt-5 bg-secondary bg-gradient text-light'>
            <div className='container'>
                <div className='row d-flex justify-content-between'>

                    <div className='col-6 mt-5'>
                        <div className=''>
                            <p className='mx-2'>Connect with us</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <a href='#' className='mx-2 '><i class='fab fa-facebook-f text-light'></i></a>
                            <a href='#' className='mx-2'><i class='fab fa-twitter text-light'></i></a>
                            <a href='#' className='mx-2'><i class='fab fa-instagram text-light'></i></a>
                            <a href='#' className='mx-2'><i class='fab fa-linkedin-in text-light'></i></a>
                        </div>
                    </div>
                    <div className='col-3 mt-5 text-light'>
                        <ul className=''>
                            <li>
                                <a href='#' class="text-decoration-none text-light">FAQ</a>
                            </li>
                            <li>
                                <a href='#' class="text-decoration-none text-light">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href='#' class="text-decoration-none text-light">Privacy Policy</a>
                            </li>

                            <li>
                                <a href='#' class="text-decoration-none text-light">Get Help</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-3 mt-5'>
                        <ul >
                            <li>
                                <a href='#' class="text-decoration-none text-light">About us</a>
                            </li>
                            <li>
                                <a href='#' class="text-decoration-none text-light">Contact</a>
                            </li>
                            <li>
                                <a href='#' class="text-decoration-none text-light">Jobs</a>
                            </li>

                            <li>
                                <a href='#' class="text-decoration-none text-light">Press Kit</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                <p className='text-center mt-4 copy-right mb-0'><small>Copyright &copy; {year}. All right reserved.</small></p>
            </div>
        </div>

    );
};

export default Footer;