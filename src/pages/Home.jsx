import { Card } from "../components/Card/Card";
import { Header } from "../components/Header";
import { cardArray } from "../constants";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" />
              <button className="btn btn-primary search-btn">
                <img
                  className="search-btn_icon"
                  src="/icon/lupa.png"
                  alt="lupa"
                />
                <span className="search-btn_text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main_title">Рекомендации для Вас</h2>
                <div className="content-main_list">
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
                      title={card.title}
                      price={card.price}
                      address={card.address}
                      date={card.date}
                      img={card.img}
                    />
                  ))}
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side_title">Сервисы и услуги</h3>
                <div className="content-side_box">
                  <div className="content-side_list">
                    <div className="content-side_list-item">
                      <img
                        className="content-side_list-img"
                        src="./icon/gruz.svg"
                        alt="gruz"
                      />
                      <h5 className="content-side_list-title">Доставка</h5>
                      <p className="content-side_list-text">
                        Проверка при получении и возможность бесплатно вернуть
                        товар
                      </p>
                    </div>
                    <div className="content-side_list-item">
                      <img
                        className="content-side_list-img"
                        src="./icon/avto.png"
                        alt="avto"
                      />
                      <h5 className="content-side_list-title">Автотека</h5>
                      <p className="content-side_list-text">
                        Отчёт с историей авто: пробег, владельцы, сведения о
                        залоге, ДТП и ремонтах
                      </p>
                    </div>
                    <div className="content-side_list-item">
                      <img
                        className="content-side_list-img"
                        src="./icon/love1.svg"
                        alt="love1"
                      />
                      <h5 className="content-side_list-title">
                        Онлайн-бронирование жилья
                      </h5>
                      <p className="content-side_list-text">
                        Посуточная аренда квартир и домов: большой выбор
                        вариантов для поездок по России
                      </p>
                    </div>
                  </div>
                  <div className="content-side_footer">
                    <p className="content-side_footer-item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a className="content-side_footer-item" href="#!">
                      Политика конфиденциальности
                    </a>
                    <a className="content-side_footer-item" href="#!">
                      Обработка данных
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
