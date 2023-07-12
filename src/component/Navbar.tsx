function Navlink() {
    return (
        <div className="navbar bg-base-100 flex justify-between ">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Steven Rumanto</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Portofolio</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navlink;