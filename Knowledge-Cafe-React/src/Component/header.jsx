

const Header = () => {
    return (
        <header>
            <div className="navbar bg-base-100 my-4s">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Knowledge Cafe</a>
                </div>
                <div className="flex-none gap-2">
                  
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>



        </header>
    );
};

export default Header;