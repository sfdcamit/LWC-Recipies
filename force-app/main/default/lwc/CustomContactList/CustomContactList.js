import { LightningElement, wire, track } from 'lwc';
import findContacts from '@salesforce/apex/ContactAuraService.findContacts';
import { NavigationMixin } from 'lightning/navigation';
export default class CustomContactList extends LightningElement {
    @track contacts;
    @track error;
    @track searchKey ='';
    @track selectedContactId ='';
    @track index ='';
    @wire(findContacts, {searchKey : '$searchKey'})
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            this.error = error;
        }
    }

    handleOnchange(event){
        this.searchKey = event.target.value;
    }

    handleSelect(event){
        this.selectedContactId = event.target.label;
    }

    handleRemove(event){
        //event.preventDefault();
        this.index = event.target.name;
        //this.contacts.splice(this.index, 1);
        //console.log( 'Contact ', this.contacts);
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.index,
                objectApiName: 'Contact',
                actionName: 'view',
            },
        });
    }

    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.index,
                objectApiName: 'Contact',
                actionName: 'edit',
            },
        });
    }
}
