// our-domain.com/register

import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const registerHandler = e => {
        e.preventDefault();

    }
    return (
        <div className="hero min-h-screen bg-base-100 ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={registerHandler} className="card-body">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Full Name</span>
                        </label>
                        <input type="text" required placeholder="Full Name" onChange={e => setName(e.target.value)} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone Number</span>
                        </label>
                        <input type="text" required placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" required placeholder="password" onChange={e => setPhoneNumber(e.target.value)} className="input input-bordered" />
                        <label className="label">
                            <Link href="/login" className="label-text-alt link link-hover">Already have an Account? Login</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" value='submit' className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;