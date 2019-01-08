import { LightningElement, wire, track } from 'lwc';
import generateMap from '@salesforce/apex/Util.generateMap';
export default class MyCollectionLWC extends LightningElement {

    @track mapdata;
    @track error;

    @wire(generateMap)
    wiredMap({ error, data}){
        if(error){
            this.error = error;
        }
        if(data){
            /* eslint-disable no-console*/
            console.log(' Map ', data);
            const options = [];
            /* eslint(gaurd-for-in) */
            for(let key in data){
                if(key){
                    options.push({
                        key : key,
                        value : data[key]
                    });
                }
            }
            console.log(' options ', options);
            this.mapdata = options;
            console.log(' Map updated data ', this.mapdata);
        }
    }
}