
import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class PageReferenceDemo extends NavigationMixin(LightningElement) {
    //@wire(CurrentPageReference) pageRef;
    @track url;
    handleNavigate(){
        /* eslint-disable */
        var templateDemo = this.template.querySelector("h1");
        console.log(' templae ', templateDemo.content);
        /*var pageReference = {
            type: "standard__recordPage",
            attributes: {
                recordId: "0019A000004NhxdQAC",
                actionName: 'view',
            },
            state: {
                counter: "5"
            }
        };
        this[NavigationMixin.Navigate](pageReference);*/

    }
}