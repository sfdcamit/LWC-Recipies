import { LightningElement, wire, track } from 'lwc';

import image from '@salesforce/resourceUrl/image';
//import images from '@salesforce/resourceUrl/images';
import userId from '@salesforce/user/Id';
import lang from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import Account_Object from '@salesforce/schema/Account';

import { getListUi } from 'lightning/uiListApi';
import trailheadCharacters from '@salesforce/resourceUrl/trailhead_characters';

export default class ResourceDemo extends LightningElement {
    @track img =  trailheadCharacters + '/img/1.jpg';
    einsteinUrl = trailheadCharacters + '/img/einstein.png';
    label = {
        userId,
        lang,
        locale,
        currency,
        Account_Object,
        image
    }
    @wire(getListUi, { objectApiName: Account_Object, listViewApiName: 'RecentlyViewed' })
    propertyOrFunction;

    /* eslint-disable no-console */
    //console.log(this.propertyOrFunction);
    showProp(){
        console.log(' static resource URL ', this.img);
        console.log(' Einstein URL ', this.einsteinUrl);
        console.log( ' image ', image);
        console.log(' Records ', this.propertyOrFunction.data.records.records);
    }
}