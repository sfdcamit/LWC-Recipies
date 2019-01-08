import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import SmallPhotoUrl from '@salesforce/schema/User.SmallPhotoUrl';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';


const fields = [NAME_FIELD, EMAIL_FIELD, SmallPhotoUrl];
export default class UIRecordAPI extends LightningElement {
    userId = Id;
    @api recordId;

    @wire(getRecord, { recordId: '$userId', fields })
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

    get email() {
        return getFieldValue(this.user.data, EMAIL_FIELD);
    }

    get PhotoUrl(){
        return getFieldValue(this.user.data, SmallPhotoUrl);
    }

    @wire(getRecord, { recordId : '$recordId', fields : [ACCOUNT_NAME_FIELD]}) account;

    get accountName(){
        return getFieldValue(this.account.data, ACCOUNT_NAME_FIELD);
    }
}
