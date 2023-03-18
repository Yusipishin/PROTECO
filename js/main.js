let tab = function () {
  tabNav = document.querySelectorAll(".brands__item");
  tabContent = document.querySelectorAll(".brands__content");
  tabName = document.querySelector(".is-active");

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  };

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
    })
  }

  // selector of all videos on the page
  const videos = document.querySelectorAll('.video__yt');

  // generate video url
  let generateUrl = function (id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  };

  // creating iframe
  let createIframe = function (id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('src', generateUrl(id));

    return iframe;
  };

  // main code
  videos.forEach((el) => {
    let videoHref = el.getAttribute('data-video');
    let deletedLength = 'https://youtu.be/'.length;
    let videoId = videoHref.substring(deletedLength, videoHref.length);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      let iframe = createIframe(videoId);
      el.querySelector('img').remove();
      el.appendChild(iframe);
      el.querySelector('button').remove();
    });
  });

};

tab();

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999 99 - 99');
im.mask(inputs);

$(document).ready(function () {
  $('.news__slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    easing: 'ease',
    draggable: false,
  });
})

$(document).ready(function () {
  $('.team__slider').slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
  });
})

var arrLang = {
  'en': {
    'contact': 'Contact Us',
    'gk': 'GK PROTEKO',
    'flagship': 'The flagship of the Russian medical market',
    'down': 'down',
    'target-1': 'Our main goal',
    'target-2': 'is to take care of customers',
    'target-3': 'and improve their quality of life!',
    'mission-1': 'company',
    'mission-2': 'mission',
    'target-main-1': "“PROTEKO Group is a reliable partner in the medical market of Russia, the CIS and the Baltic States for manufacturers, distributors and end users of medical products, which is confirmed by more than 15 years of the Company's success story.",
    'target-main-2': "The Company's products are always distinguished by consistently high quality, absolute safety and advanced technologies, complemented by a deep understanding of our Customers needs and an advanced training system.”",
    'aliev': 'Aliev A.A.,',
    'president': 'President of the Proteco Group',
    'brands': 'exclusive brands',
    'years': 'years of effective work',
    'network': 'Wide distribution network',
    'area': 'Own production site',
    'centers': 'Own training centers',
    'companies': 'Companies',
    'also': 'more about the company',
    'glomaco-txt': '- this is its own certified chemical production with an implemented Quality Management System according to ISO 9001-2015 and ISO 13485-2011 standards, carries out the development, technology transfer, production and quality control of products both of its own brands and as contract production',
    'proteco-txt': 'A wholesale company with a wide distribution network, a strong commercial policy and a built-in promotion system in Russia and the CIS and Baltic countries',
    'brands': 'Brands',
    'brands-1': '- this is a well-known chemical concern with more than a century of history. Since 1978, the company has been producing and developing unique innovative products, making a great contribution to the development of the dental industry worldwide.Composites, adhesives, prosthesis substitutes are presented on the Russian market. The product range is constantly expanding.',
    'brands-2': 'Far, far beyond the verbal mountains, fish texts live in the land of vowels and consonants. Rolled down the title manuscript, his points better belted his native decided to advertise the country whose offers come back the necessary agency about has it.',
    'brands-3': 'Far, far beyond the verbal mountains, fish texts live in the land of vowels and consonants. Knock off all our comma belt cities, for the name before lorem. Straight manuscript continued, Oxmox back, his own, decided my italics about the safe way it is advertising rules!',
    'brands-4': 'Far, far beyond the mountains of words, fish texts live in the land of vowels and consonants. Which one can knock me down? The look, the mouth is the only one. Our headline lured her compiler his cursive fishy look on his cheek, the first ipsum of me points lives rolled ocean line! Texts dropped the mouth of the alley.',
    'brands-5': 'Far, far beyond the verbal mountains in the land of vowels and consonants live fish texts. His grammar sense started wild manuscripts warned the non-morphographic on the shore of the speech, having obeyed the insidious they, for advertising his my safe letter city paradigmatic little of their own. For, insidious belted his capital but the road subtitle question times.',
    'brands-6': "Far, far beyond the verbal mountains in the land of vowels and consonants live fish texts. Lives, text lane. Which is the initial of the city, the letter city. The dots are my image, the comma of life is seven commas, the semantics of which punctuation is useless, the capital letters are rewritten better than the city cheek for me, one all of its paradigmatic wild power of the text lives by everyone. You're a paradigmatic babble!",
    'see': 'View the catalog',
    'partnership': 'partnership',
    'with-gk': 'with GK Proteco',
    'your-gk': 'GK PROTECO - Your',
    'partner': 'reliable partner',
    'market': 'on the Russian medical market',
    'partner-1': 'Effective product registration system in the Russian Federation and the CIS and Baltic countries',
    'partner-2': 'Wholesale distribution throughout the territory of the Russian Federation and the CIS and Baltic countries',
    'partner-3': 'Unique brand management and field promotion system',
    'partner-4': 'Contract production at a certified production site with an implemented Quality Management System',
    'partner-5': 'Availability of a pharmaceutical license',
    'send': 'To send',
    'agree': 'By submitting your personal data, you agree to the',
    'agree-pol': 'privacy Policy',
    'video': 'Video',
    'dezaurum': '"Dezaurum®" is the gold standard of disinfection!',
    'msg': 'Dear customers! We are glad to inform you that GLOMAKO has launched the production of a line of disinfectants…',
    'news': 'News',
    'data-1': '18 October 2020',
    'data-2': '20 September 2020',
    'data-3': '11 September 2020',
    'slide-1': 'Get acquainted with the information about our guaranteed provision of basic sanitary and hygienic requirements in our work',
    'slide-2': 'Briefly about the last international dental forum and exhibition "Dental Expo 2020"',
    'slide-3': 'Great news! Estelite Bulk Fill Flow and Estelite Universal Flow are already in Russia!',
    'with-us': 'with us',
    'career': 'Career',
    'gk-is': 'GK PROTEKO is',
    'team': 'a team of active like-minded people',
    'for-which': ', for which there is no concept of «impossible».',
    'luck': 'The success of a company is determined by the success of its employees. We create all conditions both for the development of young specialists and for the realization of the potential of experienced experts through a mentoring system, corporate training and participation in the implementation of complex and ambitious projects.',
    'join': 'We value our employees and take care of them. Join our friendly team!',
    'see-jobs': 'View vacancies',
    'team-txt-1': '“I joined GK PROTECO almost 5 years ago as a database administrator.',
    'team-txt-2': 'At first it was hard — a large number of tasks that I had never done before.',
    'team-txt-3': 'However, it is customary here to trust each other and let them solve complex and interesting tasks, and this inspires and motivates.',
    'team-txt-4': "Our team is generally a separate topic, it is very comfortable to work here. It's like being at home here, and you can always count on valuable advice and support from colleagues.”",
    'name': 'Kovalev Denis',
    'post': 'head of database administration department',
    'geograph': 'Geography and',
    'contacts': 'contacts',
    'office': 'The head office of the PROTEKO Group is located',
    'in-Sanct': 'in St. Petersburg',
    'Sanct': 'Saint-Petersburg',
    'address': 'Varshavskaya str., 5, bldg. 2, office 401, business center "Varshavsky"',
    'processing': 'Consent to the processing of personal data',
    'politic': 'Privacy policy',
    'link-1': 'Main',
    'link-2': 'About the company',
    'link-3': 'Directions',
    'link-4': 'Brands',
    'link-5': 'News',
    'link-6': 'Career',
    'link-7': 'Contacts',
    'comp-groups': 'Group companies',
    'compliance-1': 'Compliance with sanitary',
    'compliance-2': 'and hygienic requirements',
    'height-1': 'Designed at',
    'height-2': 'HEIGHT',
  },
  'ru': {
    'contact': 'Связаться с нами',
    'gk': 'ГК ПРОТЕКО',
    'flagship': 'Флагман медицинского рынка России',
    'down': 'вниз',
    'target-1': 'Наша главная цель –',
    'target-2': ' забота о клиентах',
    'target-3': ' и повышение качества их жизни!',
    'mission-1': 'Миссия',
    'mission-2': 'компании',
    'target-main-1': '“ГК ПРОТЕКО является надежным партнером на медицинском рынке России, стран СНГ и Балтии для производителей, дистрибьюторов и конечных потребителей продукции медицинского назначения, что подтверждается более чем 15-летней историей успеха Компании.',
    'target-main-2': 'Продукцию Компании всегда отличает неизменно высокое качество, абсолютная безопасность и передовые технологии, дополненные глубоким пониманием потребностей наших Клиентов и продвинутой системой обучения.”',
    'aliev': 'Алиев А.А.,',
    'president': 'Президент Proteco Group',
    'brands': 'эксклюзивных брендов',
    'years': 'лет эффективной работы',
    'network': 'Широкая дистрибьюторская сеть',
    'area': 'Собственная производственная площадка',
    'centers': 'Собственные учебные центры',
    'companies': 'Компании',
    'also': 'подробнее о компании',
    'glomaco-txt': '- это собственное сертифицированное химическое производство с внедренной Системой Менеджмента Качества по стандартам ISO 9001-2015 и ISO 13485-2011 осуществляет разработку, трансфер технологий, производство и контроль качества продукции как собственных брендов, так и в качестве контрактного производства',
    'proteco-txt': 'Оптовая компания с широкой дистрибьюторской сетью, сильной коммерческой политикой и выстроенной системой продвижения на территории России и стран СНГ и Балтии',
    'brands': 'Бренды',
    'brands-1': '- это широко известный химический концерн с более чем вековой историей. Начиная с 1978 года компания производит и разрабатывает уникальные инновационные продукты, внося большой вклад в развитие стоматологической индустрии во всем мире.На российском рынке представлены композиты, адгезивы, заменители протезов. Ассортимент продукции постоянно расширяется.',
    'brands-2': 'Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Скатился заглавных рукопись, свой точках лучше подпоясал родного своих решила рекламных страна предложения которой возвращайся необходимыми агентство о имеет его.',
    'brands-3': 'Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Сбить от всех наш пояс запятых города, за имени до lorem. Прямо рукопись продолжил, оксмокс назад, свой, решила моей курсивных о безопасную это рекламных правилами дорогу!',
    'brands-4': 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Меня которое которой сбить? Взгляд, рот единственное. Наш заголовок заманивший ее составитель своих курсивных рыбного взгляд свое щеке, первую ipsum меня точках живет скатился океана строчка! Текстов бросил рот переулка.',
    'brands-5': 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Свою грамматики толку пустился диких рукописи предупредила безорфографичный на берегу речью пор послушавшись коварный они, за рекламных свой его моей безопасную буквоград парадигматическая маленькая своих своего. За, коварный подпоясал свою заглавных но дорогу подзаголовок вопрос раз.',
    'brands-6': 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Живет, переулка текст. Которой инициал города безопасную буквоград. Точках образ свой, запятой жизни семь запятых семантика домах которой толку пунктуация, заглавных переписывается лучше города щеке за меня одна все своего парадигматическая диких власти текста всеми живет. Ты необходимыми журчит парадигматическая!',
    'see': 'Смотреть каталог',
    'partnership': 'партнерство',
    'with-gk': 'с ГК Протеко',
    'your-gk': 'ГК ПРОТЕКО - Ваш',
    'partner': 'надежный партнер',
    'market': 'на медицинском рынке России',
    'partner-1': 'Эффективная система регистрации продукции в РФ и странах СНГ и Балтии',
    'partner-2': 'Оптовая дистрибьюция по всей территории РФ и странам СНГ и Балтии',
    'partner-3': 'Уникальная система управления брендами и полевого продвижения',
    'partner-4': 'Контрактное производство на сертифицированной производственной площадке с внедренной Системой Менеджмента Качества',
    'partner-5': 'Наличие фармацевтической лицензии',
    'send': 'Отправить',
    'agree': 'Отправляя свои личные данные, вы соглашаетесь с ',
    'agree-pol': 'политикой конфиденциальности',
    'video': 'Видео',
    'dezaurum': '«Dezaurum®» — золотой стандарт дезинфекции!',
    'msg': 'Уважаемые клиенты! Рады вам сообщить, что компания ГЛОМАКО запустила производство линейки дезинфицирующих…',
    'news': 'Новости',
    'data-1': '18 октября 2020',
    'data-2': '20 сентября 2020',
    'data-3': '11 сентября 2020',
    'slide-1': 'Познакомьтесь с информацией о гарантированном обеспечении нами базовых санитарно- гигиенических требований в нашей работе',
    'slide-2': 'Коротко о прошедшем международном стоматологическом форуме и выставке «Дентал Экспо 2020»',
    'slide-3': 'Отличная новость! Estelite Bulk Fill Flow и Estelite Universal Flow уже в России!',
    'with-us': 'с нами',
    'career': 'Карьера',
    'gk-is': 'ГК ПРОТЕКО – это',
    'team': 'команда активных единомышленников',
    'for-which': ', для которых не существует понятия «невозможно».',
    'luck': 'Успех компании определяется успехами ее сотрудников. Мы создаем все условия как для развития молодых специалистов, так и для реализации потенциала опытных экспертов через систему наставничества, корпоративное обучение и участие в реализации сложных и амбициозных проектов.',
    'join': 'Мы ценим наших сотрудников и заботимся о них. Присоединяйтесь к нашему дружному коллективу!',
    'see-jobs': 'Смотреть вакансии',
    'team-txt-1': '“Я пришёл в ГК ПРОТЕКО почти 5 лет назад на позицию администратора баз данных. ',
    'team-txt-2': 'Сначала было тяжело — большое количество задач, которыми я до этого никогда не занимался.',
    'team-txt-3': 'Однако, здесь принято доверять друг другу и давать решать сложные и интересные задачи, а это вдохновляет и мотивирует. ',
    'team-txt-4': 'Наш коллектив — это вообще отдельная тема, здесь очень комфортно работать. Тут ты как дома, и всегда можешь рассчитывать на ценный совет и поддержку коллег”',
    'name': 'Ковалев Денис',
    'post': 'начальник отдела администрирования баз данных',
    'geograph': 'География и ',
    'contacts': 'контакты',
    'office': 'Головной офис ГК ПРОТЕКО располагается',
    'in-Sanct': 'в Санкт-Петербурге',
    'Sanct': 'Санкт-Петербург',
    'address': 'ул. Варшавская, д.5, корп. 2, офис 401, БЦ "Варшавский"',
    'processing': 'Согласие на обработку персональных данных',
    'politic': 'Политика конфиденциальности',
    'link-1': 'Главная',
    'link-2': 'О компании',
    'link-3': 'Направления',
    'link-4': 'Бренды',
    'link-5': 'Новости',
    'link-6': 'Карьера',
    'link-7': 'Контакты',
    'comp-groups': 'Компании группы',
    'compliance-1': 'Соблюдение санитарно-',
    'compliance-2': 'гигиенических требований',
    'height-1': 'Разработано на',
    'height-2': 'ВЫСОТЕ',
  }
}

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');
    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
  $('.header__burger-btn').click(function () {
    document.getElementById('burger-menu').classList.toggle("open");
  });
  $('.header__lang-en').click(function () {
    document.getElementById('ru').classList.add("no-active");
    document.getElementById('en').classList.remove("no-active");
    $('.fio').attr('placeholder', 'FIO');
    $('.tel').attr('placeholder', '+44 (___) ___ __ - __');
    em = new Inputmask('+44 (999) 999 99 - 99');
    em.mask(inputs);
    $('.advice').attr('placeholder', 'Your advice');
  });
  $('.header__lang-ru').click(function () {
    document.getElementById('ru').classList.remove("no-active");
    document.getElementById('en').classList.add("no-active");
    $('.fio').attr('placeholder', 'ФИО');
    $('.tel').attr('placeholder', '+7 (___) ___ __ - __');
    im = new Inputmask('+7 (999) 999 99 - 99');
    im.mask(inputs);
    $('.advice').attr('placeholder', 'Ваше предложение');
  });
});