
export default function Navbar () {
    return (
        <div className="container formulario">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
                <div className="container">
                <a className="navbar-brand fw-bold flex-row" href="#home">
                    <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                        Explora Colombia
                     
                </a>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">
                        Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">
                            Destinos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            ¿Quienes Somos?
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#contact">
                        Contacto
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}
