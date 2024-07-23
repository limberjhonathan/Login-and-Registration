import React from 'react'

export default function LoginRegister() {
    return (
        <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
            {/* -----------------------Register------------------------ */}
            <div className='col-md-6 d-flex justify-content-center'>
                <form>
                    <div className='header-text mb-4'>
                        <h1>Create Account</h1>
                    </div>
                    <div className='input-group mb-3'>
                        <input type='text' placeholder='Name' className='form-control form-control-lg bg-lignt fs-6'></input>
                    </div>
                    <div className='input-group mb-3'>
                        <input type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6'></input>
                    </div>
                    <div className='input-group mb-3'>
                        <input type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6'></input>
                    </div>
                    <div className='input-group mb-3 justify-content-center'>
                        <button className='btn border-white text-white w-50 fs-6'>Register</button>
                    </div>
                </form>
            </div>
            {/* -----------------------Login Form------------------------ */}
            <div className='col-md-6 right-box'>
                <form>
                    <div className='header-text mb-4'>
                        <h1>Sign In</h1>
                    </div>
                    <div className='input-group mb-3'>
                        <input type='email' placeholder='Email' className='form-control form-control-lg bg-light fs-6'></input>
                    </div>
                    <div className='input-group mb-3'>
                        <input type='password' placeholder='Password' className='form-control form-control-lg bg-light fs-6'></input>
                    </div>
                    <div className='input-group mb-5 d-flex justify-content-between'>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' id='formcheck'/>
                            <label htmlFor='formcheck' className='form-check-label text-secondary'><small>Remember me</small></label>
                        </div>
                        <div className='forgot'>
                            <small><a href='#'>Forgot password?</a></small>
                        </div>
                    </div>
                    <div className='input-group mb-3 justify-content-center'>
                        <button className='btn border-white text-white w-50 fs-6'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}