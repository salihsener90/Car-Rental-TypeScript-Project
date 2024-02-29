import { useEffect, useState } from "react"
import CustomFilter from "../components/CustomFilter"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"
import ShowMore from "../components/ShowMore"
import { useSearchParams } from "react-router-dom"
import { fuels, years } from "../constants"


const MainPage = () => {
  const [params] = useSearchParams();
  //USESTATE BİZEDEN STATE'TE TUTACAGIMIZ VERİNİN TİPİNİ İSTER
  //BİZDE GENERİC YARDIMIYLA BİR CARTYPE DİZİSİNİ STATE'DE 
  //TUTACAGIMIZI SÖYLEDİK
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  //  BİLEŞEN EKRANA BASILINCA ve params değişince APİ İSTEĞİ AT
  useEffect(() => {
    //URL deki bütün parameteleri al  ve obje olustur
    const paramsObj = Object.fromEntries(params.entries());
 
    fetchCars(paramsObj)
      //İSTEK BAŞARILI OLURSA
      .then((data) => setCars(data))
      //İSTEK BAŞARISIZ OLURSA
      .catch(() => setIsError(true));
  }, [params])


  return <div ><Hero />
    <div id="catalogue"
      className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>

        <p>Beğenebileceğin Arabaları Keşfet...</p>
      </div>
      {/* FİLTRELEME ALANI */}
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="Yakıt Tipi" options ={fuels}/>
          <CustomFilter title= "Üretim Yılı" options= {years} />
        </div>
      </div>
      
      {/*
1.adım-> VERİ NULL SA > HENUZ APİDEN CEVAP GELMEMİŞTİR
2. adım isError TRUE İSE APİDEN CEVABI ALIRKEN HATA OLMUSTUR
3.Adım -> VERİ BOŞ DİZİ İSE >KRİTERLERE UYGUN ELEMAN BULUNAMADI
4.adım VERİ DOLU DİZİYSE VERİ BAŞARIYLA GELDİ
 >      
      */}
      {!cars ?( 
       <div className="home__error-container">
       <h2>Yükleniyor...</h2>
     </div>
      ) : isError? ( <div className="home__error-container">
      <h2>Üzgünüz! Verileri Alırken Bir Hata Oluştu.</h2>
    </div> 
    ): cars.length < 1 ? (
        <div className="home__error-container">
          <h2>Üzgünüz! Aradığınız Kritere Uygun Araba Bulunamadı</h2>
        </div>
      ) : (
        <section>

          <div className="home__cars-wrapper">
            {cars.map((car, i) => (
            <Card key={i} car = {car} />
            )
            )}
          </div>
          <ShowMore/>
        </section>
        )}
    </div>
  </div>

}

export default MainPage
