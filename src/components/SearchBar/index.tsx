import ReactSelect from "react-select"
import { makes } from "../../constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
  desing?: string;
}
//1.BİLEŞEN : BUTTON
const SearchButton = ({ desing }: ButtonProps) => {
  return(
   <button className={`ml-3 z-10 ${desing}`}>
    <img src="/magnifying-glass.svg" width={40} height={40} />
  </button>
)
}
//2.BİLEŞEN : ARAMA BARI
const SearchBar = () => {
  const [params, setParams] = useSearchParams();

  const [make, setMake] = useState<string> ("");

  const [model, setModel]  = useState<string> ("");

  type OptionType = {
    label: string;
    value: string;
  };

  //options şu şekilde olmalı : [{:"marka", value: herhangi birşsey}]
  //buradaki map kodun üst seviyesinde olduğu için state her eğiştiğinde 
  //yani bileşen render her render oldugunda bu hesaplamayı tekrr tekrar yaparız 
  //halbuki  hep aynı sıonucu elde edeceğmzden bu performans sorunu yasatır
  //bı nedenle useMemo kullanrak veriyi hafızada tutmayı sagladık 
  const options: OptionType[] = useMemo(
    () =>
    makes.map((make) => ({
      label: make,
      value: make,
    })), 
    [params]
  );
  //event parametreletinin tipini kendimiz tanımlayamayız
  //cnku cok fazla veri var bu noktad reactta 
  //yerleşik olarka bulunan tipleri kullanırz örnek olarak HTMLFormElement gibi
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //url i guncelllerken doğrudan setParams kullandığımız
    //için url'e daha önce eklemem bütün paramları 
    //sıfırlamış oluyoruz 
    setParams({
      
      make,
      model,
    })
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
         options={options} 
        onChange={(e:OptionType | null) => e && setMake(e.value)}
        className="w-full text-black" 
        />
        <SearchButton desing={"sm:hidden"}     />        
      </div>

      <div className="searchbar__item">
        <img
          width={25}
          src="/model-icon.png"
          className="absolute ml-4" 
          />
        <input
        onChange={(e) => setModel (e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="Örn:Golf"
        />
        < SearchButton />
      </div>
    </form>
  )
}

export default SearchBar;
