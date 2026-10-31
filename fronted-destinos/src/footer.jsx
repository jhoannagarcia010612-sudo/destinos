function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-auto w-100">
      
      <section className="d-flex justify-content-center justify-content-lg-between p-4 bg-success text-white">
        <div className="me-5 d-none d-lg-block">
          <span>Descubre todo lo que tenemos para ofrecerte.</span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Chontaduro Tours
              </h6>
              <p>
                Su experiencia en las mejores manos.
              </p>
            </div>

  
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Destinos
              </h6>
              <button type="button" class="btn btn-link theme-success">
              <p><a href="#!" className="text-muted text-decoration-none">Región Orinoquía</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Región Amazonía</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Región Caribe</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Región Andina</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Región Insular</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Región Pacífica</a></p>
              </button>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Enlaces 
              </h6>
              <button type="button" class="btn btn-link theme-success">
              <p><a href="#!" className="text-muted text-decoration-none">Tu cuenta</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Afiliado</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Tarifas de vuelo</a></p>
              <p><a href="#!" className="text-muted text-decoration-none">Ayuda</a></p>
              </button>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contacto
              </h6>
            <button type="button" class="btn btn-link theme-success">
              <p><i className="fas fa-home me-3"></i> Bogotá, Colombia</p>
              <p><i className="fas fa-envelope me-3"></i> info@chontatours.com</p>
              <p><i className="fas fa-phone me-3"></i> + 57 300 123 4567</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center">
        <p className="mb-1 fw-bold fs-5">
          © 2026 Chontaduto Tours
        </p>

      </div>
    </footer>
  );
}

export default Footer;