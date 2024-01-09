import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 1111;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerId(): number { return this.serverId; }

  getServerStatus(): string { return this.serverStatus; }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
