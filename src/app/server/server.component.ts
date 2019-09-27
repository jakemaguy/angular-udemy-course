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

    getServerStatus() {
        return this.serverString;
    }
}
