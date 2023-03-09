


interface SearchPage{
  result : SearchResults[],
  alternative : SearchResults[],
  navigation : number
}

interface MainPage {
  main : MainItem [],
  galerie : MainItem[]
}


interface UserPage{
  user_id: string,
  user : User,
  user_adds : SearchResults[]
}


interface AddPage {
  images_url: string[],
  title: string,
  price: string,
  shipping:string,
  location: string,
  date: string,
  views: string,
  art: string,
  description: string,
  other_add_by_user: SearchResults[],
  other_add_similar: SearchResults[],
  user : User,
  ad_id: string
}




interface SearchResults {
  image_url: string,
  location: string,
  date : string,
  title: string,
  description: string,
  price: string,
  url_link: string,
  shipping:string,
  direkt_kaufen:string
}

interface MainItem {
  url_link: string,
  title: string,
  location: string,
  price: string,
  image_link: string
}

interface Cookie {
  "domain": string,
  "expirationDate": number,
  "hostOnly": boolean,
  "httpOnly": boolean,
  "name": string,
  "path": string,
  "sameSite": string,
  "secure": boolean,
  "session": boolean,
  "storeId": string,
  "value": string
}

interface City{
  name: string , code:string
}

interface Category {
  name:string,
  url_link: string,
  code :  string,
  children:Category[]
}


interface User{
  user_name: string,
  user_link: string,
  rating: string,
  friendliness: string,
  reliability: string,
  reply_rate:string,
  reply_speed:string,
  followers:string,
  user_ad_number: string,
  user_type: string,
  active_since:string,
}




export {SearchResults,SearchPage, UserPage,MainPage ,MainItem, Cookie ,City,Category,User,AddPage}
