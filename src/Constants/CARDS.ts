
type TDomenName = string
export const DOMEN_NAME: TDomenName = "https://www.alfabank.by/upload/resize_cache/webp/iblock/"

interface CardState  {
  name?: string
  id:number;
  title: string;
  subTitle?: string;
  list?: string;
  list2?: string;
  image: string;

}

export const CARDS: CardState[]  = [
  { 
    name: 'Top',
    id: 1,
    title:"Карта <<100 дней>>" ,
    subTitle: "Выгодная карта на каждый день",
    list:"100 дней под 0,00000001% годовых",
    list2:"Любые покупки и снятие наличных",
    image:`${DOMEN_NAME}794/kross.webp`
  },
  {
    name: 'Top',
    id:2,
    title:"Переводы с карты на карту" ,
    list:"Во все банки Беларуси и в 91 страну мира",
    list2:" 0% - на карты Альфа-Банка",
    image:`${DOMEN_NAME}21f/trasfer-card2card.webp`
  },
    { 
      name: 'Top',
      id:3,
      title:"Приличные на личное" ,
      subTitle: "Деньги на любые цели всегда, когда нужно!",
      list:"Под 20,5% годовых",
      list2:"До 15 000 BYN",
      image:`${DOMEN_NAME}bbd/credits-prosto-dengi.webp`
    },
    {
      name: 'Top',
      id:4,
      title:"Стиль и выгода с картами Пакетов решений" ,
      list:"Онлайн-оформление и бесплатная доставка",
      list2:"До 3 карт в нужной валюте",
      image:`${DOMEN_NAME}733/ext.webp`
    },
    {
      name: 'Top',
      id:5,
      title:"Зарплатный проект" ,
      subTitle: "Зачиление зарплаты до 3-х минут",
      list:"Онлайн-оформление зарплатной карты",
      list2:"Новые возможности зарплатной карты",
      image:`${DOMEN_NAME}d26/kross-zarplatniki.webp`
    },
    { 
      name: 'Top',
      id:6,
      title:"Инвистиции с Альфа-Банком" ,
      subTitle: "Начните инвистировать с нами",
      image:`${DOMEN_NAME}120/prikaz.webp`
    },
    { 
      name: 'Credit',
      id: 7,
      title:"Карта <<100 дней>>" ,
      subTitle: "Выгодная карта на каждый день",
      list:"100 дней под 0,00000001% годовых",
      list2:"Любые покупки и снятие наличных",
      image:`${DOMEN_NAME}794/kross.webp`
    },
    { 
      name: 'Credit',
      id:8,
      title:"Приличные на личное" ,
      subTitle: "Деньги на любые цели всегда, когда нужно!",
      list:"Под 20,5% годовых",
      list2:"До 15 000 BYN",
      image:`${DOMEN_NAME}bbd/credits-prosto-dengi.webp`
    },
    {
      name: 'Credit',
      id:9,
      title:"Красная карта",
      subTitle:'Рассрочка везде, где принимают карты',
      list:"Любые покупки, включая акции и распродажи",
      list2:"Срок рассрочки выбираете вы",
      image:`${DOMEN_NAME}1cf/krasnai-kross.webp`
    },
    { 
      name: 'Credit',
      id:10,
      title:"Просто деньги",
      subTitle:"Большие деньги на большие мечты",
      list:"Под 30,4% годовых",
      list2:"До 30 000 BYN",
      image:`${DOMEN_NAME}ffd/potreb.webp`
    },
    {
      name: 'Credit',
      id:11,
      title:"Альфа-Овердрафт" ,
      subTitle: "Выручит до зарплаты если, ноль на счете",
      list:"Оформление к любому счету в BYN",
      list2:"7 секунд в InSync - на рассмотрение",
      image:`${DOMEN_NAME}cd3/kross-alfa-overdraft.webp`
    },
    { 
      name: 'Credit',
      id:12,
      title:"Инвистиции с Альфа-Банком" ,
      subTitle: "Начните инвистировать с нами",
      image:`${DOMEN_NAME}120/prikaz.webp`
    },
    { 
      name: 'Card',
      id:13,
      title:"Smart Gold" ,
      list:"Бесплатные карты уровня Gold",
      list2:"Выгодный курс обмена валют",
      image:`${DOMEN_NAME}ca3/kross-gold-2.webp`
    },
    { 
      name: 'Card',
      id:14,
      title:"Smart Platinum" ,
      list:"Бесплатные карты уровня Platinum",
      list2:"Альфа консьерж 24/7",
      image:`${DOMEN_NAME}37e/kross-platinum-2.webp`
    },
    { 
      name: 'Card',
      id:15,
      title:"Карта фудхантера" ,
      subTitle:`Установите цифровую обложку "Карта фудхантера" и получайте скидку 10% в любимых заведениях`,
      image:`${DOMEN_NAME}11a/foodhunter_425_325.webp`
    },
    { 
      name: 'Card',
      id:16,
      title:"World of Tanks" ,
      list:"9 едениц золота за каждые потраченные 3 рубля",
      list2:"Дарим месяц премиум аккаунта",
      image:`${DOMEN_NAME}412/top-product.webp`
    },
    { 
      name: 'Card',
      id:17,
      title:"Alfa Cyber" ,
      list:"Скидки до 100% у паринеров",
      list2:"Твой никнейм на карте",
      image:`${DOMEN_NAME}91e/cards-cyber.webp`
    },
    { 
      name: 'Card',
      id:18,
      title:"AliExspress" ,
      list:"Манибэк до 5%",
      list2:"Возврат 100% стоимости товара на AliExspress (включая доставку)",
      image:`${DOMEN_NAME}a60/razvod.webp`
    },
]
  
