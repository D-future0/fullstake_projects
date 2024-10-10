import { faker } from '@faker-js/faker';

const createRandomCarList = ()=>{
    return{
        name:faker.vehicle.vehicle(),
        type:faker.vehicle.type(),
        model:faker.vehicle.model(),
        price:faker.finance.amount(),
        image:'',
        fuelType:faker.vehicle.fuel(),
        miles:1000,
        gearType:'automatic',
    }
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count:7
})

export default{
    carList
}