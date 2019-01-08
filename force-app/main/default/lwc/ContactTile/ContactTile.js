import { LightningElement, api, track } from 'lwc';

export default class ContactTile extends LightningElement {
    @api greeting;
    @track test;
}