import { Component, OnInit } from '@angular/core';
import { Avclient } from '../avclient';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

    avclient: Avclient = {
	status: 'made',
    };

    constructor() { }
    
    ngOnInit(): void {
    }
    
}
