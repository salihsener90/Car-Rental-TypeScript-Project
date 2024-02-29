import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select"

type OptionType = {
  label:string;
  value:string;
}
type FilterPropType = {
  title:string;
  options:OptionType[];
}

const CustomFilter = ({title,options} : FilterPropType)=> {
  const [selected,setSelected] = useState <OptionType | null >(null)
  const[ params,setParams ] = useSearchParams()
  
  //secilen filtreye göre url'i guncelle 
  useEffect(() => {
    const key = title == 'Yakıt Tipi' ? 'fuel_type' : 'year'
if(selected?.value){
   //url deki paramaetrenin yanına yenisni ekler 
   params.set(key, selected?.value.toLocaleUpperCase())
} else {
  //value su yoksa url den parametreyi kaldır
  params.delete(key)
}
 setParams(params)
  }, [selected])
  console.log(selected)
  return <div className="w-fit text-black">
    <Select 
    onChange={(e) => setSelected(e)}
    className="min-w-[100px]" placeholder={title} options={options}/>
  </div>
  
}

export default CustomFilter
