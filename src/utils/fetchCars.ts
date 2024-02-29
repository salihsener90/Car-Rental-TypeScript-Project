import { CarType, filterType } from "../types";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd4d23ccd4dmsh65a9c79c057d747p1fc72bjsn7c1c6d88dd83',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};
//ASENKRON İŞLEMLER YAPIP SONUC DÖNDÜREN FONKSİYONLARDA
//RETURN TİPİNİ DOĞRUDAN YAZMAYIZ
//YERLEŞİK REACT İNTERFACE'İ OLAN "PROMİSE" 'İ KULLANIRIZ VE 
//BUNU DA GENERİC TİP OLARAK APİ İSTEĞİ BAŞARILI OLUNCA ELDE EDECEĞİMİZ
//VERİNİN TİPİNİ BİLMEDİĞİMİZ İÇİN ANY VERDİK
//APİDEN GELEN CEVABI İNCELEDİK GELEN VERİNİN TİPİNİ YAZDIK
//ANY YERİNE OLUSTURDUĞUMUZ TİPİ VERDİK(CARTYPE)

export async function fetchCars(
    filters: filterType
): Promise<CarType[]> {
    //url'de parametre olmama durumudan undefined olmaması
    // için varsayılan değerler belirldilk 
    const  {
        make = 'bmw',  
        model = 'm3',
        limit = '5',
        year = '',
        fuel_type = '',

    } = filters;
    //async ve api isteği olan fonksiyolarda promise döndürlür
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`, options
    )

    return await res.json()
}