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
    serverCreationStatus = 'No Server Was Created';

    serverName = 'TestServer';

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

    // on prefix signifies a method that is part of event binding
    // Not required but good practice
    onCreateServer() {
        this.serverCreationStatus = 'Server Was Created';
    }

    onUpdateServerName(event: Event) {
        // Need to run type assertion of event as HTMLInputElement
        // Then return value
        this.serverName = (event.target as HTMLInputElement).value;
        // could also be written as
        // (<HTMLInputElement>event.target).value
    }
}
