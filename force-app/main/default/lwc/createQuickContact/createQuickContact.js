import { LightningElement, track, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Contact_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.LastName';

export default class LdsCreateRecord extends LightningElement {
    @api string;
    @api boolean;
    @api integer;
    @api picklist;
    @track accountId;
     name = '';

     handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
    }
     createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: Contact_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(account => {
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.message,
                        variant: 'error',
                    }),
                );
            });
    }
}