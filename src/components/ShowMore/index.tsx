import { useSearchParams } from "react-router-dom"
import CustomButton from "../../CustomButton"

const ShowMore = () => {
  const [params, setParams] = useSearchParams();


  //1-URL de limit parametresi yoksa;
  //*kullanıcı projye yeni girmiştir ve ekrandan 5 araba vardır
  //* butona basınca url'e limit parametresi eklenecek ve değeri 10 olacak

  //2-URL .2 de limit parametresi varsa;
  //*kullanıcı bir kaç kezdaha fazla butonuna basmıstır 
  //bu durumda butona basınca URL deki parametreyi alıcaz ve 5 eklıycez
  //URL'DEN limiti al eğer yoksa 5 olarak belirle 
  const limit = Number(params.get('limit')) || 5;

  const handleLimit = () => {
    const newLimit = String(limit + 5);
    //param değişkenini günceller
    params.set('limit', newLimit)
    //url'yi güncelle
    setParams(params);
  };
  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
      < CustomButton handleClick = {handleLimit} title="Daha Fazla" />
      )}

    </div>
  );
};

export default ShowMore
