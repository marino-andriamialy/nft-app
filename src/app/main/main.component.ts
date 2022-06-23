import { Component, OnInit } from '@angular/core';
import Web3 from "Web3";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  web3: any;
  contract : any;
  public provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
  constructor() { }

  ngOnInit(): void {
    this.web3 = new Web3(this.provider);
    this.web3.eth.getProvider(console.log);

    
  }

}
