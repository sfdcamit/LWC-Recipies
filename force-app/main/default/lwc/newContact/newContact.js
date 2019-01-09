import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
export default class NewContact extends NavigationMixin (LightningElement) {
    @track accountId;
    @track lastName;
    @track firstName;
    @track title;
    @track email;
    @track phone;
    getRecordId(event){
        event.preventDefault();
        const params = event.detail;
        /* eslint-disable no-console */
        console.log(' Selected Record Id ', params);
        this.accountId = params;
        //this.firstName = 'LWC '
    }

    handleNameChange(event){
        event.preventDefault();
        const fieldName = event.target.name;
        if(fieldName === 'lName'){
            this.lastName = event.target.value;
        }
        if(fieldName === 'Phone'){
            this.phone = event.target.value;
        }
        if(fieldName === 'fName'){
            this.firstName = event.target.value;
        }
        if(fieldName === 'Title'){
            this.title = event.target.value;
        }
        if(fieldName === 'Email'){
            this.email = event.target.value;
        }
    }

    createContact(){
        const fields = {};
        fields[FIRST_NAME.fieldApiName] = this.firstName;
        fields[LAST_NAME.fieldApiName] = this.lastName;
        fields[ACCOUNT_ID.fieldApiName] = this.accountId;
        fields[EMAIL_FIELD.fieldApiName] = this.email;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        fields[TITLE_FIELD.fieldApiName] = this.title;
        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
        /* eslint-disable no-console */
        console.log('  recordInput ', recordInput );
        createRecord(recordInput).then( account => {
            const conId = account.id;
            console.log(' accId ', conId);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact created '+conId,
                    variant: 'success',
                    mode : 'sticky'
                }),
            );
            
        })
        .catch(error => {
            console.log(' error.message ', error );
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.details.body.message,
                    variant: 'error',
                    mode : 'sticky'
                }),
            );
        })
    }

    navigationDemo(){
        /* eslint-disable no-console */
        console.log(' Method clicked ');
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0039A000002uUDeQAM',
                objectApiName: 'Contact',
                actionName: 'view',
            },
            state : {
                "recordId" : '0039A000002uUDeQAM'
            }
        });
    }

}