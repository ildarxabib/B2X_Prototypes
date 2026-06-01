(function () {
  const product = {
    id: 'picocells',
    name: 'Пикосоты',
    shortDescription: 'Улучшение покрытия и качества связи',
    path: '/picocells',
    catalogCard: {
      icon: 'Signal',
      badge: 'MVP',
      available: true,
      description: 'Стабильная связь в каждом уголке офиса',
    },
    tariffs: [
      {
        id: 'basic',
        name: 'Базовое покрытие',
        price: 6000,
        period: 'мес',
        picoCount: 1,
        area: 100,
        users: 32,
        features: ['1 пикосота', 'До 100 кв.м.', 'До 32 пользователей', '4G/VoLTE', 'Доставка/Самовывоз'],
        idealFor: 'небольших офисов, переговорных, магазинов, касс, точек выдачи',
        popular: false,
      },
      {
        id: 'extended',
        name: 'Расширенное покрытие',
        price: 12000,
        period: 'мес',
        picoCount: 2,
        area: 200,
        users: 64,
        features: ['2 пикосоты', 'До 200 кв.м.', 'До 64 пользователей', '4G/VoLTE', 'Доставка/Самовывоз'],
        idealFor: 'магазинов, ресторанов, офисов с несколькими кабинетами',
        popular: true,
      },
      {
        id: 'complex',
        name: 'Комплексное решение',
        price: 18000,
        period: 'мес',
        picoCount: 3,
        area: 300,
        users: 96,
        features: ['3 пикосоты', 'До 300 кв.м.', 'До 96 пользователей', '4G/VoLTE', 'Доставка/Самовывоз'],
        idealFor: 'крупных офисов, торговых залов, складов',
        popular: false,
      },
    ],
    step2: {
      type: 'delivery',
      title: 'Способ получения заказа',
      options: ['address', 'courier', 'pickup'],
      requiresPassportOnPickup: true,
      courierNote:
        'При получении потребуется оригинал доверенности от компании с синей печатью, либо подпишите Акт приема-передачи заранее через ЭДО',
      pickupNote: '',
    },
    summaryFields: [{ label: 'Абонентская плата', valueKey: 'price', suffix: 'руб./мес' }],
    successTitle: 'Заказ оформлен!',
    successMessage: 'Счет отправлен на {email}. После оплаты пришлем чек и детали по заказу.',
    disclaimers: [
      'Один тариф — один адрес установки оборудования',
      'Сервис предоставляется только для юридических лиц и ИП (требуется регистрация в ЕГРЮЛ/ЕГРИП)',
    ],
  }

  const organizations = [
    {
      id: 'ooo-progress',
      buyerType: 'entity',
      name: 'ООО "Прогресс Связь"',
      inn: '837455687',
      kpp: '34519569245',
      ogrn: '49582452345',
      city: 'Москва',
      director: 'Карпова Ольга Михайловна',
      address: 'г. Москва, ул. Ленина, д. 56',
    },
    {
      id: 'ip-konstantin',
      buyerType: 'ip',
      name: 'ИП Константинопольский К. К.',
      inn: '780455902311',
      kpp: '',
      ogrn: '322784700105901',
      city: 'Санкт-Петербург',
      director: 'Константинопольский Константин Константинович',
      address: 'г. Санкт-Петербург, Невский проспект, д. 90',
    },
    {
      id: 'ao-retail',
      buyerType: 'entity',
      name: 'АО "Север Ритейл"',
      inn: '7812345670',
      kpp: '781201001',
      ogrn: '1027800001020',
      city: 'Санкт-Петербург',
      director: 'Мельников Андрей Сергеевич',
      address: 'г. Санкт-Петербург, ул. Марата, д. 14',
    },
  ]

  const defaultPassport = {
    lastName: 'Константинопольский',
    firstName: 'Константин',
    patronymic: 'Константинович',
    birthDate: '30.03.1999',
    birthPlace: 'Москва',
    series: '2216',
    number: '609 777',
    issueDate: '26.10.2023',
    issuedBy: 'ОУФМС России',
    departmentCode: '555-888',
  }

  const pickupPoints = [
    { id: 'nevsky', address: 'Санкт-Петербург, Невский проспект, 90', hours: 'Пн-Вс, 10:00-21:00' },
    { id: 'ligovsky', address: 'Санкт-Петербург, Лиговский проспект, 43', hours: 'Пн-Сб, 09:00-20:00' },
  ]

  const timeSlots = ['10:00-14:00', '14:00-18:00', '18:00-22:00']

  const icons = {
    ArrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    ArrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    Building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>',
    Building2: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    CalendarDays: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
    Car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8l-2 4-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    Check: '<path d="m20 6-11 11-5-5"/>',
    CheckCircle: '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="m22 4-10 10.01-3-3"/>',
    ChevronDown: '<path d="m6 9 6 6 6-6"/>',
    ChevronUp: '<path d="m18 15-6-6-6 6"/>',
    Download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
    FileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    Info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    Layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    LayoutDashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    Loader2: '<path d="M21 12a9 9 0 1 1-6.2-8.56"/>',
    MapPin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    Package: '<path d="m7.5 4.3 9 5.2"/><path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3.3 8.7 12 14l8.7-5.3"/><path d="M12 22V14"/>',
    Phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z"/>',
    Search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    Settings: '<path d="M12.2 2h-.4a2 2 0 0 0-2 1.7l-.1.8a2 2 0 0 1-1.1 1.4l-.8.4a2 2 0 0 1-1.8-.1l-.7-.4a2 2 0 0 0-2.5.3l-.3.3a2 2 0 0 0-.3 2.5l.4.7a2 2 0 0 1 .1 1.8l-.4.8a2 2 0 0 1-1.4 1.1l-.8.1a2 2 0 0 0-1.7 2v.4a2 2 0 0 0 1.7 2l.8.1a2 2 0 0 1 1.4 1.1l.4.8a2 2 0 0 1-.1 1.8l-.4.7a2 2 0 0 0 .3 2.5l.3.3a2 2 0 0 0 2.5.3l.7-.4a2 2 0 0 1 1.8-.1l.8.4a2 2 0 0 1 1.1 1.4l.1.8a2 2 0 0 0 2 1.7h.4a2 2 0 0 0 2-1.7l.1-.8a2 2 0 0 1 1.1-1.4l.8-.4a2 2 0 0 1 1.8.1l.7.4a2 2 0 0 0 2.5-.3l.3-.3a2 2 0 0 0 .3-2.5l-.4-.7a2 2 0 0 1-.1-1.8l.4-.8a2 2 0 0 1 1.4-1.1l.8-.1a2 2 0 0 0 1.7-2v-.4a2 2 0 0 0-1.7-2l-.8-.1a2 2 0 0 1-1.4-1.1l-.4-.8a2 2 0 0 1 .1-1.8l.4-.7a2 2 0 0 0-.3-2.5l-.3-.3a2 2 0 0 0-2.5-.3l-.7.4a2 2 0 0 1-1.8.1l-.8-.4a2 2 0 0 1-1.1-1.4l-.1-.8a2 2 0 0 0-2-1.7Z"/><circle cx="12" cy="12" r="3"/>',
    Signal: '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 20V4"/>',
    SignalLow: '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/>',
    Sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
    Truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 17h1"/><path d="M19 17h3v-6h-3l-2-4h-3v10h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    UploadCloud: '<path d="M16 16l-4-4-4 4"/><path d="M12 12v9"/><path d="M20.4 18.4A5 5 0 0 0 18 9h-1.3A8 8 0 1 0 4 16.3"/><path d="M16 16l-4-4-4 4"/>',
    UserRound: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    Wifi: '<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/><path d="M2 8.5a15 15 0 0 1 20 0"/>',
    WifiOff: '<path d="m2 2 20 20"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/><path d="M5 13a10 10 0 0 1 3.3-2.2"/><path d="M2 8.5a15 15 0 0 1 6.8-3.4"/><path d="M16.7 5.1A15 15 0 0 1 22 8.5"/><path d="M19 13a10 10 0 0 0-2.1-1.7"/>',
    X: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    Zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
    AlertTriangle: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  }

  const state = {
    route: getRoute(),
    selectedTariff: readTariff(),
    otp: {
      open: false,
      tariff: null,
      step: 'phone',
      phone: '+7 ',
      code: ['', '', '', ''],
      timer: 60,
      interval: null,
      watchdog: null,
      error: '',
      success: false,
      submitting: false,
    },
    lead: {
      open: false,
      phone: '+7 ',
      inn: '',
      sent: false,
    },
    checkout: createCheckoutState(),
  }

  const app = document.getElementById('app')
  const overlayRoot = document.getElementById('overlay-root')

  function createCheckoutState() {
    return {
      currentStep: 1,
      completedSteps: [],
      companyQuery: '',
      companyData: null,
      buyerType: 'entity',
      passportData: { ...defaultPassport },
      passportUploaded: false,
      passportManual: false,
      deliveryMethod: '',
      installAddress: '',
      installFloor: '',
      installOffice: '',
      deliveryAddress: '',
      selectedDate: '',
      selectedSlot: '',
      pickupPoint: '',
      sameReceiver: true,
      receiver: {
        firstName: '',
        lastName: '',
        patronymic: '',
        phone: '',
      },
      email: '',
      orderPlaced: false,
      invoiceDownload: 'idle',
      otpNotice: false,
    }
  }

  function getRoute() {
    return window.location.hash.replace(/^#/, '') || '/'
  }

  function routeTo(route) {
    window.location.hash = route
    window.setTimeout(render, 0)
  }

  function readTariff() {
    try {
      const raw = window.sessionStorage.getItem('selectedTariff:picocells')
      return raw ? JSON.parse(raw) : product.tariffs[0]
    } catch (error) {
      return product.tariffs[0]
    }
  }

  function storeTariff(tariff) {
    state.selectedTariff = tariff

    try {
      window.sessionStorage.setItem('selectedTariff:picocells', JSON.stringify(tariff))
    } catch (error) {
      // Codex WebView may block storage for file:// pages; in-memory state is enough for this session.
    }
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU').format(value)
  }

  function moneyPerMonth(value) {
    return `${formatPrice(value)} руб./мес`
  }

  function pluralRu(value, one, few, many) {
    const absolute = Math.abs(value)
    const mod10 = absolute % 10
    const mod100 = absolute % 100

    if (mod100 >= 11 && mod100 <= 14) return many
    if (mod10 === 1) return one
    if (mod10 >= 2 && mod10 <= 4) return few
    return many
  }

  function picoCountLabel(count) {
    return `${count} ${pluralRu(count, 'пикосота', 'пикосоты', 'пикосот')}`
  }

  function icon(name, className = 'icon', size = 20) {
    const paths = icons[name] || icons.Info
    return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`
  }

  function topbar() {
    return `
      <header class="topbar">
        <div class="container topbar__inner">
          <button class="brand" data-action="route" data-route="/picocells" type="button" aria-label="Вернуться в начало сценария">
            <div class="brand__mark">М</div>
            <div class="brand__text">
              <span class="brand__main">Пробизнес</span>
              <span class="brand__divider"></span>
              <span>МегаФон ID</span>
            </div>
          </button>
          <div class="topbar__actions">
            <span class="region">${icon('MapPin')} Санкт-Петербург и область</span>
            <a class="phone-pill" href="tel:+79308111299">${icon('Phone')} +7 (930) 811-12-99 ${icon('ChevronDown')}</a>
          </div>
        </div>
      </header>
    `
  }

  function render() {
    state.route = getRoute()
    let html = ''

    if (state.route === '/' || state.route === '') {
      html = catalogPage()
    } else if (state.route === '/picocells') {
      html = landingPage()
    } else if (state.route === '/checkout/picocells') {
      html = checkoutPage()
    } else {
      html = catalogPage()
    }

    app.innerHTML = html
    renderOverlays()
  }

  function renderOverlays() {
    overlayRoot.innerHTML = `${otpModal()}${leadModal()}`
    bindOverlayActions()
  }

  function bindOverlayActions() {
    const otpConfirm = document.getElementById('otp-confirm')
    if (otpConfirm) {
      otpConfirm.onclick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        submitOtp()
      }
    }

    const otpInputs = overlayRoot.querySelectorAll('[data-otp-index]')
    otpInputs.forEach((input) => {
      input.onkeydown = (event) => {
        const index = Number(input.dataset.otpIndex)

        if (event.key === 'Backspace' && !input.value && index > 0) {
          document.getElementById(`otp-code-${index - 1}`)?.focus()
        }

        if (event.key === 'Enter') {
          event.preventDefault()
          submitOtp()
        }
      }
    })
  }

  function catalogPage() {
    return `
      <div class="page">
        ${topbar()}
        <main class="container section">
          <section class="card" style="padding: 40px;">
            <h1 style="max-width: 760px; margin: 0; font-size: 48px; line-height: 1.05;">Цифровое подключение B2B-сервисов МегаФон</h1>
            <p style="max-width: 640px; margin: 16px 0 0; color: var(--megafon-text-secondary); font-size: 17px; line-height: 1.5;">Выберите продукт, подтвердите данные и оформите заказ в едином checkout pipeline.</p>
          </section>
          <section class="grid grid--3 mt-10">
            <article class="card card--interactive tariff-card" data-action="route" data-route="/picocells">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;">
                <div class="icon-box">${icon('Signal')}</div>
                <span class="badge badge--brand">MVP</span>
              </div>
              <h2 style="margin:20px 0 0;font-size:22px;">${product.name}</h2>
              <p style="margin:8px 0 0;color:var(--megafon-text-secondary);font-size:14px;line-height:1.5;">${product.catalogCard.description}</p>
              <div class="tariff-card__cta">
                <button class="btn btn--primary btn--full" data-action="route" data-route="/picocells">Открыть продукт</button>
              </div>
            </article>
          </section>
        </main>
      </div>
    `
  }

  function landingPage() {
    const painItems = [
      ['SignalLow', 'Потеря качества связи', 'Звонки прерываются, голос пропадает'],
      ['WifiOff', 'Слабый мобильный интернет', 'Страницы грузятся медленно, видеозвонки зависают'],
      ['Building', 'Помещение в зоне слабого сигнала', 'Подвалы, бетонные стены, сложные конструкции'],
    ]
    const workItems = [
      ['Wifi', 'Подключите к интернету', 'Соедините с роутером кабелем Ethernet'],
      ['Zap', 'Включите питание', 'Подключите к розетке 220В'],
      ['Sparkles', 'Ничего не настраивайте', 'Оборудование настроится автоматически'],
      ['Signal', 'Пользуйтесь связью', 'Стабильный 4G и VoLTE заработают сразу'],
    ]
    const cases = [
      ['Building2', 'Высокие этажи'],
      ['ArrowDown', 'Подвалы и цоколи'],
      ['Car', 'Подземные парковки'],
      ['LayoutDashboard', 'Сложная планировка'],
      ['Layers', 'Толстые перекрытия'],
    ]

    return `
      <div class="page">
        ${topbar()}
        <section class="hero">
          <div class="container hero__inner">
            <div class="hero__content">
              <h1>Решения для улучшения покрытия и качества связи</h1>
              <p>Стабильная связь в каждом уголке офиса</p>
              <div class="hero__tags">
                ${['Без выезда инженера', 'Подключение за 1 день', 'Широкое покрытие', 'Быстрая покупка без бумаг']
                  .map((tag) => `<span class="hero__tag">${tag}</span>`)
                  .join('')}
              </div>
            </div>
          </div>
        </section>

        <section class="section section--page">
          <div class="container">
            ${sectionTitle('Сталкиваетесь с такими проблемами?')}
            <div class="grid grid--3 mt-10">
              ${painItems
                .map(
                  ([iconName, title, text]) => `
                    <article class="card pain-card">
                      <div class="icon-box">${icon(iconName)}</div>
                      <h3>${title}</h3>
                      <p>${text}</p>
                    </article>
                  `,
                )
                .join('')}
            </div>
          </div>
        </section>

        <section class="section section--white">
          <div class="container">
            ${sectionTitle('Готовые решения', 'Выберите подходящий вариант — инженер не нужен')}
            <div class="grid grid--tariffs mt-10">
              ${product.tariffs.map(tariffCard).join('')}
              ${consultCard()}
            </div>
            <div class="disclaimers">
              ${product.disclaimers
                .map((text) => `<div class="disclaimer">${icon('Info', 'icon', 14)}<span>${text}</span></div>`)
                .join('')}
            </div>
          </div>
        </section>

        <section class="section section--page">
          <div class="container">
            ${sectionTitle('Как это работает')}
            <div class="how-grid mt-10">
              ${workItems
                .map(
                  ([iconName, title, text], index) => `
                    <article class="tile">
                      ${icon(iconName, 'icon', 32)}
                      <h3>${title}</h3>
                      <p>${text}</p>
                    </article>
                    ${index < workItems.length - 1 ? `<div class="arrow-sep">${icon('ArrowRight')}</div>` : ''}
                  `,
                )
                .join('')}
            </div>
          </div>
        </section>

        <section class="section section--white">
          <div class="container">
            ${sectionTitle('Где это нужно', 'Реальные сценарии использования')}
            <div class="grid grid--5 mt-10">
              ${cases
                .map(
                  ([iconName, title]) => `
                    <article class="use-card">
                      ${icon(iconName, 'icon', 28)}
                      <p>${title}</p>
                    </article>
                  `,
                )
                .join('')}
            </div>
          </div>
        </section>
      </div>
    `
  }

  function sectionTitle(title, subtitle = '') {
    return `
      <div class="section-heading">
        <h2>${title}</h2>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
      </div>
    `
  }

  function tariffCard(tariff, index) {
    return `
      <div class="tariff-wrap" style="animation-delay:${index * 60}ms;">
        <div class="tariff-badge-slot">${tariff.popular ? '<span class="badge badge--brand">Популярный выбор</span>' : ''}</div>
        <article class="card card--interactive tariff-card">
          <h3>${tariff.name}</h3>
          <div class="price"><strong>${formatPrice(tariff.price)}</strong><span>руб./${tariff.period}</span></div>
          <ul class="feature-list">
            ${tariff.features.map((feature) => `<li>${icon('Check', 'icon green', 16)} ${feature}</li>`).join('')}
          </ul>
          <div class="ideal">Идеально для: ${tariff.idealFor}</div>
          <div class="tariff-card__cta">
            <button class="btn btn--primary btn--full" data-action="connect" data-tariff="${tariff.id}">Подключить</button>
          </div>
        </article>
      </div>
    `
  }

  function consultCard() {
    const items = [
      'Поможем подобрать решение',
      'Подключим тариф',
      'Поможем с нестандартными помещениями',
      'Проконсультируем по размещению оборудования',
      'Поможем с несколькими объектами',
    ]
    return `
      <div class="tariff-wrap" style="animation-delay:${product.tariffs.length * 60}ms;">
        <div class="tariff-badge-slot"></div>
        <article class="card card--interactive tariff-card consult-card">
          <div class="icon-box consult-card__icon">${icon('Phone')}</div>
          <h3>Нужна консультация?</h3>
          <p class="consult-card__lead">Поможем подобрать решение для сложного помещения или нескольких объектов.</p>
          <div class="consult-card__items">
            ${items.map((item) => `<div class="check-row">${icon('Check', 'icon green', 16)}<span>${item}</span></div>`).join('')}
          </div>
          <div class="tariff-card__cta">
            <button class="btn btn--secondary btn--full" data-action="open-lead">Оставить заявку</button>
          </div>
        </article>
      </div>
    `
  }

  function leadModal() {
    if (!state.lead.open) return ''
    const canSend = state.lead.phone.replace(/\D/g, '').length >= 11 && state.lead.inn.trim().length >= 5
    return `
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal__head">
            <h2>Заявка на консультацию</h2>
            <button class="btn btn--icon" data-action="close-lead" aria-label="Закрыть">${icon('X')}</button>
          </div>
          ${
            state.lead.sent
              ? `<div class="success-center">${icon('CheckCircle', 'icon', 40)}<h3>Заявка принята</h3><p>Перезвоним в ближайшее время</p></div>`
              : `
                ${field('lead-phone', 'Номер телефона', state.lead.phone, '+7 999 000-00-00')}
                ${field('lead-inn', 'ИНН организации', state.lead.inn, 'Введите ИНН')}
                <div class="form-actions"><button class="btn btn--primary btn--full" data-action="send-lead" ${canSend ? '' : 'disabled'}>Отправить</button></div>
              `
          }
        </div>
      </div>
    `
  }

  function otpModal() {
    if (!state.otp.open || !state.otp.tariff) return ''
    const code = state.otp.code.join('')
    return `
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal__head">
            <div>
              <p style="margin:0;color:var(--megafon-text-secondary);font-size:13px;">${product.name}</p>
              <h2 style="margin-top:4px;">Подключение тарифа</h2>
              <p class="modal__sub">${state.otp.tariff.name}</p>
            </div>
            <button class="btn btn--icon" data-action="close-otp" aria-label="Закрыть">${icon('X')}</button>
          </div>
          ${
            state.otp.success
              ? `<div class="success-center">${icon('CheckCircle', 'icon', 48)}<h3>Код подтвержден</h3><p>Переходим к оформлению заказа</p></div>`
              : state.otp.step === 'phone'
                ? `${field('otp-phone', 'Номер телефона', state.otp.phone, '+7 999 000-00-00')}
                   <div class="form-actions"><button class="btn btn--primary btn--full" data-action="otp-send">Получить код</button></div>`
                : `<p class="muted" style="font-size:14px;">Отправили SMS-код на номер <strong style="color:var(--megafon-text);">${state.otp.phone}</strong></p>
                   <div class="otp-code-grid">
                     ${[0, 1, 2, 3].map((i) => `<input class="otp-code" id="otp-code-${i}" data-otp-index="${i}" maxlength="1" value="${state.otp.code[i]}">`).join('')}
                   </div>
                   ${state.otp.error ? `<div class="error-text">${state.otp.error}</div>` : ''}
                   <div class="form-actions" style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
                     <button class="btn btn--primary" id="otp-confirm" data-action="otp-confirm" ${code.length < 4 ? 'disabled' : ''}>Подтвердить</button>
                     <button class="link-btn" id="otp-resend" data-action="otp-resend" ${state.otp.timer > 0 ? 'disabled' : ''}>${state.otp.timer > 0 ? `Повторить через ${state.otp.timer} сек` : 'Отправить еще раз'}</button>
                   </div>`
          }
        </div>
      </div>
    `
  }

  function field(id, label, value, placeholder, iconName = '') {
    return `
      <label class="field">
        <span>${label}</span>
        <span class="input-wrap">
          ${iconName ? `<span class="input-icon">${icon(iconName)}</span>` : ''}
          <input class="input ${iconName ? 'input--with-icon' : ''}" id="${id}" value="${String(value || '').replaceAll('"', '&quot;')}" placeholder="${placeholder || ''}">
        </span>
      </label>
    `
  }

  function checkoutPage() {
    const tariff = state.selectedTariff || product.tariffs[0]
    return `
      <div class="page">
        ${topbar()}
        <main class="checkout">
          <div class="container">
            <h1>Оформление заказа</h1>
            <div class="checkout-layout">
              <div class="checkout-main">
                ${state.checkout.otpNotice ? otpNotice() : ''}
                ${accordionStep(1, 'Данные покупателя', stepState(1), step1Summary(), step1Content())}
                ${accordionStep(2, product.step2.title, stepState(2), step2Summary(), step2Content())}
                ${accordionStep(3, 'Счет и оплата', state.checkout.orderPlaced ? 'active' : stepState(3), state.checkout.email, state.checkout.orderPlaced ? successContent() : step3Content())}
              </div>
              ${summaryPanel(tariff)}
            </div>
          </div>
        </main>
      </div>
    `
  }

  function otpNotice() {
    return `
      <div class="notice">
        ${icon('CheckCircle', 'icon green')}
        <div style="flex:1;min-width:0;">
          <h3>Создали для вас профиль МегаФон ID</h3>
          <p>Вы можете авторизоваться на сайте ПроБизнес. Данные для входа отправили в SMS.</p>
        </div>
        <button class="notice__close" data-action="hide-otp-notice" aria-label="Скрыть">${icon('X', 'icon', 14)}</button>
      </div>
    `
  }

  function summaryPanel(tariff) {
    return `
      <aside class="summary">
        <div class="summary__body">
          <p class="summary__label">Ваш заказ</p>
          <h2>${tariff.name}</h2>
          <p class="summary__details">${picoCountLabel(tariff.picoCount)} • ${tariff.area} кв.м.</p>
          <div class="divider"></div>
          <div class="price-row"><span>Абонентская плата</span><strong>${moneyPerMonth(tariff.price)}</strong></div>
        </div>
        <div class="summary__total"><span>Итого</span><strong>${moneyPerMonth(tariff.price)}</strong></div>
      </aside>
    `
  }

  function stepState(step) {
    if (state.checkout.currentStep === step) return 'active'
    if (state.checkout.completedSteps.includes(step)) return 'completed'
    return 'upcoming'
  }

  function accordionStep(number, title, status, summary, content) {
    const isActive = status === 'active'
    const isCompleted = status === 'completed'
    return `
      <section class="step-card step-card--${status}">
        <button class="step-head" data-action="${isCompleted ? 'edit-step' : ''}" data-step="${number}" ${status === 'upcoming' ? 'disabled' : ''}>
          <div>
            <div class="step-title">
              <span class="step-number ${isCompleted ? 'step-number--done' : ''}">${isCompleted ? icon('CheckCircle', 'icon', 16) : number}</span>
              <h2>${title}</h2>
            </div>
            ${isCompleted && summary ? `<p class="step-summary">${summary}</p>` : ''}
          </div>
          <span class="btn btn--icon">${icon(isActive ? 'ChevronUp' : 'ChevronDown', 'icon', 16)}</span>
        </button>
        ${isActive ? `<div class="step-content">${content}</div>` : ''}
      </section>
    `
  }

  function getOrgResults() {
    const query = state.checkout.companyQuery.trim().toLowerCase()
    if (query.length < 3 || state.checkout.companyData) return []
    return organizations.filter((item) => `${item.name} ${item.inn} ${item.city}`.toLowerCase().includes(query)).slice(0, 4)
  }

  function orgResultsMarkup() {
    const results = getOrgResults()

    if (!results.length) return ''

    return `
      <div class="org-results">
        ${results
          .map(
            (item) => `
              <button class="org-result" data-action="select-company" data-company="${item.id}">
                <span><strong>${item.name}</strong><span>ИНН ${item.inn}</span></span>
                <span>${item.city}</span>
              </button>
            `,
          )
          .join('')}
      </div>
    `
  }

  function updateOrgSearch() {
    const mount = document.getElementById('org-results-mount')
    if (mount) {
      mount.innerHTML = orgResultsMarkup()
    }

    updateStepButtons()
  }

  function updateStepButtons() {
    const step1 = document.querySelector('[data-action="complete-step1"]')
    if (step1) step1.disabled = !canCompleteStep1()

    const step2 = document.querySelector('[data-action="complete-step2"]')
    if (step2) step2.disabled = !canCompleteStep2()

    const order = document.querySelector('[data-action="place-order"]')
    if (order) order.disabled = !canPlaceOrder()
  }

  function step1Summary() {
    const company = state.checkout.companyData
    return company ? `${company.name}, ИНН ${company.inn}` : ''
  }

  function step1Content() {
    const company = state.checkout.companyData
    const isIp = company && company.buyerType === 'ip'
    return `
      <div class="form-stack">
        <div style="position:relative;">
          ${field('company-query', 'Организация или ИНН', state.checkout.companyQuery, 'Введите название или ИНН', 'Search')}
          <div id="org-results-mount">${orgResultsMarkup()}</div>
        </div>
        ${company ? companyCard(company) : ''}
        ${isIp ? ipPassportBlock() : ''}
        <button class="btn btn--primary" data-action="complete-step1" ${canCompleteStep1() ? '' : 'disabled'}>Продолжить</button>
      </div>
    `
  }

  function companyCard(company) {
    return `
      <div class="org-card">
        <div class="org-card__head">
          <div>
            <h3>${company.name}</h3>
            <div class="org-card__meta">
              <span>ИНН ${company.inn}</span>
              ${company.kpp ? `<span>КПП ${company.kpp}</span>` : ''}
              <span>ОГРН ${company.ogrn}</span>
            </div>
            <p>Руководитель: ${company.director}</p>
            <p>Юридический адрес: ${company.address}</p>
          </div>
          <button class="link-btn" data-action="change-company">Изменить</button>
        </div>
        <span class="badge badge--success" style="margin-top:16px;">${icon('CheckCircle', 'icon', 14)} Данные проверены</span>
      </div>
    `
  }

  function ipPassportBlock() {
    return `
      <div class="alert alert--info">
        ${icon('Info')}
        <div class="alert__body">
          <strong>Загрузите данные владельца ИП с помощью Госуслуг</strong>
          <p class="muted" style="margin:6px 0 0;">Авторизуйтесь в личном кабинете на Госуслугах, чтобы мы смогли сверить данные с ЕГРИП.</p>
          <button class="btn btn--secondary" style="margin-top:14px;min-height:36px;">Перейти в Госуслуги</button>
        </div>
      </div>
      <div>
        <strong style="font-size:14px;">Или вы можете:</strong>
        <ul style="margin:8px 0 0;padding-left:20px;font-size:13px;">
          <li>загрузить скан паспорта</li>
          <li><button class="link-btn" data-action="manual-passport">ввести данные вручную</button></li>
        </ul>
      </div>
      ${
        state.checkout.passportUploaded
          ? `<div class="file-row">
              <div class="file-row__meta">
                <div class="icon-box" style="width:40px;height:40px;">${icon('FileText')}</div>
                <div><strong style="font-size:14px;">Скан паспорта</strong><div class="muted" style="font-size:12px;">JPG, 2,5 МБ, файл загружен</div></div>
              </div>
              <button class="btn btn--icon" data-action="remove-passport">${icon('X', 'icon', 16)}</button>
            </div>`
          : `<button class="dropzone" data-action="upload-passport">
              ${icon('UploadCloud', 'icon', 32)}
              <span style="margin-top:12px;font-size:14px;"><strong class="green">Выберите файлы</strong> или переместите их сюда</span>
              <span class="muted" style="margin-top:8px;font-size:12px;">JPEG или PNG, не более 5 МБ</span>
            </button>`
      }
      ${state.checkout.passportManual || state.checkout.passportUploaded ? passportFields() : ''}
    `
  }

  function passportFields() {
    return `
      <div>
        <span class="badge badge--success">${icon('CheckCircle', 'icon', 14)} Данные распознаны</span>
        <div class="dense-grid">
          ${denseField('passport-lastName', 'Фамилия', state.checkout.passportData.lastName)}
          ${denseField('passport-firstName', 'Имя', state.checkout.passportData.firstName)}
          ${denseField('passport-patronymic', 'Отчество', state.checkout.passportData.patronymic)}
          ${denseField('passport-birthDate', 'Дата рождения', state.checkout.passportData.birthDate)}
          ${denseField('passport-birthPlace', 'Место рождения', state.checkout.passportData.birthPlace)}
          ${denseField('passport-series', 'Серия паспорта', state.checkout.passportData.series)}
          ${denseField('passport-number', 'Номер паспорта', state.checkout.passportData.number)}
          ${denseField('passport-issueDate', 'Дата выдачи', state.checkout.passportData.issueDate)}
          ${denseField('passport-issuedBy', 'Кем выдан', state.checkout.passportData.issuedBy)}
          ${denseField('passport-departmentCode', 'Код подразделения', state.checkout.passportData.departmentCode)}
        </div>
      </div>
    `
  }

  function denseField(id, label, value) {
    return `<label class="dense-input"><span>${label}<span style="color:var(--megafon-error);">*</span></span><input id="${id}" value="${value}"></label>`
  }

  function canCompleteStep1() {
    const company = state.checkout.companyData
    if (!company) return false
    if (company.buyerType !== 'ip') return true
    return state.checkout.passportUploaded || state.checkout.passportManual
  }

  function step2Summary() {
    if (!state.checkout.deliveryMethod) return 'Адрес установки оборудования'

    const method = {
      courier: 'Доставка курьером',
      pickup: 'Самовывоз',
    }[state.checkout.deliveryMethod]

    return `Адрес установки • ${method}`
  }

  function step2Content() {
    return `
      <div class="form-stack">
        ${installAddressBlock()}
        <div id="method-selector-mount">${methodSelector()}</div>
        <div id="delivery-pane-mount">${deliveryPane()}</div>
        <div id="delivery-info-mount">${deliveryInfoMarkup()}</div>
        <button class="btn btn--primary" data-action="complete-step2" ${canCompleteStep2() ? '' : 'disabled'}>Продолжить</button>
      </div>
    `
  }

  function installAddressBlock() {
    return `
      <div class="delivery-pane">
        ${field('install-address', 'Адрес установки *', state.checkout.installAddress, 'Санкт-Петербург, Невский проспект, 90', 'MapPin')}
        <div class="install-details-grid">
          ${field('install-floor', 'Этаж', state.checkout.installFloor, 'Например, 5')}
          ${field('install-office', 'Номер офиса', state.checkout.installOffice, 'Например, 512')}
        </div>
      </div>
    `
  }

  function methodSelector() {
    return `
      <div class="method-grid">
        ${methodCard('courier', 'Truck', 'Доставка', 'Бесплатно, доставим когда удобно')}
        ${methodCard('pickup', 'Package', 'Самовывоз', 'Заберите в удобном офисе МегаФон')}
      </div>
    `
  }

  function methodCard(id, iconName, title, text) {
    const selected = state.checkout.deliveryMethod === id
    return `
      <button class="method-card ${selected ? 'method-card--selected' : ''}" data-action="set-delivery-method" data-method="${id}">
        <span class="icon-box" style="width:40px;height:40px;${selected ? 'background:white;color:var(--megafon-green);' : ''}">${icon(iconName)}</span>
        <span style="flex:1;min-width:0;"><h3>${title}</h3><p>${text}</p></span>
        ${selected ? icon('Check', 'icon green') : ''}
      </button>
    `
  }

  function deliveryInfoMarkup() {
    if (!state.checkout.deliveryMethod) return ''
    return `<div><span class="info-pill">${icon('UserRound', 'icon', 16)} Для получения заказа потребуется оригинал паспорта</span></div>`
  }

  function deliveryPane() {
    if (!state.checkout.deliveryMethod) return ''

    if (state.checkout.deliveryMethod === 'courier') {
      return `
        <div class="delivery-pane">
          ${field('delivery-address', 'Адрес доставки *', state.checkout.deliveryAddress, 'Санкт-Петербург, Невский проспект, 90', 'MapPin')}
          <div class="alert alert--warning">${icon('AlertTriangle')}<div class="alert__body">${product.step2.courierNote}</div></div>
          <div class="delivery-date-section">
            <div class="section-label">${icon('CalendarDays', 'icon', 16)} Желаемая дата доставки</div>
            <div class="date-grid">${buildDates().map((date) => `<button class="date-btn ${state.checkout.selectedDate === date.id ? 'date-btn--active' : ''}" data-action="select-date" data-date="${date.id}">${date.label}</button>`).join('')}</div>
            <div class="slot-list">${timeSlots.map((slot) => `<button class="slot-btn ${state.checkout.selectedSlot === slot ? 'slot-btn--active' : ''}" data-action="select-slot" data-slot="${slot}">${slot}</button>`).join('')}</div>
          </div>
          ${receiverBlock('Данные получателя')}
        </div>
      `
    }

    return `
      <div class="delivery-pane">
        <div class="pickup-list">
          ${pickupPoints
            .map(
              (point) => `
                <button class="pickup-card ${state.checkout.pickupPoint === point.id ? 'pickup-card--active' : ''}" data-action="select-pickup" data-pickup="${point.id}">
                  <span class="radio-dot"></span>
                  <span><strong style="font-size:14px;">${point.address}</strong><span class="muted" style="display:block;margin-top:4px;font-size:13px;">${point.hours}</span></span>
                </button>
              `,
            )
            .join('')}
        </div>
        ${receiverBlock('Данные получателя')}
      </div>
    `
  }

  function receiverBlock(title) {
    return `
      <div class="form-stack" style="gap:16px;">
        <h3 style="margin:0;font-size:15px;">${title}</h3>
        <label class="checkbox-row"><input type="checkbox" id="same-receiver" ${state.checkout.sameReceiver ? 'checked' : ''}> Совпадают с данными покупателя</label>
        <div id="receiver-fields-mount">${receiverFieldsMarkup()}</div>
      </div>
    `
  }

  function receiverFieldsMarkup() {
    return state.checkout.sameReceiver
      ? `<div class="receiver-grid">
          ${readonlyField('Имя', 'Константин')}
          ${readonlyField('Фамилия', 'Константинопольский')}
          ${readonlyField('Отчество', 'Константинович')}
          ${readonlyField('Номер телефона', '+7 (930) 811-12-99')}
        </div>`
      : `<div class="receiver-grid">
          ${field('receiver-firstName', 'Имя *', state.checkout.receiver.firstName, '')}
          ${field('receiver-lastName', 'Фамилия *', state.checkout.receiver.lastName, '')}
          ${field('receiver-patronymic', 'Отчество', state.checkout.receiver.patronymic, '')}
          ${field('receiver-phone', 'Телефон *', state.checkout.receiver.phone, '')}
        </div>`
  }

  function updateReceiverFields() {
    const mount = document.getElementById('receiver-fields-mount')
    if (mount) {
      mount.innerHTML = receiverFieldsMarkup()
    }
    updateStepButtons()
  }

  function updateDeliverySection() {
    const methodMount = document.getElementById('method-selector-mount')
    const paneMount = document.getElementById('delivery-pane-mount')
    const infoMount = document.getElementById('delivery-info-mount')

    if (methodMount) methodMount.innerHTML = methodSelector()
    if (paneMount) paneMount.innerHTML = deliveryPane()
    if (infoMount) infoMount.innerHTML = deliveryInfoMarkup()

    updateStepButtons()
  }

  function readonlyField(label, value) {
    return `<div class="readonly-field"><span>${label}</span><strong>${value}</strong></div>`
  }

  function canCompleteStep2() {
    const receiverReady =
      state.checkout.sameReceiver ||
      (state.checkout.receiver.firstName.trim() && state.checkout.receiver.lastName.trim() && state.checkout.receiver.phone.trim())
    if (!state.checkout.installAddress.trim()) return false
    if (!state.checkout.deliveryMethod) return false
    if (state.checkout.deliveryMethod === 'courier') return state.checkout.deliveryAddress.trim() && state.checkout.selectedDate && state.checkout.selectedSlot && receiverReady
    return state.checkout.deliveryMethod === 'pickup' && state.checkout.pickupPoint && receiverReady
  }

  function step3Content() {
    return `
      <div class="form-stack">
        ${field('invoice-email', 'Укажите почту для отправки счета', state.checkout.email, 'user@mail.com')}
        <ul class="payment-list">
          <li>Для заключения договора достаточно оплатить счет — никаких бумаг не потребуется</li>
          <li>Оплачивайте только с расчетного счета организации, указанной в заказе</li>
          <li>Оплатите счет в течение 10 дней</li>
          <li>После оплаты с вами свяжется специалист, чтобы согласовать дату и время доставки</li>
        </ul>
        <div class="step-action-block">
          <button class="btn btn--primary" data-action="place-order" ${canPlaceOrder() ? '' : 'disabled'}>Оформить заказ</button>
          <p class="legal">Нажимая на кнопку, вы соглашаетесь с условиями предоставления услуги и принимаете оферту.</p>
        </div>
      </div>
    `
  }

  function canPlaceOrder() {
    return state.checkout.email.includes('@')
  }

  function successContent() {
    const message = product.successMessage.replace('{email}', state.checkout.email || 'указанную почту')
    return `
      <div class="success-center">
        ${icon('CheckCircle', 'icon', 48)}
        <h3>${product.successTitle}</h3>
        <p>${message}</p>
        <div style="margin-top:24px;">
          <button class="btn btn--primary btn--full" data-action="download-invoice" ${state.checkout.invoiceDownload === 'done' ? 'disabled' : ''}>
            ${state.checkout.invoiceDownload === 'loading' ? icon('Loader2', 'icon spinner', 16) : ''}
            ${state.checkout.invoiceDownload === 'done' ? icon('CheckCircle', 'icon', 16) : ''}
            ${state.checkout.invoiceDownload === 'done' ? 'Счет скачан' : 'Скачать счет'}
            ${state.checkout.invoiceDownload === 'idle' ? icon('Download', 'icon', 16) : ''}
          </button>
        </div>
        <div class="success-actions">
          <button class="btn btn--secondary btn--full" data-action="route" data-route="/">На главную</button>
          <a class="btn btn--secondary btn--full" href="https://b2b.megafon.ru" target="_blank">Перейти в МегаФон ID ${icon('ArrowRight', 'icon', 16)}</a>
        </div>
      </div>
    `
  }

  function buildDates() {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
    })
    return Array.from({ length: 5 }, (_, index) => {
      const date = new Date()
      date.setDate(date.getDate() + index + 1)
      const label = formatter.format(date).replace('.', '')
      return {
        id: date.toISOString().slice(0, 10),
        label: label.charAt(0).toUpperCase() + label.slice(1),
      }
    })
  }

  function completeStep(step, nextStep) {
    if (!state.checkout.completedSteps.includes(step)) {
      state.checkout.completedSteps.push(step)
    }
    state.checkout.currentStep = nextStep || step
  }

  function resetOtp(tariff) {
    window.clearInterval(state.otp.interval)
    window.clearInterval(state.otp.watchdog)
    state.otp = {
      open: true,
      tariff,
      step: 'phone',
      phone: '+7 ',
      code: ['', '', '', ''],
      timer: 60,
      interval: null,
      watchdog: null,
      error: '',
      success: false,
      submitting: false,
    }
  }

  function startOtpTimer() {
    window.clearInterval(state.otp.interval)
    state.otp.timer = 60
    updateOtpTimer()
    state.otp.interval = window.setInterval(() => {
      state.otp.timer -= 1
      if (state.otp.timer <= 0) {
        window.clearInterval(state.otp.interval)
      }
      updateOtpTimer()
    }, 1000)
  }

  function updateOtpTimer() {
    const resend = document.getElementById('otp-resend')
    if (!resend) return

    resend.disabled = state.otp.timer > 0
    resend.textContent = state.otp.timer > 0 ? `Повторить через ${state.otp.timer} сек` : 'Отправить еще раз'
  }

  function updateOtpConfirm() {
    const confirm = document.getElementById('otp-confirm')
    if (!confirm) return

    confirm.disabled = readOtpCode().length < 4
  }

  function startOtpWatchdog() {
    window.clearInterval(state.otp.watchdog)
    state.otp.watchdog = window.setInterval(() => {
      if (!state.otp.open || state.otp.step !== 'code' || state.otp.success) {
        window.clearInterval(state.otp.watchdog)
        return
      }

      updateOtpConfirm()

      if (readOtpCode().length === 4) {
        submitOtp()
      }
    }, 200)
  }

  function readOtpCode() {
    const fields = [0, 1, 2, 3].map((index) => document.getElementById(`otp-code-${index}`))

    if (fields.every(Boolean)) {
      const code = fields.map((field) => field.value.replace(/\D/g, '').slice(-1)).join('')
      state.otp.code = code.split('').concat(['', '', '', '']).slice(0, 4)
      return code
    }

    return state.otp.code.join('')
  }

  document.addEventListener('pointerup', (event) => {
    const target = event.target.closest('[data-action]')
    if (!target || target.dataset.action !== 'otp-confirm' || target.disabled) return

    submitOtp()
  })

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]')
    if (!target) return

    const action = target.dataset.action

    if (action === 'route') {
      routeTo(target.dataset.route)
    }

    if (action === 'connect') {
      const tariff = product.tariffs.find((item) => item.id === target.dataset.tariff)
      resetOtp(tariff)
      renderOverlays()
    }

    if (action === 'close-otp') {
      window.clearInterval(state.otp.interval)
      state.otp.open = false
      renderOverlays()
    }

    if (action === 'otp-send') {
      state.otp.step = 'code'
      state.otp.error = ''
      renderOverlays()
      startOtpTimer()
      startOtpWatchdog()
      window.setTimeout(() => document.getElementById('otp-code-0')?.focus(), 0)
    }

    if (action === 'otp-confirm') {
      submitOtp()
    }

    if (action === 'otp-resend') {
      state.otp.error = ''
      state.otp.code = ['', '', '', '']
      renderOverlays()
      startOtpTimer()
      startOtpWatchdog()
    }

    if (action === 'open-lead') {
      state.lead.open = true
      state.lead.sent = false
      renderOverlays()
    }

    if (action === 'close-lead') {
      state.lead.open = false
      renderOverlays()
    }

    if (action === 'send-lead') {
      state.lead.sent = true
      renderOverlays()
    }

    if (action === 'select-company') {
      const company = organizations.find((item) => item.id === target.dataset.company)
      state.checkout.companyData = company
      state.checkout.companyQuery = company.name
      state.checkout.buyerType = company.buyerType
      render()
    }

    if (action === 'change-company') {
      state.checkout.companyData = null
      render()
    }

    if (action === 'manual-passport') {
      state.checkout.passportManual = true
      render()
    }

    if (action === 'upload-passport') {
      state.checkout.passportUploaded = true
      state.checkout.passportManual = true
      state.checkout.passportData = { ...defaultPassport }
      render()
    }

    if (action === 'remove-passport') {
      state.checkout.passportUploaded = false
      render()
    }

    if (action === 'complete-step1' && canCompleteStep1()) {
      completeStep(1, 2)
      render()
    }

    if (action === 'edit-step') {
      state.checkout.currentStep = Number(target.dataset.step)
      render()
    }

    if (action === 'set-delivery-method') {
      state.checkout.deliveryMethod = target.dataset.method
      if (state.checkout.deliveryMethod === 'pickup' && !state.checkout.pickupPoint) {
        state.checkout.pickupPoint = pickupPoints[0].id
      }
      updateDeliverySection()
    }

    if (action === 'select-date') {
      state.checkout.selectedDate = target.dataset.date
      updateDeliverySection()
    }

    if (action === 'select-slot') {
      state.checkout.selectedSlot = target.dataset.slot
      updateDeliverySection()
    }

    if (action === 'select-pickup') {
      state.checkout.pickupPoint = target.dataset.pickup
      updateDeliverySection()
    }

    if (action === 'complete-step2' && canCompleteStep2()) {
      completeStep(2, 3)
      render()
    }

    if (action === 'place-order' && canPlaceOrder()) {
      state.checkout.orderPlaced = true
      completeStep(3, 3)
      render()
    }

    if (action === 'download-invoice') {
      state.checkout.invoiceDownload = 'loading'
      render()
      window.setTimeout(() => {
        state.checkout.invoiceDownload = 'done'
        render()
      }, 1500)
    }

    if (action === 'hide-otp-notice') {
      state.checkout.otpNotice = false
      render()
    }
  })

  document.addEventListener('input', (event) => {
    const id = event.target.id

    if (id === 'lead-phone') state.lead.phone = event.target.value
    if (id === 'lead-inn') state.lead.inn = event.target.value
    if (id === 'otp-phone') state.otp.phone = event.target.value
    if (id === 'company-query') {
      state.checkout.companyQuery = event.target.value
      state.checkout.companyData = null
      updateOrgSearch()
      return
    }
    if (id === 'install-address') {
      state.checkout.installAddress = event.target.value
      updateStepButtons()
      return
    }
    if (id === 'install-floor') {
      state.checkout.installFloor = event.target.value
      return
    }
    if (id === 'install-office') {
      state.checkout.installOffice = event.target.value
      return
    }
    if (id === 'delivery-address') {
      state.checkout.deliveryAddress = event.target.value
      updateStepButtons()
      return
    }
    if (id === 'receiver-firstName') {
      state.checkout.receiver.firstName = event.target.value
      updateStepButtons()
      return
    }
    if (id === 'receiver-lastName') {
      state.checkout.receiver.lastName = event.target.value
      updateStepButtons()
      return
    }
    if (id === 'receiver-patronymic') {
      state.checkout.receiver.patronymic = event.target.value
      return
    }
    if (id === 'receiver-phone') {
      state.checkout.receiver.phone = event.target.value
      updateStepButtons()
      return
    }
    if (id === 'invoice-email') {
      state.checkout.email = event.target.value
      updateStepButtons()
      return
    }

    if (id.startsWith('passport-')) {
      const key = id.replace('passport-', '')
      state.checkout.passportData[key] = event.target.value
      updateStepButtons()
      return
    }

    if (event.target.hasAttribute('data-otp-index')) {
      const index = Number(event.target.dataset.otpIndex)
      const digit = event.target.value.replace(/\D/g, '').slice(-1)
      state.otp.code[index] = digit
      event.target.value = digit
      if (digit && index < 3) {
        document.getElementById(`otp-code-${index + 1}`)?.focus()
      }
      updateOtpConfirm()
      if (state.otp.code.join('').length === 4) {
        submitOtp()
        return
      }
    }

    if (
      [
        'lead-phone',
        'lead-inn',
        'company-query',
        'install-address',
        'delivery-address',
        'receiver-firstName',
        'receiver-lastName',
        'receiver-phone',
        'invoice-email',
      ].includes(id)
    ) {
      renderWithFocus(id)
    }
  })

  document.addEventListener('change', (event) => {
    if (event.target.id === 'same-receiver') {
      state.checkout.sameReceiver = event.target.checked
      updateReceiverFields()
    }
  })

  function renderWithFocus(id) {
    const cursor = document.getElementById(id)?.selectionStart || 0
    if (id === 'lead-phone' || id === 'lead-inn' || id === 'otp-phone') {
      renderOverlays()
    } else {
      render()
    }
    const input = document.getElementById(id)
    if (input) {
      input.focus()
      input.setSelectionRange(cursor, cursor)
    }
  }

  function submitOtp() {
    if (state.otp.submitting) return

    const code = readOtpCode()
    if (code === '0000') {
      state.otp.error = 'Неверный код. Попробуйте еще раз'
      renderOverlays()
      return
    }
    if (code.length < 4) return

    state.otp.submitting = true
    state.otp.success = true
    state.otp.error = ''
    window.clearInterval(state.otp.interval)
    window.clearInterval(state.otp.watchdog)
    storeTariff(state.otp.tariff)
    renderOverlays()
    window.setTimeout(() => {
      state.otp.open = false
      state.checkout = createCheckoutState()
      state.checkout.otpNotice = true
      routeTo('/checkout/picocells')
    }, 450)
  }

  window.addEventListener('hashchange', render)

  if (getRoute().startsWith('/checkout/')) {
    routeTo('/picocells')
  } else if (!window.location.hash) {
    window.location.hash = '/'
  } else {
    render()
  }
})()
