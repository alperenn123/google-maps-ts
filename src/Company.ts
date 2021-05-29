import faker from 'faker';
import {Mappable} from './CustomMap'
export class Company implements Mappable{
    name:string;
    catchPhrase:string;
    location:{
        lat:number,
        lng:number
    };

    constructor(){
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    markerContent():string{
        return  `
        <h3>Company name ${this.name}</h3>
        <h3>CatchPhrase is ${this.catchPhrase}</h3>
        `;
    }
}

