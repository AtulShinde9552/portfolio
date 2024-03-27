import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark z-1 position-absolute w-100" style={{backgroundColor:'#00000080'}}>
                <div className="container">
                    <Link className="navbar-brand fw-bold fst-italic fs-3" to="/">A<span className="text-danger">S</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-end navbar-collapse  rounded" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-2">
                            <Link  className="nav-link text-light text-end" aria-current="page" to="/">Home</Link>
                            <a  className="nav-link text-light text-end " href="#work-samples" >Portfolio</a>
                            <a  className="nav-link text-light text-end" href="#skills">Skills</a>
                            <a  className="nav-link text-light text-end" href="#contact">Contact</a>
                        </div>
                    </div>   
                </div>
            </nav>
        </>
    )
}

export default Navbar
