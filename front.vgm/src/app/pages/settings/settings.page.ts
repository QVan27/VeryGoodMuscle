import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  listData = [];
  
  constructor(private dataService: DataService) { 
    this.loadData();
  }
  
  ngOnInit(){
  }
  
  
  SetDarkMode(value){
    if(value === true){
      // this.addItem("DarkMode", value)
      document.body.classList.add('dark');
    }else if(value === false){
      // this.addItem("DarkMode", value)
      document.body.classList.remove('dark');
    }
  }

  async loadData(){
    this.listData = await this.dataService.getData();
  }

  async addData(){
    await this.dataService.addData('test');
    this.loadData();
  }

  async removeItem(index){
    this.dataService.removeItem(index);
    this.loadData();
  }

  async addItem(index, item){
    this.dataService.addItem(index, item)
    this.loadData();
  }

}
