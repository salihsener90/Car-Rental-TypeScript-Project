import { motion } from "framer-motion"
import CustomButton from "../../CustomButton"


const Hero = () => {
  //TODO
  const flyTo = () : void => {
    alert('asagıya kaydır')
  }
  return  (
  <div className="hero">
    <div className="flex-1 pt-36 padding-x max-h-[920px]">
      <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Bizimle Başla</h1>
      <p className="hero__subtitle text-gray-200">Mükemmel standatlarda hizmetle unutulmaz bir yolculuğa hazır mısın?
      Araç kiralama deneyimini en güzel seçeneklerle
      taçlandırarak her anını özel kılabilirsin... </p>
      <CustomButton title="Arabaları Keşfet" desings="mt-10" handleClick={flyTo}/>
    </div>
    <div className=" flex justify-center">
      {/* //resim yüklendiği anda devreye girecek 
      animasyonu belirldik */}
      <motion.img
      initial={{
        translateX:200,
        scale:0.7
      }}
      whileInView={{
        translateX:0,
        scale:1
      }}
      transition={{
        duration: 1
      }}
      className="object-contain" src="/hero.png" />
    </div>
    
      </div>
  )
}

export default Hero
