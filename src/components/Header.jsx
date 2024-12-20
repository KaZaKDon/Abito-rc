import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-box">
          <a href="#!" className="header-logo">
            <img src="/icon/kub.svg" alt="kub" />
            <span>Abito</span>
          </a>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="header-burger">
            <img src="/icon/Menu1.svg" alt="Menu1" />
          </div>
        </div>
      </div>
    </header>
  );
};
