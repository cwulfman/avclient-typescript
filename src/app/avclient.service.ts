import { Injectable } from '@angular/core';
import { StatusCode } from './statuscode';

@Injectable({
  providedIn: 'root'
})
export class AvclientService {
    serverURL: any;
    _status: StatusCode = StatusCode.Uninitialized;

    constructor() { }

    initialize(bboard: any) {
	this.serverURL = bboard;
	this._status = StatusCode.Initialized
    }


    status() {
	return this._status;
    }
}
