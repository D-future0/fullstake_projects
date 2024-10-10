import { TbCarSuv } from "react-icons/tb";
import { GiCityCar } from "react-icons/gi";
import { FaTruckPickup } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { GiF1Car } from "react-icons/gi";
import { TbCar } from "react-icons/tb";
import { PiTruckTrailerFill } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
const CarNames = [
    {
    id:'1',
    name:'Audi',
},
    {
    id:'2',
    name:'BMW',
},
    {
    id:'3',
    name:'Mercedes',
},
]
const CarPrices = [
    {
    id:'1',
    amount:'$1000',
},
    {
    id:'2',
    amount:'$2000',
},
    {
    id:'3',
    amount:'$3000',
},
]
const categories = [
    {
        id:1,
        type:`suv`,
        icon:`https://www.flaticon.com/free-icon/jeep_16886831`
    },
    {
        id:1,
        type:'Sedan',
        icon:`https://cdn-icons-png.flaticon.com/128/2736/2736918.png`
    },
    {
        id:1,
        type:'Hatchback',
        icon:`https://www.flaticon.com/free-icon/hatchback_5035167`
    },
    {
        id:1,
        type:'Couple',
        icon:`https://www.flaticon.com/free-icon/car_5750291`
    },
    {
        id:1,
        type:'Hybrid',
        icon:`https://www.flaticon.com/free-icon/car_3324498`
    },
    {
        id:1,
        type:'Convertable',
        icon:`https://www.flaticon.com/free-icon/car_16011418`
    },
    {
        id:1,
        type:'Truck',
        icon:`https://www.flaticon.com/free-icon/pickup-truck_17717637`
    },
    {
        id:1,
        type:'Van',
        icon:`https://www.flaticon.com/free-icon/delivery-van_8485262`
    },
    {
        id:1,
        type:'Electric car',
        icon:`https://www.flaticon.com/free-icon/electric-car_3444059`
    },
]

export default{CarNames, CarPrices, categories}