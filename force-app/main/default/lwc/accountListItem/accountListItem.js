import { LightningElement, api } from 'lwc';

export default class AccountListItem extends LightningElement {
    @api account;

    handleSelect(event){
        event.preventDefault();
        const selectEvent = new CustomEvent('select', {
            detail: this.account.Id,
        });
        this.dispatchEvent(selectEvent);
    }
}