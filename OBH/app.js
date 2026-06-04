const icons = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  map: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z"/>',
  camera: '<path d="m15 10 4.55-2.28A1 1 0 0 1 21 8.62v6.76a1 1 0 0 1-1.45.9L15 14"/><rect x="3" y="6" width="12" height="12" rx="2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 10.01-3-3"/>',
  cloud: '<path d="M17.5 19H8a6 6 0 1 1 1.1-11.9A7 7 0 0 1 22 11.8 4.5 4.5 0 0 1 17.5 19Z"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  wifi: '<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/>',
  briefcase: '<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 12h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/><path d="m5 3 .8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
};

const productConfig = {
  segments: [
    {
      id: "ozon",
      label: "Ozon",
      hint: "Комплекты учитывают требования Ozon к архиву и контролю зоны выдачи заказов.",
      tariffs: [
        {
          id: "ozon-start",
          title: "ПВЗ Старт",
          subtitle: "Малый пункт выдачи",
          price: 990,
          description: "2 камеры · архив 30 дней",
          features: ["2 IP-камеры в комплекте", "Архив 30 дней", "Онлайн-доступ из ЛК", "Уведомления о событиях"],
        },
        {
          id: "ozon-standard",
          title: "ПВЗ Стандарт",
          subtitle: "Средний пункт выдачи",
          price: 1490,
          description: "4 камеры · архив 45 дней",
          popular: true,
          features: ["4 IP-камеры в комплекте", "Архив 45 дней", "Монтаж без доплаты", "Контроль кассовой зоны", "Поддержка 24/7"],
        },
        {
          id: "ozon-pro",
          title: "ПВЗ Про",
          subtitle: "Крупный пункт выдачи",
          price: 2290,
          description: "6 камер · архив 90 дней",
          features: ["6 IP-камер в комплекте", "Архив 90 дней", "Резерв связи на объекте", "Расширенные уведомления", "Персональная настройка"],
        },
      ],
    },
    {
      id: "wb",
      label: "Wildberries",
      hint: "Тарифы подходят для ПВЗ Wildberries с хранением записей от 30 до 90 дней.",
      tariffs: [
        {
          id: "wb-start",
          title: "WB Базовый",
          subtitle: "ПВЗ до 45 м²",
          price: 1090,
          description: "2 камеры · архив 30 дней",
          features: ["2 камеры для входа и зоны выдачи", "Архив 30 дней", "Доступ с телефона", "Быстрая замена оборудования"],
        },
        {
          id: "wb-standard",
          title: "WB Оптимальный",
          subtitle: "ПВЗ до 90 м²",
          price: 1590,
          description: "4 камеры · архив 60 дней",
          popular: true,
          features: ["4 камеры с ночным режимом", "Архив 60 дней", "Бесплатный монтаж", "Отчет по активности", "Поддержка регламента ПВЗ"],
        },
        {
          id: "wb-pro",
          title: "WB Расширенный",
          subtitle: "ПВЗ от 90 м²",
          price: 2390,
          description: "6 камер · архив 90 дней",
          features: ["6 камер и облачное хранение", "Архив 90 дней", "Контроль склада", "Умные уведомления", "Единый счет за сервис"],
        },
      ],
    },
    {
      id: "ym",
      label: "Яндекс Маркет",
      hint: "Решения помогают соблюдать требования к зоне приема, хранения и выдачи заказов.",
      tariffs: [
        {
          id: "ym-start",
          title: "Маркет Старт",
          subtitle: "Компактный ПВЗ",
          price: 990,
          description: "2 камеры · архив 30 дней",
          features: ["2 камеры на ключевые зоны", "Архив 30 дней", "Доступ через браузер", "Установка по заявке"],
        },
        {
          id: "ym-standard",
          title: "Маркет Баланс",
          subtitle: "ПВЗ среднего формата",
          price: 1690,
          description: "4 камеры · архив 60 дней",
          popular: true,
          features: ["4 камеры в комплекте", "Архив 60 дней", "Монтаж за 5 рабочих дней", "Контроль очередей", "Интернет МегаФон опционально"],
        },
        {
          id: "ym-pro",
          title: "Маркет Максимум",
          subtitle: "Крупный ПВЗ",
          price: 2490,
          description: "8 камер · архив 90 дней",
          features: ["8 камер для всех зон", "Архив 90 дней", "Поддержка нескольких ролей", "Расширенная аналитика", "Настройка под объект"],
        },
      ],
    },
    {
      id: "small",
      label: "Малый бизнес",
      hint: "Тарифы для магазинов, офисов, кафе и складов с установкой оборудования под ключ.",
      tariffs: [
        {
          id: "small-50",
          title: "До 50 м²",
          subtitle: "Магазин у дома или небольшой офис",
          price: 790,
          description: "1 камера · архив 14 дней",
          infoTags: ["кафе", "мини-магазин", "офис"],
          infoDesc: "Подходит для одной входной зоны, кассы или небольшой переговорной.",
          features: ["1 камера в комплекте", "Архив 14 дней", "Просмотр онлайн", "Уведомления о движении"],
        },
        {
          id: "small-150",
          title: "До 150 м²",
          subtitle: "Средний бизнес",
          price: 1390,
          description: "3 камеры · архив 30 дней",
          popular: true,
          infoTags: ["магазин", "кофейня", "шоурум"],
          infoDesc: "Закрывает вход, торговый зал и кассовую зону без локального сервера.",
          features: ["3 камеры в комплекте", "Архив 30 дней", "Бесплатный монтаж", "ИИ-детекция событий", "Доступ для сотрудников"],
        },
        {
          id: "small-300",
          title: "До 300 м²",
          subtitle: "Крупное помещение",
          price: 2190,
          description: "6 камер · архив 60 дней",
          infoTags: ["склад", "офис", "производство"],
          infoDesc: "Для нескольких помещений, склада или объекта с разными зонами доступа.",
          features: ["6 камер с монтажом", "Архив 60 дней", "Контроль персонала", "Отчеты по событиям", "Подбор схемы камер"],
        },
      ],
    },
  ],
};

const organizations = [
  {
    id: "org-1",
    type: "legal",
    inn: "7707083893",
    kpp: "770701001",
    ogrn: "1027700132195",
    name: 'ООО "Северный ПВЗ"',
    city: "Москва",
    director: "Смирнов Андрей Павлович",
    address: "127006, Москва, ул. Долгоруковская, д. 18",
  },
  {
    id: "org-2",
    type: "legal",
    inn: "7812014560",
    kpp: "781201001",
    ogrn: "1047800014259",
    name: 'АО "Ритейл Склад"',
    city: "Санкт-Петербург",
    director: "Кузнецова Ирина Сергеевна",
    address: "190000, Санкт-Петербург, наб. реки Мойки, д. 12",
  },
  {
    id: "org-3",
    type: "ip",
    inn: "165912345678",
    kpp: "не применяется",
    ogrn: "321169000045123",
    name: "ИП Галеев Тимур Ринатович",
    city: "Казань",
    director: "Галеев Тимур Ринатович",
    address: "420111, Казань, ул. Баумана, д. 51",
  },
  {
    id: "org-4",
    type: "legal",
    inn: "6671029384",
    kpp: "667101001",
    ogrn: "1096671002937",
    name: 'ООО "Урал Маркет"',
    city: "Екатеринбург",
    director: "Белов Максим Олегович",
    address: "620014, Екатеринбург, ул. Вайнера, д. 9",
  },
  {
    id: "org-5",
    type: "ip",
    inn: "540612345901",
    kpp: "не применяется",
    ogrn: "320547600080321",
    name: "ИП Морозова Анна Викторовна",
    city: "Новосибирск",
    director: "Морозова Анна Викторовна",
    address: "630099, Новосибирск, Красный проспект, д. 22",
  },
  {
    id: "org-6",
    type: "legal",
    inn: "6163098127",
    kpp: "616301001",
    ogrn: "1126195005591",
    name: 'ООО "Дон Логистика"',
    city: "Ростов-на-Дону",
    director: "Лазарев Денис Игоревич",
    address: "344002, Ростов-на-Дону, ул. Большая Садовая, д. 74",
  },
];

const addresses = [
  { id: "addr-1", city: "Москва", text: "Москва, Ленинградский проспект, д. 37, стр. 9" },
  { id: "addr-2", city: "Москва", text: "Москва, ул. Покровка, д. 16" },
  { id: "addr-3", city: "Санкт-Петербург", text: "Санкт-Петербург, Невский проспект, д. 88" },
  { id: "addr-4", city: "Казань", text: "Казань, ул. Петербургская, д. 52" },
  { id: "addr-5", city: "Екатеринбург", text: "Екатеринбург, ул. Малышева, д. 71" },
  { id: "addr-6", city: "Новосибирск", text: "Новосибирск, ул. Ленина, д. 12" },
  { id: "addr-7", city: "Ростов-на-Дону", text: "Ростов-на-Дону, проспект Соколова, д. 18" },
  { id: "addr-8", city: "Нижний Новгород", text: "Нижний Новгород, ул. Большая Покровская, д. 32" },
  { id: "addr-9", city: "Самара", text: "Самара, Московское шоссе, д. 4" },
  { id: "addr-10", city: "Воронеж", text: "Воронеж, проспект Революции, д. 44" },
  { id: "addr-11", city: "Пермь", text: "Пермь, ул. Ленина, д. 68" },
  { id: "addr-12", city: "Краснодар", text: "Краснодар, ул. Красная, д. 124" },
  { id: "addr-13", city: "Уфа", text: "Уфа, проспект Октября, д. 34" },
  { id: "addr-14", city: "Омск", text: "Омск, ул. Гагарина, д. 14" },
  { id: "addr-15", city: "Тюмень", text: "Тюмень, ул. Республики, д. 61" },
];

const faq = [
  ["Какие требования к камерам?", "Поддерживаются IP-камеры с RTSP-потоком и базовой авторизацией. Если камер нет, мы подберем и установим комплект МегаФон."],
  ["Как быстро активируется сервис?", "Облачный архив становится доступен сразу после оплаты. Монтаж оборудования выполняется в течение 5 рабочих дней в городах зоны покрытия."],
  ["Можно ли подключить только облачное хранение без оборудования?", "Да, если у вас уже есть совместимые камеры. Перед оформлением мы уточним, чьи камеры будут использоваться."],
  ["Соответствует ли решение требованиям Wildberries, Ozon, Яндекс Маркет?", "Да, тарифы для маркетплейсов рассчитаны на контроль ключевых зон ПВЗ и хранение архива от 30 до 90 дней."],
  ["Как смотреть видео — где доступны записи?", "Просмотр доступен в личном кабинете и мобильном приложении. Можно смотреть онлайн-трансляции и архивные записи."],
  ["Что с безопасностью данных?", "Данные передаются по защищенному каналу, хранятся в облачной инфраструктуре и доступны только авторизованным пользователям."],
  ["Можно ли масштабировать — добавлять камеры позже?", "Да, камеры можно добавлять по мере роста бизнеса. Менеджер поможет подобрать новый комплект и обновить тариф."],
];

const mountCities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"];

const pickupPoints = [
  {
    id: "pickup-msk",
    title: "ПВЗ МегаФон на Ленинградском",
    address: "Москва, Ленинградский проспект, д. 37, стр. 9",
    schedule: "Пн-Пт 10:00-20:00",
  },
  {
    id: "pickup-spb",
    title: "ПВЗ МегаФон на Невском",
    address: "Санкт-Петербург, Невский проспект, д. 88",
    schedule: "Ежедневно 10:00-21:00",
  },
  {
    id: "pickup-kzn",
    title: "ПВЗ МегаФон на Петербургской",
    address: "Казань, ул. Петербургская, д. 52",
    schedule: "Пн-Сб 09:00-19:00",
  },
];

const state = {
  view: "landing",
  mobileMenu: false,
  activeSegment: "ozon",
  modal: null,
  selectedTariff: null,
  selectedSegment: null,
  lead: {
    phone: "",
    company: "",
    context: "",
    success: false,
  },
  survey: {
    step: 1,
    cameraChoice: "",
    internetChoice: "",
  },
  otp: {
    step: 1,
    phone: "",
    code: ["", "", "", ""],
    success: false,
    timer: 60,
    timerId: null,
  },
  checkout: {
    notice: true,
    activeStep: 1,
    completed: [],
    orgQuery: "",
    selectedOrg: null,
    director: { lastName: "", firstName: "", patronymic: "" },
    verificationMethod: "",
    verificationLoading: false,
    ipVerified: false,
    passport: {
      lastName: "",
      firstName: "",
      patronymic: "",
      birthDate: "",
      birthPlace: "",
      series: "",
      number: "",
      issueDate: "",
      issuedBy: "",
      departmentCode: "",
    },
    deliveryMethod: "",
    addressQuery: "",
    selectedAddress: null,
    pickupPoint: "",
    needInstall: true,
    contactSame: true,
    contact: { lastName: "", firstName: "", patronymic: "", phone: "" },
    email: "",
    orderComplete: false,
    invoiceState: "idle",
  },
};

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");

function icon(name, className = "") {
  return `<span class="icon ${className}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.info}</svg></span>`;
}

function money(value) {
  return `${Number(value).toLocaleString("ru-RU")} руб.`;
}

function getSegment(id = state.activeSegment) {
  return productConfig.segments.find((segment) => segment.id === id) || productConfig.segments[0];
}

function getSelectedTariff() {
  if (state.selectedTariff) return state.selectedTariff;
  const segment = getSegment("ozon");
  return segment.tariffs.find((tariff) => tariff.popular) || segment.tariffs[0];
}

function getSelectedSegmentLabel() {
  if (state.selectedSegment) return getSegment(state.selectedSegment).label;
  return "Ozon";
}

function renderApp() {
  app.innerHTML = state.view === "checkout" ? renderCheckout() : renderLanding();
  modalRoot.innerHTML = renderModal();
  document.body.classList.toggle("modal-open", Boolean(state.modal));
  updateChrome();
  updateDynamicButtons();
}

function renderTopbar() {
  const landingNav = `
    <nav class="nav" aria-label="Навигация">
      <button type="button" data-action="scroll" data-target="tariffs">Тарифы</button>
      <button type="button" data-action="scroll" data-target="how-it-works">Как работает</button>
      <button type="button" data-action="scroll" data-target="faq">FAQ</button>
    </nav>
  `;

  return `
    <header class="topbar" id="topbar">
      <div class="topbar-inner">
        <button class="brand" type="button" data-action="home" aria-label="На главную">
          <span class="brand-mark"></span>
          <span class="brand-copy">
            <strong>МегаФон</strong>
            <span>ПроБизнес · МегаФон ID</span>
          </span>
        </button>
        <div class="location">${icon("map")}Москва</div>
        ${landingNav}
        <div class="top-actions">
          <a class="phone-link" href="tel:88005553535">8 800 555-35-35</a>
          <button class="btn btn-secondary" type="button" data-action="openLead">Оставить заявку</button>
          <button class="mobile-toggle" type="button" data-action="toggleMobile" aria-label="Меню">${icon(state.mobileMenu ? "x" : "menu")}</button>
        </div>
      </div>
      <div class="mobile-panel ${state.mobileMenu ? "open" : ""}">
        <button class="btn btn-secondary" type="button" data-action="scroll" data-target="tariffs">Тарифы</button>
        <button class="btn btn-secondary" type="button" data-action="scroll" data-target="how-it-works">Как работает</button>
        <button class="btn btn-secondary" type="button" data-action="scroll" data-target="faq">FAQ</button>
        <button class="btn btn-primary" type="button" data-action="openLead">${icon("phone")}Оставить заявку</button>
      </div>
    </header>
  `;
}

function renderLanding() {
  return `
    <div class="page">
      ${renderTopbar()}
      <main>
        <section class="hero">
          <div class="container hero-grid">
            <div class="hero-copy">
              <h1>Облачное видеонаблюдение от МегаФон — контроль бизнеса в реальном времени</h1>
              <p class="lead">Стабильная связь, надежное хранение и умная аналитика для ПВЗ, магазинов, складов и офисов.</p>
              <div class="price-anchor">${icon("cloud")}Архив в облаке — от 249 руб. в месяц</div>
              <div class="hero-actions">
                <button class="btn btn-primary" type="button" data-action="scroll" data-target="tariffs">${icon("camera")}Подключить</button>
                <button class="btn btn-secondary" type="button" data-action="openLead">${icon("phone")}Оставить заявку</button>
              </div>
            </div>
            <div class="hero-art" aria-hidden="true">
              <img src="assets/video-hero.png" alt="" />
            </div>
          </div>
        </section>
        <section class="section compact">
          <div class="container benefit-strip">
            ${renderBenefit("shield", "Безопасность и контроль 24/7", "Запись и хранение, уведомления, российское ПО ФСТЭК.")}
            ${renderBenefit("checkCircle", "Соответствие требованиям маркетплейсов", "Подходит для ПВЗ Ozon, Wildberries, Яндекс Маркет.")}
            ${renderBenefit("clock", "Быстрый запуск без IT-специалистов", "Подключение онлайн и настройка через личный кабинет.")}
            ${renderBenefit("cloud", "Экономия и масштабируемость", "От 249 руб. за камеру, безлимитный интернет на объекте.")}
          </div>
        </section>
        ${renderTariffs()}
        ${renderBusinessSegments()}
        ${renderAdvantages()}
        ${renderHowItWorks()}
        ${renderFAQ()}
      </main>
      ${renderFooter()}
      <div class="sticky-lead" id="stickyLead">
        <div>
          <h4>Нужна помощь с подбором тарифа?</h4>
          <p>Оставьте заявку — эксперт свяжется в течение 15 минут</p>
        </div>
        <button class="btn btn-primary" type="button" data-action="openLead">Оставить заявку</button>
      </div>
    </div>
  `;
}

function renderBenefit(iconName, title, text) {
  return `
    <article class="card">
      <span class="icon-box">${icon(iconName)}</span>
      <h4>${title}</h4>
      <p>${text}</p>
    </article>
  `;
}

function renderTariffs() {
  const segment = getSegment();
  return `
    <section class="section" id="tariffs">
      <div class="container">
        <div class="section-title">
          <h2>Тарифы для видеонаблюдения</h2>
          <p class="lead muted">Готовые коробочные решения — выбирайте и подключайте онлайн.</p>
        </div>
        <div class="segment-control" role="tablist" aria-label="Сегменты клиентов">
          ${productConfig.segments
            .map(
              (item) => `
                <button type="button" class="${item.id === state.activeSegment ? "active" : ""}" data-action="switchSegment" data-segment="${item.id}">
                  ${item.label}
                </button>
              `,
            )
            .join("")}
        </div>
        <p class="muted">${segment.hint}</p>
        <div class="tariff-grid" id="tariffGrid">
          ${segment.tariffs.map((tariff) => renderTariffCard(tariff, segment.id)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTariffCard(tariff, segmentId) {
  const isSmall = segmentId === "small";
  const info = isSmall
    ? `
      <div class="info-wrap">
        <button class="icon-btn" type="button" aria-label="Для кого этот тариф">${icon("info")}</button>
        <div class="tooltip">
          <strong>Для кого этот тариф</strong>
          <div class="tag-row">${(tariff.infoTags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <p>${tariff.infoDesc}</p>
        </div>
      </div>
    `
    : "";

  return `
    <article class="card tariff-card ${tariff.popular ? "popular" : ""}">
      <div class="tariff-head">
        <div>
          <div class="badge-slot">${tariff.popular ? '<span class="badge">Популярный</span>' : ""}</div>
          <h3>${tariff.title}</h3>
          <div class="tariff-subtitle">${tariff.subtitle}</div>
        </div>
        ${info}
      </div>
      <div class="price">${money(tariff.price)}<span>/мес</span></div>
      <div class="price-note">за 1 камеру · включая оборудование</div>
      <ul class="feature-list">
        ${tariff.features.map((feature) => `<li>${icon("check")}<span>${feature}</span></li>`).join("")}
      </ul>
      <div class="tariff-actions">
        <button class="btn ${tariff.popular ? "btn-primary" : "btn-secondary"}" type="button" data-action="connectTariff" data-segment="${segmentId}" data-tariff="${tariff.id}">
          Подключить
        </button>
      </div>
    </article>
  `;
}

function renderBusinessSegments() {
  const items = [
    ["building", "ПВЗ", "Для пунктов выдачи маркетплейсов"],
    ["briefcase", "Розничные магазины", "Контроль торгового зала и кассы"],
    ["shield", "Склады", "Безопасность и инвентаризация"],
    ["user", "Офисы", "Дисциплина и контроль рабочего времени"],
  ];
  return `
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Подходит для любого бизнеса</h2>
        </div>
        <div class="business-grid">
          ${items
            .map(
              ([iconName, title, text]) => `
                <article class="card business-card">
                  <span class="icon-box">${icon(iconName)}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAdvantages() {
  const pvz = [
    ["checkCircle", "Соответствие требованиям маркетплейсов", "Поддерживаем актуальные регламенты."],
    ["user", "Бесплатный монтаж", "Выезд специалиста и установка оборудования."],
    ["wifi", "Интеграция с интернетом МегаФон", "Единый провайдер для связи и наблюдения."],
    ["camera", "Контроль персонала", "Записи доступны из личного кабинета."],
    ["shield", "Экономия на охране", "Облачное хранение дешевле локального сервера."],
    ["cloud", "Моментальная активация", "Облако доступно сразу после оплаты."],
  ];

  const small = [
    ["sparkles", "Умная аналитика на ИИ", "Детекция событий и подсчет посетителей."],
    ["clock", "Контроль дисциплины", "Фиксация рабочего времени и нарушений."],
    ["user", "Тайный покупатель на ИИ", "Анализ качества обслуживания."],
    ["lock", "Российское ПО ФСТЭК", "Соответствие требованиям регулятора."],
    ["cloud", "Доступ из ЛК и мобильного приложения", "Просмотр с любого устройства."],
    ["briefcase", "Решение под ключ", "Подбор камер, монтаж и настройка."],
  ];

  return `
    <section class="section" id="advantages">
      <div class="container split-features">
        ${renderFeatureBlock("Почему владельцы ПВЗ выбирают МегаФон", pvz)}
        ${renderFeatureBlock("Преимущества для малого бизнеса", small)}
      </div>
    </section>
  `;
}

function renderFeatureBlock(title, items) {
  return `
    <div>
      <div class="section-title">
        <h2>${title}</h2>
      </div>
      <div class="feature-grid">
        ${items.map(([iconName, itemTitle, text]) => renderBenefit(iconName, itemTitle, text)).join("")}
      </div>
    </div>
  `;
}

function renderHowItWorks() {
  const steps = [
    ["Выберите тариф", "На этой странице"],
    ["Оформите заказ", "Онлайн за 5 минут"],
    ["Установка и настройка", "Специалист приедет в течение 5 рабочих дней"],
    ["Смотрите онлайн", "Доступ из любой точки"],
  ];

  return `
    <section class="section" id="how-it-works">
      <div class="container">
        <div class="section-title">
          <h2>Подключение в несколько шагов</h2>
        </div>
        <div class="how-grid steps-line">
          ${steps
            .map(
              ([title, text], index) => `
                <article class="card step-card">
                  <span class="step-badge">${index + 1}</span>
                  <h4>${title}</h4>
                  <p>${text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFAQ() {
  return `
    <section class="section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <div class="section-title center">
            <h2>Часто задаваемые вопросы</h2>
          </div>
          <div class="faq-list">
            ${faq
              .map(
                ([question, answer], index) => `
                  <div class="faq-item">
                    <button class="faq-question" type="button" data-action="toggleFaq" data-index="${index}">
                      <span>${question}</span>
                      ${icon("chevron")}
                    </button>
                    <div class="faq-answer"><p>${answer}</p></div>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="help-card">
            <h4>Не нашли ответ?</h4>
            <p class="muted">Оставьте заявку — эксперт уточнит параметры объекта и поможет выбрать тариф.</p>
            <button class="btn btn-primary" type="button" data-action="openLead">Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="brand">
          <span class="brand-mark"></span>
          <span class="brand-copy">
            <strong>МегаФон</strong>
            <span>ПроБизнес</span>
          </span>
        </div>
        <div>© ${new Date().getFullYear()} ПАО «МегаФон». Прототип клиентского сценария.</div>
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Оферта</a>
        </div>
      </div>
    </footer>
  `;
}

function renderCheckout() {
  const tariff = getSelectedTariff();
  return `
    <div class="page">
      ${renderTopbar()}
      <main class="checkout-page">
        <div class="container">
          <div class="checkout-head">
            <h1>Оформление заказа</h1>
          </div>
          <div class="checkout-layout">
            <section>
              ${
                state.checkout.notice
                  ? `
                    <div class="notice">
                      ${icon("checkCircle")}
                      <div>
                        <h4>Создали для вас профиль МегаФон ID</h4>
                        <p>Вы можете авторизоваться на сайте ПроБизнес. Данные для входа отправили в SMS.</p>
                      </div>
                      <button class="icon-btn" type="button" data-action="closeNotice" aria-label="Закрыть">${icon("x")}</button>
                    </div>
                  `
                  : ""
              }
              <div class="step-list">
                ${renderCheckoutStep(1, "Данные покупателя", "Организация, реквизиты и подтверждение", renderBuyerStep())}
                ${renderCheckoutStep(2, "Доставка и монтаж", "Адрес объекта и монтаж оборудования", renderDeliveryStep())}
                ${renderCheckoutStep(3, "Счет и оплата", "Почта для счета и финальное оформление", renderPaymentStep())}
              </div>
            </section>
            ${renderSummary(tariff)}
          </div>
        </div>
      </main>
    </div>
  `;
}

function renderSummary(tariff) {
  return `
    <aside class="summary">
      <div class="summary-body">
        <h3>Ваш заказ</h3>
        <div class="summary-product">
          <strong>${tariff.title}</strong>
          <p class="muted">${getSelectedSegmentLabel()} · ${tariff.description}</p>
        </div>
        <div class="summary-row">
          <span>Абонентская плата</span>
          <strong>${money(tariff.price)}/мес</strong>
        </div>
        <div class="summary-row">
          <span>Оборудование</span>
          <strong>включено</strong>
        </div>
        <div class="summary-row">
          <span>Монтаж</span>
          <strong>0 руб.</strong>
        </div>
      </div>
      <div class="summary-total">
        <div class="summary-total-row">
          <span>Итого</span>
          <strong>${money(tariff.price)}/мес</strong>
        </div>
      </div>
    </aside>
  `;
}

function renderCheckoutStep(index, title, subtitle, body) {
  const isCompleted = state.checkout.completed.includes(index);
  const isActive = state.checkout.activeStep === index;
  const className = isActive ? "active" : isCompleted ? "completed" : "upcoming";
  const disabled = !isActive && !isCompleted;
  const stepIcon = isCompleted ? icon("check") : index;

  return `
    <article class="checkout-step ${className}">
      <button class="step-trigger" type="button" data-action="openStep" data-step="${index}" ${disabled ? "disabled" : ""}>
        <span class="step-index">${stepIcon}</span>
        <span>
          <h3>${title}</h3>
          <p>${subtitle}</p>
        </span>
      </button>
      <div class="step-body">${isActive ? body : ""}</div>
    </article>
  `;
}

function renderBuyerStep() {
  const checkout = state.checkout;
  if (!checkout.selectedOrg) {
    return `
      <div class="form-grid">
        <div class="field search-field">
          <label for="orgSearch">Организация или ИНН</label>
          ${icon("search")}
          <input id="orgSearch" type="text" value="${escapeHtml(checkout.orgQuery)}" data-input="orgSearch" placeholder="Введите название или ИНН" autocomplete="off" />
          <div class="error-text hidden" id="innError">ИНН должен содержать 10 или 12 цифр</div>
          <div class="suggestions hidden" id="orgSuggestions"></div>
        </div>
      </div>
    `;
  }

  const org = checkout.selectedOrg;
  return `
    ${renderRequisites(org)}
    ${
      org.type === "ip"
        ? renderIpVerification()
        : `
          <div class="passport-block">
            <h4>Руководитель</h4>
            <div class="form-row">
              <div class="field">
                <label>Фамилия</label>
                <input type="text" data-input="directorLast" value="${escapeHtml(checkout.director.lastName)}" />
              </div>
              <div class="field">
                <label>Имя</label>
                <input type="text" data-input="directorFirst" value="${escapeHtml(checkout.director.firstName)}" />
              </div>
            </div>
            <div class="field">
              <label>Отчество</label>
              <input type="text" data-input="directorPatronymic" value="${escapeHtml(checkout.director.patronymic)}" />
            </div>
          </div>
        `
    }
    <div class="form-actions" style="margin-top: 18px;">
      <button class="btn btn-primary" type="button" data-action="continueStep1" ${canContinueStep1() ? "" : "disabled"}>Продолжить</button>
    </div>
  `;
}

function renderRequisites(org) {
  return `
    <div class="requisites">
      <div class="requisites-head">
        <div>
          <h4>${org.name}</h4>
          <p class="muted">${org.city}</p>
        </div>
        <div class="status-pill">Данные проверены</div>
      </div>
      <div class="details-grid">
        <div class="detail-item"><span>ИНН</span><strong>${org.inn}</strong></div>
        <div class="detail-item"><span>КПП</span><strong>${org.kpp}</strong></div>
        <div class="detail-item"><span>ОГРН</span><strong>${org.ogrn}</strong></div>
        <div class="detail-item"><span>Руководитель</span><strong>${org.director}</strong></div>
        <div class="detail-item" style="grid-column: 1 / -1;"><span>Юридический адрес</span><strong>${org.address}</strong></div>
      </div>
      <button class="btn btn-ghost" type="button" data-action="clearOrg" style="margin-top: 14px;">Изменить</button>
    </div>
  `;
}

function renderIpVerification() {
  const checkout = state.checkout;
  const verifiedBadge = checkout.ipVerified ? '<div class="status-pill" style="margin-top: 12px;">Данные подтверждены</div>' : "";
  const loadingText = checkout.verificationMethod === "upload" ? "Распознаем данные паспорта..." : "Заполняем тестовые паспортные данные...";
  const showPassportForm = checkout.ipVerified;
  return `
    <div class="passport-block">
      <h4>Подтверждение паспортных данных владельца</h4>
      <p class="muted">Подтвердите личность одним из способов.</p>
      <div class="verification-grid">
        ${renderVerifyChoice("upload", "Загрузить скан паспорта", "Имитация распознавания JPEG или PNG до 5 МБ", "upload")}
        ${renderVerifyChoice("manual", "Ввести вручную", "Имитация заполнения формы тестовыми данными", "file")}
      </div>
      ${checkout.verificationLoading ? `<p class="muted" style="margin-top: 12px;">${loadingText}</p>` : ""}
      ${showPassportForm ? renderPassportForm() : ""}
      ${verifiedBadge}
    </div>
  `;
}

function renderVerifyChoice(method, title, text, iconName) {
  const selected = state.checkout.verificationMethod === method;
  return `
    <button class="choice-card ${selected ? "selected" : ""}" type="button" data-action="selectVerification" data-method="${method}">
      <span class="icon-box">${icon(iconName)}</span>
      <span>
        <strong>${title}</strong>
        <span>${text}</span>
      </span>
    </button>
  `;
}

function renderPassportForm() {
  const p = state.checkout.passport;
  const fields = [
    ["passportLastName", "Фамилия", p.lastName],
    ["passportFirstName", "Имя", p.firstName],
    ["passportPatronymic", "Отчество", p.patronymic],
    ["passportBirthDate", "Дата рождения", p.birthDate],
    ["passportBirthPlace", "Место рождения", p.birthPlace],
    ["passportSeries", "Серия паспорта", p.series],
    ["passportNumber", "Номер паспорта", p.number],
    ["passportIssueDate", "Дата выдачи", p.issueDate],
    ["passportIssuedBy", "Кем выдан", p.issuedBy],
    ["passportDepartmentCode", "Код подразделения", p.departmentCode],
  ];
  return `
    <div class="form-grid" style="margin-top: 16px;">
      <div class="form-row">
        ${fields
          .map(
            ([key, label, value]) => `
              <div class="field">
                <label>${label}</label>
                <input type="text" data-input="${key}" value="${escapeHtml(value)}" />
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDeliveryStep() {
  const checkout = state.checkout;
  const selected = checkout.selectedAddress;
  const city = selected?.city || "";
  const inZone = selected && mountCities.includes(city);
  const contactFields = checkout.contactSame
    ? ""
    : `
      <div class="form-row">
        <div class="field"><label>Фамилия</label><input type="text" data-input="contactLast" value="${escapeHtml(checkout.contact.lastName)}" /></div>
        <div class="field"><label>Имя</label><input type="text" data-input="contactFirst" value="${escapeHtml(checkout.contact.firstName)}" /></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Отчество</label><input type="text" data-input="contactPatronymic" value="${escapeHtml(checkout.contact.patronymic)}" /></div>
        <div class="field"><label>Номер телефона</label><input type="tel" data-input="contactPhone" value="${escapeHtml(checkout.contact.phone)}" placeholder="+7 (___) ___-__-__" /></div>
      </div>
    `;

  return `
    <div class="form-grid">
      <div>
        <h4>Выберите способ получения</h4>
        <div class="choice-grid two-col">
          ${renderDeliveryChoice("delivery", "Доставка", "Доставим оборудование и согласуем монтаж на объекте", "building")}
          ${renderDeliveryChoice("pickup", "Самовывоз из ПВЗ", "Выберите удобный пункт выдачи МегаФон", "briefcase")}
        </div>
      </div>
      ${
        checkout.deliveryMethod === "delivery"
          ? `
            <div class="field search-field">
              <label for="addressSearch">Адрес объекта установки</label>
              ${icon("search")}
              <input id="addressSearch" type="text" value="${escapeHtml(checkout.addressQuery)}" data-input="addressSearch" placeholder="Введите адрес объекта" autocomplete="off" />
              <div class="suggestions hidden" id="addressSuggestions"></div>
            </div>
            <label class="contact-toggle">
              <input type="checkbox" data-input="needInstall" ${checkout.needInstall ? "checked" : ""} />
              Нужен монтаж
            </label>
            ${
              selected && checkout.needInstall
                ? `
                  <div class="info-block ${inZone ? "success" : "info"}">
                    ${icon(inZone ? "checkCircle" : "info")}
                    <div>
                      <h4>${inZone ? "Бесплатный монтаж доступен в вашем городе" : "Уточним детали монтажа"}</h4>
                      <p>${
                        inZone
                          ? "Установка в течение 5 рабочих дней после оплаты. Менеджер свяжется для согласования даты и времени."
                          : "После оплаты с вами свяжется менеджер для согласования способа доставки оборудования и условий монтажа."
                      }</p>
                    </div>
                  </div>
                `
                : ""
            }
            <div class="form-group-title">Контактные данные получателя</div>
            <label class="contact-toggle">
              <input type="checkbox" data-input="contactSame" ${checkout.contactSame ? "checked" : ""} />
              Совпадает с данными покупателя
            </label>
            ${contactFields}
          `
          : ""
      }
      ${
        checkout.deliveryMethod === "pickup"
          ? `
            <div class="pickup-list">
              ${pickupPoints
                .map(
                  (point) => `
                    <button class="choice-card pickup-card ${checkout.pickupPoint === point.id ? "selected" : ""}" type="button" data-action="selectPickupPoint" data-id="${point.id}">
                      <span class="icon-box">${icon("map")}</span>
                      <span>
                        <strong>${point.title}</strong>
                        <span>${point.address}</span>
                        <span>${point.schedule}</span>
                      </span>
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div class="info-block info">
              ${icon("info")}
              <div>
                <h4>Монтаж согласуем отдельно</h4>
                <p>После самовывоза менеджер поможет выбрать дату установки и настроить оборудование на объекте.</p>
              </div>
            </div>
          `
          : ""
      }
      <div class="form-actions">
        <button class="btn btn-primary" type="button" data-action="continueStep2" ${canContinueStep2() ? "" : "disabled"}>Продолжить</button>
      </div>
    </div>
  `;
}

function renderDeliveryChoice(method, title, text, iconName) {
  const selected = state.checkout.deliveryMethod === method;
  return `
    <button class="choice-card ${selected ? "selected" : ""}" type="button" data-action="selectDeliveryMethod" data-method="${method}">
      <span class="icon-box">${icon(iconName)}</span>
      <span>
        <strong>${title}</strong>
        <span>${text}</span>
      </span>
    </button>
  `;
}

function renderPaymentStep() {
  if (state.checkout.orderComplete) {
    return `
      <div class="success-state" style="justify-items: start; text-align: left;">
        <div class="success-icon">${icon("checkCircle")}</div>
        <h3>Заказ оформлен!</h3>
        <p class="muted">Счет отправлен на ${escapeHtml(state.checkout.email)}. После оплаты пришлем чек и детали по заказу.</p>
        <div class="info-block info" style="margin-top: 12px;">
          ${icon("info")}
          <div><p>Не забудьте оплатить счет — оплата принимается в течение 10 дней с расчетного счета вашей организации.</p></div>
        </div>
        <div class="invoice-actions">
          <button class="btn btn-primary" type="button" data-action="downloadInvoice" ${state.checkout.invoiceState !== "idle" ? "disabled" : ""}>
            ${state.checkout.invoiceState === "loading" ? '<span class="spinner"></span>' : state.checkout.invoiceState === "done" ? icon("check") : icon("download")}
            ${state.checkout.invoiceState === "done" ? "Счет скачан" : "Скачать счет"}
          </button>
          <button class="btn btn-secondary" type="button" data-action="home">На главную</button>
          <a class="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Перейти в МегаФон ID</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="form-grid">
      <div>
        <h4>Укажите почту</h4>
        <p class="muted">Отправим счет, пришлем детали заказа и подтверждающие документы.</p>
      </div>
      <div class="field">
        <label>E-mail</label>
        <input type="email" data-input="email" value="${escapeHtml(state.checkout.email)}" placeholder="name@company.ru" />
      </div>
      <div class="info-block info">
        ${icon("info")}
        <div>
          <p>Для заключения договора достаточно оплатить счет — никаких бумаг не потребуется.</p>
          <p>Оплачивайте только с расчетного счета организации, указанной в заказе. Платежи от третьих лиц не принимаются.</p>
          <p>Оплатите счет в течение 10 дней.</p>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="button" data-action="completeOrder" ${isValidEmail(state.checkout.email) ? "" : "disabled"}>Оформить заказ</button>
      </div>
      <p class="muted">Оформляя заказ, вы принимаете условия <a href="#" class="btn-ghost">оферты</a>.</p>
    </div>
  `;
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal === "lead") return renderLeadModal();
  if (state.modal === "survey") return renderSurveyModal();
  if (state.modal === "otp") return renderOtpModal();
  return "";
}

function renderLeadModal() {
  if (state.lead.success) {
    return `
      <div class="modal-backdrop">
        <section class="modal" role="dialog" aria-modal="true" aria-label="Заявка принята">
          <button class="icon-btn modal-close" type="button" data-action="closeModal" aria-label="Закрыть">${icon("x")}</button>
          <div class="success-state">
            <div class="success-icon">${icon("checkCircle")}</div>
            <h2>Заявка принята</h2>
            <p class="modal-subtitle">Перезвоним в течение 15 минут.</p>
            <button class="btn btn-primary" type="button" data-action="closeModal">Закрыть</button>
          </div>
        </section>
      </div>
    `;
  }

  return `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-label="Оставьте заявку">
        <button class="icon-btn modal-close" type="button" data-action="closeModal" aria-label="Закрыть">${icon("x")}</button>
        <h2>Оставьте заявку</h2>
        <p class="modal-subtitle">Наш эксперт перезвонит в течение 15 минут.</p>
        ${state.lead.context ? `<div class="info-block info" style="margin-bottom: 16px;">${icon("info")}<div><p>${escapeHtml(state.lead.context)}</p></div></div>` : ""}
        <div class="form-grid">
          <div class="field">
            <label>Номер телефона</label>
            <input type="tel" data-input="leadPhone" value="${escapeHtml(state.lead.phone)}" placeholder="+7 (___) ___-__-__" autofocus />
          </div>
          <div class="field">
            <label>Название компании или ИНН</label>
            <input type="text" data-input="leadCompany" value="${escapeHtml(state.lead.company)}" placeholder="ООО или ИНН" />
          </div>
          <div class="modal-actions">
            <button class="btn btn-primary" type="button" data-action="submitLead" ${isValidPhone(state.lead.phone) ? "" : "disabled"}>Отправить</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderSurveyModal() {
  const tariff = getSelectedTariff();
  const isStepOne = state.survey.step === 1;
  return `
    <div class="modal-backdrop">
      <section class="modal wide" role="dialog" aria-modal="true" aria-label="Подключение тарифа">
        <button class="icon-btn modal-close" type="button" data-action="closeModal" aria-label="Закрыть">${icon("x")}</button>
        <div class="progress-dots">
          <span class="progress-dot ${state.survey.step >= 1 ? "active" : ""}"></span>
          <span class="progress-dot ${state.survey.step >= 2 ? "active" : ""}"></span>
        </div>
        <h2>${isStepOne ? "Чьи камеры будут использоваться?" : "На объекте есть интернет?"}</h2>
        <p class="modal-subtitle">${tariff.title} · ${money(tariff.price)}/мес</p>
        <div class="choice-grid">
          ${
            isStepOne
              ? `
                <button class="choice-card" type="button" data-action="surveyCamera" data-value="megafon">
                  <span class="icon-box">${icon("camera")}</span>
                  <span><strong>Камеры МегаФон</strong><span>Подберем комплект и установим оборудование.</span></span>
                </button>
                <button class="choice-card" type="button" data-action="surveyCamera" data-value="own">
                  <span class="icon-box">${icon("cloud")}</span>
                  <span><strong>Свои камеры</strong><span>Подключим совместимые камеры к облачному архиву.</span></span>
                </button>
              `
              : `
                <button class="choice-card" type="button" data-action="surveyInternet" data-value="yes">
                  <span class="icon-box">${icon("wifi")}</span>
                  <span><strong>Да, интернет подключен</strong><span>Перейдем к авторизации МегаФон ID.</span></span>
                </button>
                <button class="choice-card" type="button" data-action="surveyInternet" data-value="no">
                  <span class="icon-box">${icon("phone")}</span>
                  <span><strong>Нет, нужен интернет</strong><span>Эксперт подберет комплект видеонаблюдения и связь.</span></span>
                </button>
              `
          }
        </div>
        ${
          state.survey.step === 2
            ? '<div class="modal-actions" style="margin-top: 18px;"><button class="btn btn-secondary" type="button" data-action="surveyBack">' + icon("arrowLeft") + "Назад</button></div>"
            : ""
        }
      </section>
    </div>
  `;
}

function renderOtpModal() {
  if (state.otp.success) {
    return `
      <div class="modal-backdrop">
        <section class="modal" role="dialog" aria-modal="true" aria-label="Успешная авторизация">
          <div class="success-state">
            <div class="success-icon">${icon("checkCircle")}</div>
            <h2>Номер подтвержден</h2>
            <p class="modal-subtitle">Переходим к оформлению заказа.</p>
          </div>
        </section>
      </div>
    `;
  }

  const phoneStep = state.otp.step === 1;
  return `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-label="МегаФон ID">
        <button class="icon-btn modal-close" type="button" data-action="closeModal" aria-label="Закрыть">${icon("x")}</button>
        ${
          phoneStep
            ? `
              <h2>Введите номер телефона</h2>
              <p class="modal-subtitle">Отправим код подтверждения.</p>
              <div class="form-grid">
                <div class="field">
                  <label>Номер телефона</label>
                  <input type="tel" data-input="otpPhone" value="${escapeHtml(state.otp.phone)}" placeholder="+7 (___) ___-__-__" autofocus />
                </div>
                <div class="modal-actions">
                  <button class="btn btn-primary" type="button" data-action="getOtpCode" ${isValidPhone(state.otp.phone) ? "" : "disabled"}>Получить код</button>
                </div>
              </div>
            `
            : `
              <h2>Введите код из SMS</h2>
              <p class="modal-subtitle">Отправили на ${escapeHtml(state.otp.phone)} · <button class="btn-ghost" type="button" data-action="changeOtpPhone">Изменить</button></p>
              <div class="otp-code">
                ${[0, 1, 2, 3]
                  .map((index) => `<input type="text" inputmode="numeric" maxlength="1" data-input="otpCode" data-index="${index}" value="${state.otp.code[index]}" />`)
                  .join("")}
              </div>
              <div class="timer" id="otpTimer">Не пришел код? Отправить повторно через ${state.otp.timer} сек.</div>
            `
        }
      </section>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isValidPhone(phone) {
  const digits = String(phone).replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("7");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function formatPhone(value) {
  let digits = String(value).replace(/\D/g, "");
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (!digits.startsWith("7")) digits = `7${digits}`;
  digits = digits.slice(0, 11);
  const rest = digits.slice(1);
  let formatted = "+7";
  if (rest.length > 0) formatted += ` (${rest.slice(0, 3)}`;
  if (rest.length >= 3) formatted += ")";
  if (rest.length > 3) formatted += ` ${rest.slice(3, 6)}`;
  if (rest.length > 6) formatted += `-${rest.slice(6, 8)}`;
  if (rest.length > 8) formatted += `-${rest.slice(8, 10)}`;
  return formatted;
}

function splitName(fullName) {
  const [lastName = "", firstName = "", patronymic = ""] = fullName.split(" ");
  return { lastName, firstName, patronymic };
}

function getMockPassport(method) {
  if (method === "upload") {
    return {
      lastName: "Морозова",
      firstName: "Анна",
      patronymic: "Викторовна",
      birthDate: "07.11.1990",
      birthPlace: "Новосибирск",
      series: "5012",
      number: "654321",
      issueDate: "18.12.2020",
      issuedBy: "ГУ МВД по Новосибирской области",
      departmentCode: "540-002",
    };
  }

  return {
    lastName: "Галеев",
    firstName: "Тимур",
    patronymic: "Ринатович",
    birthDate: "12.04.1988",
    birthPlace: "Казань",
    series: "9208",
    number: "123456",
    issueDate: "20.05.2018",
    issuedBy: "ГУ МВД по Республике Татарстан",
    departmentCode: "160-001",
  };
}

function canContinueStep1() {
  const { selectedOrg, director } = state.checkout;
  if (!selectedOrg) return false;
  if (selectedOrg.type === "ip") {
    if (state.checkout.verificationMethod === "manual") return isManualPassportValid();
    return state.checkout.ipVerified;
  }
  return Boolean(director.lastName.trim() && director.firstName.trim());
}

function canContinueStep2() {
  const { deliveryMethod, addressQuery, selectedAddress, pickupPoint, contactSame, contact } = state.checkout;
  if (!deliveryMethod) return false;
  if (deliveryMethod === "pickup") return Boolean(pickupPoint);
  const hasAddress = Boolean(selectedAddress || addressQuery.trim().length >= 10);
  if (!hasAddress) return false;
  if (contactSame) return true;
  return Boolean(contact.lastName.trim() && contact.firstName.trim() && isValidPhone(contact.phone));
}

function isManualPassportValid() {
  const p = state.checkout.passport;
  return Boolean(
    p.lastName.trim() &&
      p.firstName.trim() &&
      p.birthDate.trim() &&
      p.birthPlace.trim() &&
      p.series.trim() &&
      p.number.trim() &&
      p.issueDate.trim() &&
      p.issuedBy.trim() &&
      p.departmentCode.trim(),
  );
}

function findTariff(segmentId, tariffId) {
  const segment = getSegment(segmentId);
  return segment.tariffs.find((tariff) => tariff.id === tariffId) || segment.tariffs[0];
}

function openLead(context = "") {
  state.modal = "lead";
  state.lead.success = false;
  state.lead.context = context;
  renderApp();
}

function openOtp() {
  state.modal = "otp";
  state.otp.step = 1;
  state.otp.phone = state.lead.phone || "";
  state.otp.code = ["", "", "", ""];
  state.otp.success = false;
  clearOtpTimer();
  renderApp();
}

function startOtpTimer() {
  clearOtpTimer();
  state.otp.timer = 60;
  state.otp.timerId = window.setInterval(() => {
    state.otp.timer -= 1;
    const timer = document.querySelector("#otpTimer");
    if (timer) {
      timer.textContent = state.otp.timer > 0 ? `Не пришел код? Отправить повторно через ${state.otp.timer} сек.` : "Можно отправить код повторно";
    }
    if (state.otp.timer <= 0) clearOtpTimer();
  }, 1000);
}

function clearOtpTimer() {
  if (state.otp.timerId) {
    window.clearInterval(state.otp.timerId);
    state.otp.timerId = null;
  }
}

function navigateToCheckout() {
  state.modal = null;
  state.view = "checkout";
  state.mobileMenu = false;
  resetCheckout(false);
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetCheckout(resetTariff = true) {
  if (resetTariff) {
    state.selectedTariff = null;
    state.selectedSegment = null;
  }
  state.checkout = {
    ...state.checkout,
    notice: true,
    activeStep: 1,
    completed: [],
    orgQuery: "",
    selectedOrg: null,
    director: { lastName: "", firstName: "", patronymic: "" },
    verificationMethod: "",
    verificationLoading: false,
    ipVerified: false,
    passport: {
      lastName: "",
      firstName: "",
      patronymic: "",
      birthDate: "",
      birthPlace: "",
      series: "",
      number: "",
      issueDate: "",
      issuedBy: "",
      departmentCode: "",
    },
    deliveryMethod: "",
    addressQuery: "",
    selectedAddress: null,
    pickupPoint: "",
    needInstall: true,
    contactSame: true,
    contact: { lastName: "", firstName: "", patronymic: "", phone: "" },
    email: "",
    orderComplete: false,
    invoiceState: "idle",
  };
}

function completeStep(step) {
  if (!state.checkout.completed.includes(step)) state.checkout.completed.push(step);
  state.checkout.activeStep = Math.min(step + 1, 3);
}

function updateChrome() {
  const topbar = document.querySelector("#topbar");
  if (topbar) topbar.classList.toggle("scrolled", window.scrollY > 8);
  const stickyLead = document.querySelector("#stickyLead");
  if (stickyLead) stickyLead.classList.toggle("visible", state.view === "landing" && window.scrollY > 400);
}

function updateDynamicButtons() {
  const leadButton = document.querySelector('[data-action="submitLead"]');
  if (leadButton) leadButton.disabled = !isValidPhone(state.lead.phone);

  const otpButton = document.querySelector('[data-action="getOtpCode"]');
  if (otpButton) otpButton.disabled = !isValidPhone(state.otp.phone);

  const step1 = document.querySelector('[data-action="continueStep1"]');
  if (step1) step1.disabled = !canContinueStep1();

  const step2 = document.querySelector('[data-action="continueStep2"]');
  if (step2) step2.disabled = !canContinueStep2();

  const order = document.querySelector('[data-action="completeOrder"]');
  if (order) order.disabled = !isValidEmail(state.checkout.email);

}

function showSuggestions(type, query) {
  const targetId = type === "org" ? "orgSuggestions" : "addressSuggestions";
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;
  const normalized = query.trim().toLowerCase();
  if (type === "org") updateInnError(query);
  if (normalized.length < 3) {
    target.classList.add("hidden");
    target.innerHTML = "";
    return;
  }
  const source = type === "org" ? organizations : addresses;
  let isFallbackRecommendation = false;
  let items = source.filter((item) => {
    const haystack = type === "org" ? `${item.inn} ${item.name} ${item.city}` : `${item.text} ${item.city}`;
    return haystack.toLowerCase().includes(normalized);
  });
  if (type === "org" && !items.length) {
    const digits = normalized.replace(/\D/g, "");
    if (digits.length >= 3) {
      items = organizations.slice(0, 4);
      isFallbackRecommendation = true;
    }
  }
  if (!items.length) {
    target.classList.remove("hidden");
    target.innerHTML = '<div class="suggestion-item"><strong>Ничего не найдено</strong><span>Попробуйте другой запрос</span></div>';
    return;
  }
  target.classList.remove("hidden");
  target.innerHTML = `${isFallbackRecommendation ? '<div class="suggestion-caption">Рекомендуем из тестовых данных</div>' : ""}${items
    .slice(0, 7)
    .map((item) => {
      if (type === "org") {
        return `<button class="suggestion-item" type="button" data-action="selectOrg" data-id="${item.id}"><strong>${item.inn} · ${item.name}</strong><span>${item.city}</span></button>`;
      }
      return `<button class="suggestion-item" type="button" data-action="selectAddress" data-id="${item.id}"><strong>${item.text}</strong><span>${item.city}</span></button>`;
    })
    .join("")}`;
}

function updateInnError(query) {
  const error = document.querySelector("#innError");
  if (!error) return;
  const digits = String(query).replace(/\D/g, "");
  const isNumericRequest = digits.length > 0 && digits.length === String(query).replace(/\s/g, "").length;
  const invalid = isNumericRequest && digits.length >= 3 && ![10, 12].includes(digits.length);
  error.classList.toggle("hidden", !invalid);
}

function handleClick(event) {
  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) return;
  const action = actionNode.dataset.action;

  if (action === "toggleFaq") {
    actionNode.closest(".faq-item")?.classList.toggle("open");
    return;
  }

  if (action === "toggleMobile") {
    state.mobileMenu = !state.mobileMenu;
    renderApp();
    return;
  }

  if (action === "home") {
    state.view = "landing";
    state.mobileMenu = false;
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "scroll") {
    const targetId = actionNode.dataset.target;
    state.mobileMenu = false;
    if (state.view !== "landing") {
      state.view = "landing";
      renderApp();
      window.setTimeout(() => document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: "smooth" }), 60);
    } else {
      renderApp();
      window.setTimeout(() => document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: "smooth" }), 0);
    }
    return;
  }

  if (action === "switchSegment") {
    state.activeSegment = actionNode.dataset.segment;
    renderApp();
    return;
  }

  if (action === "openLead") {
    openLead();
    return;
  }

  if (action === "closeModal") {
    clearOtpTimer();
    state.modal = null;
    state.lead.context = "";
    renderApp();
    return;
  }

  if (action === "submitLead") {
    if (!isValidPhone(state.lead.phone)) return;
    state.lead.success = true;
    renderApp();
    return;
  }

  if (action === "connectTariff") {
    state.selectedSegment = actionNode.dataset.segment;
    state.selectedTariff = findTariff(actionNode.dataset.segment, actionNode.dataset.tariff);
    state.survey = { step: 1, cameraChoice: "", internetChoice: "" };
    state.modal = "survey";
    renderApp();
    return;
  }

  if (action === "surveyCamera") {
    state.survey.cameraChoice = actionNode.dataset.value;
    state.survey.step = 2;
    renderApp();
    return;
  }

  if (action === "surveyInternet") {
    state.survey.internetChoice = actionNode.dataset.value;
    if (actionNode.dataset.value === "yes") {
      openOtp();
    } else {
      const tariff = getSelectedTariff();
      openLead(`Интересует тариф «${tariff.title}» + интернет на объекте.`);
    }
    return;
  }

  if (action === "surveyBack") {
    state.survey.step = 1;
    renderApp();
    return;
  }

  if (action === "getOtpCode") {
    if (!isValidPhone(state.otp.phone)) return;
    state.otp.step = 2;
    state.otp.code = ["", "", "", ""];
    renderApp();
    startOtpTimer();
    window.setTimeout(() => document.querySelector('[data-input="otpCode"]')?.focus(), 40);
    return;
  }

  if (action === "changeOtpPhone") {
    clearOtpTimer();
    state.otp.step = 1;
    renderApp();
    return;
  }

  if (action === "closeNotice") {
    state.checkout.notice = false;
    renderApp();
    return;
  }

  if (action === "openStep") {
    const step = Number(actionNode.dataset.step);
    if (state.checkout.completed.includes(step) || state.checkout.activeStep === step) {
      state.checkout.activeStep = step;
      renderApp();
    }
    return;
  }

  if (action === "selectOrg") {
    const org = organizations.find((item) => item.id === actionNode.dataset.id);
    if (!org) return;
    state.checkout.selectedOrg = org;
    state.checkout.orgQuery = `${org.inn} ${org.name}`;
    state.checkout.director = splitName(org.director);
    state.checkout.verificationMethod = "";
    state.checkout.ipVerified = false;
    renderApp();
    return;
  }

  if (action === "clearOrg") {
    state.checkout.selectedOrg = null;
    state.checkout.orgQuery = "";
    state.checkout.verificationMethod = "";
    state.checkout.ipVerified = false;
    renderApp();
    return;
  }

  if (action === "selectVerification") {
    const method = actionNode.dataset.method;
    state.checkout.verificationMethod = method;
    state.checkout.ipVerified = false;
    state.checkout.verificationLoading = true;
    state.checkout.passport = {
      lastName: "",
      firstName: "",
      patronymic: "",
      birthDate: "",
      birthPlace: "",
      series: "",
      number: "",
      issueDate: "",
      issuedBy: "",
      departmentCode: "",
    };
    renderApp();
    window.setTimeout(() => {
      state.checkout.verificationLoading = false;
      state.checkout.ipVerified = true;
      state.checkout.passport = getMockPassport(method);
      renderApp();
    }, 900);
    return;
  }

  if (action === "selectDeliveryMethod") {
    const method = actionNode.dataset.method;
    state.checkout.deliveryMethod = method;
    if (method === "delivery") {
      state.checkout.pickupPoint = "";
    } else {
      state.checkout.addressQuery = "";
      state.checkout.selectedAddress = null;
    }
    renderApp();
    return;
  }

  if (action === "continueStep1") {
    if (!canContinueStep1()) return;
    completeStep(1);
    renderApp();
    return;
  }

  if (action === "selectAddress") {
    const address = addresses.find((item) => item.id === actionNode.dataset.id);
    if (!address) return;
    state.checkout.selectedAddress = address;
    state.checkout.addressQuery = address.text;
    renderApp();
    return;
  }

  if (action === "selectPickupPoint") {
    state.checkout.pickupPoint = actionNode.dataset.id;
    renderApp();
    return;
  }

  if (action === "continueStep2") {
    if (!canContinueStep2()) return;
    completeStep(2);
    renderApp();
    return;
  }

  if (action === "completeOrder") {
    if (!isValidEmail(state.checkout.email)) return;
    state.checkout.orderComplete = true;
    state.checkout.completed = [1, 2, 3];
    renderApp();
    return;
  }

  if (action === "downloadInvoice") {
    if (state.checkout.invoiceState !== "idle") return;
    state.checkout.invoiceState = "loading";
    renderApp();
    window.setTimeout(() => {
      state.checkout.invoiceState = "done";
      renderApp();
    }, 1500);
  }
}

function handleInput(event) {
  const input = event.target.closest("[data-input]");
  if (!input) return;
  const key = input.dataset.input;
  let value = input.value;

  if (key === "leadPhone") {
    value = formatPhone(value);
    input.value = value;
    state.lead.phone = value;
  }
  if (key === "leadCompany") state.lead.company = value;
  if (key === "otpPhone") {
    value = formatPhone(value);
    input.value = value;
    state.otp.phone = value;
  }
  if (key === "otpCode") {
    value = value.replace(/\D/g, "").slice(0, 1);
    input.value = value;
    const index = Number(input.dataset.index);
    state.otp.code[index] = value;
    if (value && index < 3) {
      document.querySelector(`[data-input="otpCode"][data-index="${index + 1}"]`)?.focus();
    }
    if (state.otp.code.join("").length === 4) {
      clearOtpTimer();
      window.setTimeout(() => {
        state.otp.success = true;
        renderApp();
        window.setTimeout(navigateToCheckout, 850);
      }, 220);
    }
  }
  if (key === "orgSearch") {
    state.checkout.orgQuery = value;
    showSuggestions("org", value);
  }
  if (key === "directorLast") state.checkout.director.lastName = value;
  if (key === "directorFirst") state.checkout.director.firstName = value;
  if (key === "directorPatronymic") state.checkout.director.patronymic = value;
  if (key.startsWith("passport")) {
    const map = {
      passportLastName: "lastName",
      passportFirstName: "firstName",
      passportPatronymic: "patronymic",
      passportBirthDate: "birthDate",
      passportBirthPlace: "birthPlace",
      passportSeries: "series",
      passportNumber: "number",
      passportIssueDate: "issueDate",
      passportIssuedBy: "issuedBy",
      passportDepartmentCode: "departmentCode",
    };
    state.checkout.passport[map[key]] = value;
  }
  if (key === "addressSearch") {
    state.checkout.addressQuery = value;
    state.checkout.selectedAddress = null;
    showSuggestions("address", value);
  }
  if (key === "contactLast") state.checkout.contact.lastName = value;
  if (key === "contactFirst") state.checkout.contact.firstName = value;
  if (key === "contactPatronymic") state.checkout.contact.patronymic = value;
  if (key === "contactPhone") {
    value = formatPhone(value);
    input.value = value;
    state.checkout.contact.phone = value;
  }
  if (key === "email") state.checkout.email = value;

  updateDynamicButtons();
}

function handleChange(event) {
  const input = event.target.closest("[data-input]");
  if (!input) return;
  if (input.dataset.input === "contactSame") {
    state.checkout.contactSame = input.checked;
    renderApp();
  }
  if (input.dataset.input === "needInstall") {
    state.checkout.needInstall = input.checked;
    renderApp();
  }
}

function handleKeydown(event) {
  const input = event.target.closest('[data-input="otpCode"]');
  if (!input) return;
  if (event.key === "Backspace" && !input.value) {
    const index = Number(input.dataset.index);
    if (index > 0) {
      const prev = document.querySelector(`[data-input="otpCode"][data-index="${index - 1}"]`);
      if (prev) {
        prev.value = "";
        state.otp.code[index - 1] = "";
        prev.focus();
      }
    }
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("input", handleInput);
document.addEventListener("change", handleChange);
document.addEventListener("keydown", handleKeydown);
window.addEventListener("scroll", updateChrome, { passive: true });
window.addEventListener("resize", updateChrome);

renderApp();
