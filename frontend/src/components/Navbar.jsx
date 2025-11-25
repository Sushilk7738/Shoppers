const Navbar = ()=>{
    return(
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="">
                    <img src="/logo.png" alt="logo" className="w-8 h-8 object-contain"/>
                    <h1 className="text-xl font-semibold">Shoppers</h1>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;