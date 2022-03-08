import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  listData = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    this.listData = await this.dataService.getData();
  }

}
