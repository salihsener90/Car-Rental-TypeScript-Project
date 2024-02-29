//MOUSE OLAYLARINDA CALISAN FONKSİYONLARIN TİPİ BUDUR
import { MouseEventHandler } from "react";

//tanımlanan type bilwşwni karıştırcak düzeydeyse
//yada type birden fazla bileşende dosyada kullanılıyorsa 
//genelde suan olduğu giibi ayrı bir type dosaysında tanımlnır ce export edilir
//ihtiyacımız olan dosyalara da import ederiz



//gelen ptopların tipini tanımalama
export type ButtonPropsType = {

    desings?: string,
    btnType?: 'button' | "submit" | 'reset'; //hemm union types hemde string literal kullandık
    title: string;
    disabled?: boolean,
    rIcon?: string;
    //BU FONKSİYON BİR BUTON ELEMANININ MOUSE'UN ETKİLEŞİMİYLE TETİKLENEN BİR FONKSİYONDUR
    handleClick?: MouseEventHandler<HTMLButtonElement>
}
//APİDEN GELEN ARABA VERİSİNİN TİPİ
export interface CarType {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: 'fwd'|'rwd'|'awd'|'4wd',
    fuel_type:'gas'|'electricity'|'disesel' ,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: "a" | 'm',
    year: number,
};

export type filterType = {
    make?: string ;
    model?: string ;
    limit?: string ;
    fuel_type?: string ;
    year?: string ;
}