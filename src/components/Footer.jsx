const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: contacto@ejemplo.com</p>
          <p>Teléfono: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <p>
            <a href="https://facebook.com/tuempresa">Facebook</a>
          </p>
          <p>
            <a href="https://twitter.com/tuempresa">Twitter</a>
          </p>
          <p>
            <a href="https://instagram.com/tuempresa">Instagram</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Información Legal</h3>
          <p>
            <a href="/terminos-y-condiciones">Términos y Condiciones</a>
          </p>
          <p>
            <a href="/politica-privacidad">Política de Privacidad</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
