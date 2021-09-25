import { Injectable } from '@angular/core';
import { StatusCode } from './statuscode';

@Injectable({
  providedIn: 'root'
})
export class AvclientService {

    constructor() { }

    foo(): StatusCode {
	return StatusCode.NetworkError;
}
