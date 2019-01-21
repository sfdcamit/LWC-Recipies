import { LightningElement, api } from 'lwc';

export default class DesignAttribute extends LightningElement {
    @api recordId;
    @api heading = "default value";
}