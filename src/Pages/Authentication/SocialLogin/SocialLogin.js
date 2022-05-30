import React from 'react';
import google from '../../../Images/Social/google.png';
import github from '../../../Images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error2) {

        errorElement = <p className='text-danger'>Error: {error?.message} {error2?.message}</p>

    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if (loading || loading2) {
        return <Loading></Loading>
    }

    if (user || user2) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='mb-5 mt-3'>
                <p className='text-center'>Sign In With Another Account</p>

                <div className=' d-flex'>
                    <div className='social-div'>
                        <button onClick={() => signInWithGoogle()} className='btn btn-light   d-block mx-auto  github-button '>
                            <img className='' style={{ width: '40px' }} src={google} alt='' />
                            
                        </button>
                    </div>
                    <div>
                        <button onClick={() => signInWithGithub()} className='btn btn-light d-block mx-auto  github-button '>
                            <img className='mx-auto' style={{ width: '40px' }} src={github} alt='' />
                        </button>
                        <p className='text-center'>{errorElement}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SocialLogin;