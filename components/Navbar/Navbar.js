import Link from "next/link";

const Navbar = () => {
    return <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Ecom-Dash</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/new-product'>Add Product</Link></li>
            </ul>
        </div>
    </div>

};

export default Navbar;