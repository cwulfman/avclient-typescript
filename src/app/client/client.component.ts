import { Component, OnInit } from '@angular/core';
import { AvclientService } from '../avclient.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

    constructor(private avclientService: AvclientService) { }
    
    initialize(bboard: any): void {
	this.avclientService.initialize(bboard)
    }

    ngOnInit(): void {
    }

    status():string { return this.avclientService.status()}
    
}
