const Navbar = () => {
    return (
        <div className="flex relative justify-center w-screen">
            <div className="absolute bottom-0 left-0 z-10 w-1/4 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            <div className="flex justify-between w-full max-w-4xl">
                <div className="my-4 mx-4 font-serif text-4xl font-black text-orange-600">MG</div>
                <div className="hidden md:flex">
                    <div className="my-6 mx-3 text-lg transition ease-in-out delay-100 cursor-pointer hover:text-yellow-800">
                        Home
                    </div>
                    <div className="my-6 mx-3 text-lg transition ease-in-out delay-100 cursor-pointer hover:text-yellow-800">
                        Projects
                    </div>
                    <div className="my-6 mx-3 text-lg transition ease-in-out delay-100 cursor-pointer hover:text-yellow-800">
                        Contact Us
                    </div>
                    <div className="flex justify-center content-center items-center px-5 my-4 mx-2 text-lg font-black text-white bg-orange-600 rounded border transition ease-in-out delay-100 cursor-pointer hover:bg-white hover:text-yellow-800">
                        Sign In
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
