const Navbar = () => {
    return (

        <nav className="navbar">

            <h1><a>The Converter App</a></h1>
            <div className="links" >

                <a href="/miles-km"><button>Miles to KM</button></a>
                <a href="/lbs-kg"><button>LBS-KG</button></a>
                <a href="/dollar-rand"><button>Dollar-Rand</button></a>
                <a href="/eth-zar"><button>ETH-Zar</button></a>

            </div>
        </nav>
    )
}

export default Navbar;