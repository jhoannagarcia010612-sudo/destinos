
export default function Hero () {
    return (
        <div className="container formulario">
            <header className="py-5 my-auto">
                <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                        <h1 className="display-5 fw-bolder text-dark mb-3">
                            Agenda tu próximo viaje
                        </h1>
                        <p className="lead fw-normal text-white mb-4">
                            Descubre los increíbles y maravillosos lugares que te ofrece nuestro país. ¿Que esperas para disfrutar de Colombia?
                        </p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                        <a className="btn btn-primary btn-lg px-4 me-sm-3 fw-bold" href="#get-started">
                            Agendar Viaje
                        </a>
                        <a className="btn btn-outline-warning btn-lg px-4" href="#learn-more">
                            Recomendaciones
                        </a>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                    <img
                        className="img-fluid rounded-3 my-5 shadow "
                        src="https://caracol.com.co/resizer/0s_3CzCWBOh7-Rfq-pLqMFVIZ0o=/arc-photo-prisaradioco/arc2-prod/public/H474JCS2IFC3THCGSHYXHJVYZE.jpg"
                        alt="Hero banner"
                    />
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}


  