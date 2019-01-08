import { LightningElement, wire, track, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactAuraService.getContactList';
export default class CustomEvent extends LightningElement {
    
    @wire(getContactList) contacts;
    @track contactId;
    @api recordId;
    @api objectApiName;

    handleSelect(event){
        this.contactId = event.detail;
        //console.log('  COntact Id ', contactId);
    }
}