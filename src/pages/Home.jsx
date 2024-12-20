export const Home = () => {
  return (
    <div>
      <header>
        <div class="container">
          <div class="header-box">
            <a href="index.html" class="header-logo">
              <img src="/icon/kub.svg" alt="kub" />
              <span>Abito</span>
            </a>
            <div class="header-controls">
              <button class="btn btn-outline">Вход и регистрация</button>
              <button class="btn btn-primary">Подать объявление</button>
            </div>

            <div class="header-burger">
              <img src="/icon/Menu1.svg" alt="Menu1" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="search">
          <div class="container">
            <div class="search-box">
              <input type="text" />
              <button class="btn btn-primary search-btn">
                <img class="search-btn_icon" src="/icon/lupa.png" alt="lupa" />
                <span class="search-btn_text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <section class="content">
          <div class="container">
            <div class="content-box">
              <div class="content-main">
                <h2 class="content-main_title">Рекомендации для Вас</h2>
                <div class="content-main_list">
                  {/* <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="./img/plenka.png"
                    alt="plenka"
                  />
                  <h5 class="content-main_list-item_title">
                    Пвх материал 2й сорт
                  </h5>
                  <strong class="content-main_list-item_price">170 ₽</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >Казань, р-н Вахитовский</span
                    >
                    <span class="content-main_list-item_desc"
                      >10 июля 11:39</span
                    >
                  </div>
                </a>
                <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="./img/plenka.png"
                    alt="plenka"
                  />
                  <h5 class="content-main_list-item_title">
                    Пвх материал 2й сорт
                  </h5>
                  <strong class="content-main_list-item_price">170 ₽</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >Казань, р-н Вахитовский</span
                    >
                    <span class="content-main_list-item_desc"
                      >10 июля 11:39</span
                    >
                  </div>
                </a>
                <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="./img/plenka.png"
                    alt="plenka"
                  />
                  <h5 class="content-main_list-item_title">
                    Пвх материал 2й сорт
                  </h5>
                  <strong class="content-main_list-item_price">170 ₽</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >Казань, р-н Вахитовский</span
                    >
                    <span class="content-main_list-item_desc"
                      >10 июля 11:39</span
                    >
                  </div>
                </a>
                <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="./img/plenka.png"
                    alt="plenka"
                  />
                  <h5 class="content-main_list-item_title">
                    Пвх материал 2й сорт
                  </h5>
                  <strong class="content-main_list-item_price">170 ₽</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >Казань, р-н Вахитовский</span
                    >
                    <span class="content-main_list-item_desc"
                      >10 июля 11:39</span
                    >
                  </div>
                </a>
                <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="./img/plenka.png"
                    alt="plenka"
                  />
                  <h5 class="content-main_list-item_title">
                    Пвх материал 2й сорт
                  </h5>
                  <strong class="content-main_list-item_price">170 ₽</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >Казань, р-н Вахитовский</span
                    >
                    <span class="content-main_list-item_desc"
                      >10 июля 11:39</span
                    >
                  </div>
                </a>
                <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="./img/plenka.png"
                    alt="plenka"
                  />
                  <h5 class="content-main_list-item_title">
                    Пвх материал 2й сорт
                  </h5>
                  <strong class="content-main_list-item_price">170 ₽</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >Казань, р-н Вахитовский</span
                    >
                    <span class="content-main_list-item_desc"
                      >10 июля 11:39</span
                    >
                  </div>
                </a> -->*/}
                </div>
              </div>
              <div class="content-side">
                <h3 class="content-side_title">Сервисы и услуги</h3>
                <div class="content-side_box">
                  <div class="content-side_list">
                    <div class="content-side_list-item">
                      <img
                        class="content-side_list-img"
                        src="./icon/gruz.svg"
                        alt="gruz"
                      />
                      <h5 class="content-side_list-title">Доставка</h5>
                      <p class="content-side_list-text">
                        Проверка при получении и возможность бесплатно вернуть
                        товар
                      </p>
                    </div>
                    <div class="content-side_list-item">
                      <img
                        class="content-side_list-img"
                        src="./icon/avto.png"
                        alt="avto"
                      />
                      <h5 class="content-side_list-title">Автотека</h5>
                      <p class="content-side_list-text">
                        Отчёт с историей авто: пробег, владельцы, сведения о
                        залоге, ДТП и ремонтах
                      </p>
                    </div>
                    <div class="content-side_list-item">
                      <img
                        class="content-side_list-img"
                        src="./icon/love1.svg"
                        alt="love1"
                      />
                      <h5 class="content-side_list-title">
                        Онлайн-бронирование жилья
                      </h5>
                      <p class="content-side_list-text">
                        Посуточная аренда квартир и домов: большой выбор
                        вариантов для поездок по России
                      </p>
                    </div>
                  </div>
                  <div class="content-side_footer">
                    <p class="content-side_footer-item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a class="content-side_footer-item" href="index.html">
                      Политика конфиденциальности
                    </a>
                    <a class="content-side_footer-item" href="index.html">
                      Обработка данных
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
