interface IImages {
    logo: string;
    logoText: string;
    _100day: string;
    invest: string;
    pecets: string;
  }

  type TBaseUrl = string

  const BASE_URL:TBaseUrl = 'https://www.alfabank.by/upload/resize_cache/webp/'
  
  export const IMAGE: IImages = {
    logo: "https://www.sostav.ru/images/news/2019/05/08/wwh5l7ed.png",
    logoText:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_alfa-bank.svg/1024px-Logo_alfa-bank.svg.png",
    _100day:
      `${BASE_URL}images/100-day-1401.webp`,
    invest:
      `${BASE_URL}img/main/mega-main-invest-1510-1.webp`,
    pecets:
      `${BASE_URL}img/main/pekets-1612.webp`,
  };