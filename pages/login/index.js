import Link from "next/link";
import { useState } from "react";

// our-domain.com/login
const LoginPage = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
    }
    return <div className="hero min-h-screen bg-base-100 ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginHandler} className="card-body">
                <h1 className="text-3xl font-bold">Login here</h1>
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
                        <Link href="/register" className="label-text-alt link link-hover">New here? Register Now</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" value='submit' className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
};

export default LoginPage;