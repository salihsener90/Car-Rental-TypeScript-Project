import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils/generateImage";

type ModalPropsType = {
  car: CarType ;
  isOpen : boolean;
  close : () => void;

}


const DetailModal = ({car, isOpen, close }: ModalPropsType) => {
  return (
    //modal açıksa ekrana basn
    <AnimatePresence>
 { isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center p-4">
        <motion.div 
        initial= {{
          scale:0.3, opacity:0
        }}
        //eleman ekrana gelince devreye girer 
        whileInView={{
          scale:1, opacity:1
        }}
        //elaman ekrandan giderken devreye girer
        exit={{
          scale:0, opacity:0
        }}
        //animasyon ayarları
        transition={{
          duration: 0.5,
          
        }}
        className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
          {/* KAPATMA BUTONU */}
          <button          
          onClick={close}
          className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
              <img src="/close.svg" />
          </button>
          {/* FOTOGRAFLAR ALANI */}
          <div className="flex-1 flex flex-col gap-3">
            {/* BÜYÜK RESİM */}
            <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
              <img className="h-full mx-auto object-contain" src={generateImage(car)} />
            </div>
            {/* KÜÇÜK RESİMLER */}
            <div className="flex gap-3">
              <div className="flex-1 flex relative h-24 bg-primary-blue-100" >
              <img className="h-full mx-auto object-contain" src={generateImage(car, '29')} />
              </div>
              <div className="flex-1 flex relative h-24 bg-primary-blue-100" >
              <img className="h-full mx-auto object-contain" src={generateImage(car, '33')} />
              </div>
              <div className="flex-1 flex relative h-24 bg-primary-blue-100" >
              <img className="h-full mx-auto object-contain" src={generateImage(car, '13')} />
              </div>
             
            </div>
          </div>
          {/* objenin değerlerini tek tek yazmamak için 
          object.entires () metodu ile objeyi diziye cevirdik ve dziyi döndük
          entries metodu sonuc olarak verdiğimiz objenin 
          anahtar ve değerlerinden oluşan bir dizi döndürür 
          örn{id:3, name:"ahmet "} için 
          sonuc : [["id",3], ["name", "ahmet"]]
           */}
        
        
          {Object.entries(car)// objeyi diziye cevir
          .filter(([key])=> key !== 'year') // yıl değerini sil
          
          .map (([key,value]) =>( // diziyi dön
            <div className="flex justify-between">
              <h4 className="capitalize text-gray">{key.replace('_','  ')}</h4>
              <p className="capitalize text-black-100 font-semibold">{value}</p>
            </div>
          ) 
          )}
        
        </motion.div>
      </div>
      ) } 
    </AnimatePresence>
    
      
      
  )
}

export default DetailModal
