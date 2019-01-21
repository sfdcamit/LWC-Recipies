import { LightningElement, wire } from 'lwc';

//import salesforceDesc from '@salesforce/label/c.salesforceDesc';
//import trailheadlogo from '@salesforce/resourceUrl/trailheadlogo';
import userId from '@salesforce/user/Id';
import lang from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import Account_Object from '@salesforce/schema/Account';

import { getListUi } from 'lightning/uiListApi';

export default class ResourceDemo extends LightningElement {
    label = {
        userId,
        lang,
        locale,
        currency,
        Account_Object
    }
    @wire(getListUi, { objectApiName: Account_Object, listViewApiName: 'RecentlyViewed' })
    propertyOrFunction;

    /* eslint-disable no-console */
    //console.log(this.propertyOrFunction);
    showProp(){
        console.log(' Records ', this.propertyOrFunction.data.records.records);
    }
}