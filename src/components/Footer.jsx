

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5>Contacto</h5>
            <p>Email: contacto@ejemplo.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Redes Sociales</h5>
            <p><a href="https://facebook.com/tuempresa" className="text-light text-decoration-none">Facebook</a></p>
            <p><a href="https://twitter.com/tuempresa" className="text-light text-decoration-none">Twitter</a></p>
            <p><a href="https://instagram.com/tuempresa" className="text-light text-decoration-none">Instagram</a></p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Información Legal</h5>
            <p><a href="/terminos-y-condiciones" className="text-light text-decoration-none">Términos y Condiciones</a></p>
            <p><a href="/politica-privacidad" className="text-light text-decoration-none">Política de Privacidad</a></p>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
