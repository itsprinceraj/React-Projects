
export const Footer = () => {
  return (
    <div className="footer-parent">
      <footer className="py-3 ">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item ">
            <a href="#" className={` nav-link px-2 text-white link `}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white link">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-white link">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};
