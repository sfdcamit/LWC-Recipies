import { LightningElement, track } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import resourceContainer from '@salesforce/resourceUrl/sfdcpanther';
export default class LwcResourceDemo extends LightningElement {

    @track error;
    einteinUrl = resourceContainer + '/img/einstein_u.png';
    renderedCallback(){
        /* eslint-disable */
        Promise.all([
            loadScript(this, resourceContainer + '/js/jquery.js'),
            loadStyle(this,  resourceContainer + '/css/dataTables_min.css'),
            loadStyle(this,  resourceContainer + '/css/jquery-ui.css')
        ])
        .then( () => {
            let testCss__demo = this.template.querySelector('#testCss__demo-32');
            $(testCss__demo).css("background-color", "yellow");
            testCss__demo.addEventListener('click',
              e => {
                this.handleClick();
              }, 
              true
            );
        })
        .catch( error => {
            this.error = error;
            console.log(' Error While loading the Resources ', error);
        });
    }

    handleClick(){
        //event.preventDefault();
        alert(' Div Clicked ');
    }
}