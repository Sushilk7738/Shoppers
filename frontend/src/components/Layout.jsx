import { Link } from "react-router-dom"

const Layout = ({children})=>{
    const menus = [
        {
            label : "Home",
            href: "/"
        },
        {
            label : "Products",
            href: "/products"
        },
        {
            label : "Category",
            href: "/category"
        },
        {
            label : "Contact us",
            href: "/contact-us"
        },
    ]
    return(
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white">
                <div className="w-10/12 mx-auto flex items-center justify-between">
                    <img
                        src="/logo.png" 
                        className="w-[180px]"    
                    />
                    <ul className="flex gap-6 items-center ">
                        {
                            menus.map((item, index)=>(
                                <li key={index}>
                                    <Link 
                                        to={item.href}
                                        className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                                    >{item.label}</Link>
                                </li>
                            ))
                        }
                        <Link
                            className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                            to="/login"
                        >Login</Link>
                        
                        <Link
                            className="bg-cyan-600 text-white block py-3 px-10 text-md font-semibold text-center hover:bg-[#4776af] hover:text-white"
                            to="/signup"
                        >Signup</Link>
                    </ul>
                </div>
            </nav>

            <div>
                {children}
            </div>
                        
            <footer className="bg-cyan-500 py-16">
                <div className="w-10/12 mx-auto grid grid-cols-4 ">
                
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-2 text-slate-50">
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
                        <ul className="space-y-2 text-slate-50">
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Youtube</Link></li>
                            <li><Link to="/">Instagram</Link></li>
                            <li><Link to="/">LinkedIn</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                        </ul>
                    </div>

                    <div className="pr-8">
                        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
                        <p className="text-slate-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
                        <img
                            src="/logo1.png" 
                            className="w-[100px]"    
                        />
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Contact us</h1>
                        <form className="space-y-4">
                            <input
                                required
                                name="fullname"
                                className="bg-white w-full rounded p-3"
                                placeholder="Your Name"
                            />
                            <input
                                required
                                type="email"
                                name="email"
                                className="bg-white w-full rounded p-3"
                                placeholder="Enter email id"
                            />
                            <textarea
                                required
                                name="message"
                                className="bg-white w-full rounded p-3"
                                placeholder="Message"
                                rows={3}
                            />

                            <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Layout