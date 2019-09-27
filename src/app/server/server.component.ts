import { Component } from '@angular/core';

@Component({
    // HTML TAG to be called within templates
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    // databinding example
    serverId = 10;
    serverString = 'offline';

    allowNewServer = false;

    constructor() {
        setTimeout(() => {
            // changes the disbabled attribute in the DOM for the button
            // DOM = Document Object Model
            this.allowNewServer = true;
        }, 2000);
    }

    getServerStatus() {
        return this.serverString;
    }
}
