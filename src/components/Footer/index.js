import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/assets/fb.png" alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/assets/tw.png" alt="Logo Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/assets/ig.png" alt="Logo Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/assets/logo.png" alt="Logo Alura" />
      </section>
      <section>
        <p>Desenvolvido por Alura</p>
      </section>
    </footer>
  );
};

export default Footer;
