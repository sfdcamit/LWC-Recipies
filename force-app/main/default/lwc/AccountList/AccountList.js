import { LightningElement, track } from 'lwc';
//import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';
export default class AccountList extends LightningElement {
    @track accounts;
    @track error;
    @track selectedAccount;
    @track searchKey = '';
    @track selectedAccountId;
    
    constructor(){
        super();
        this.searchKey = 'm';
        //this.error = 'constructor';
    }

    connectedCallback(){
        /* eslint-disable no-console */
        console.log('Test Console');
    }

    errorCallback(error){
        this.error = error;
    }

    /*@wire(findAccounts, { searchKey : '$searchKey'}) 
    wiredAccounts({data, error}){
        if(data){
            this.accounts = data;
        }
        if(error){
            this.error = error;
        }
    }*/

    handleSelectA(event){
        const selectedAccountId = event.detail;
        this.selectedAccount = this.accounts.find( account => account.Id === selectedAccountId);
        this.selectedAccountId = this.selectedAccount.Id;
        //this.accounts = null;
    }
    handleOnChange(event){
        /* eslint-disable no-console */
            console.log('Event Handled');
        /* eslint-disable no-console */
        this.searchKey = event.detail.value;

        findAccounts( { searchKey : this.searchKey } )
        .then(result =>{
            this.accounts = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.accounts = undefined;
        });
        
    }

    handleRemove(event){
        event.preventDefault();
        this.selectedAccount = '';
        this.accounts = null;
        this.selectedAccountId = null;
    }
}