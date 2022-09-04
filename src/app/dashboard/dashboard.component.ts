import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DashboardProps } from './DashboardInterface';
import { DashboardSchema } from './dashboardSchema';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  styles: [' th  { background:white; }'],
})
export class DashboardComponent implements OnInit {
  Data: any[] = [];
  schema: DashboardSchema[] = [];
  page: number = 0;
  totalRecords: number = 0;
  first = 0;
  rows = 10;
  optionpage = [10, 25, 50];
  selectedProduct2 = this.Data;
  search = '';
  items: MenuItem[] = [];
  params = ['IRR', 'Created On', 'Goal'];
  selectedColumns: string[] = ['Name', 'IRR', 'Created On', 'Goal'];
  clientId = 'clientID';
  mousehover = false;
  constructor(private router: Router, private service: DashboardService) {}

  ngOnInit(): void {
    this.service
      .getAllData(this.clientId, this.selectedColumns)
      .subscribe((items) => {
        if (items.length > 0) {
          Object.keys(items[0]).forEach((key) => {
            console.log('key values==>', key);
            this.schema.push({ header: key, field: key });
          });

          this.schema.push({ header: 'Assessment', field: 'Assessment' });
        }

        this.Data = items;
        console.log('key values==>', this.Data);
        this.totalRecords = this.Data.length;
      });
  }

  onselectColumns() {
    console.log('selectedColumns', this.selectedColumns);
    this.Data = [];
    this.schema = [];
    this.service
      .getAllData(this.clientId, this.selectedColumns)
      .subscribe((items) => {
        if (items.length > 0) {
          Object.keys(items[0]).forEach((key) => {
            this.schema.push({ header: key, field: key });
          });
        }

        this.Data = items;
        this.totalRecords = this.Data.length;
      });
  }

  onRowSelect(event: any) {
    this.router.navigate(['/forecastDetail']);
  }
  onRowUnselect(event: any) {
    console.log('event-unselect', event);
    alert('unselect');
  }

  goForecast() {
    this.router.navigate(['/forecastDetail']);
  }

  downloadPdf() {}
  mouseEnter(event: any, arg: any) {
    this.Data.forEach((element) => {
      if (arg.reportId == element.reportId) {
        element['mousehover'] = event;
        console.log('arg', arg);
      }
    });
  }

  mouseLeave(event: any, arg: any) {
    this.Data.forEach((element) => {
      if (arg.reportId == element.reportId) {
        element['mousehover'] = false;
        console.log('arg', arg);
      }
    });
  }

  deleteItem(item: any) {
    this.service.deleteData(this.clientId, item.reportId).subscribe(() => {
      this.Data = [];
      this.schema = [];
      this.service
        .getAllData(this.clientId, this.selectedColumns)
        .subscribe((items) => {
          if (items.length > 0) {
            Object.keys(items[0]).forEach((key) => {
              console.log('key values==>', key);
              this.schema.push({ header: key, field: key });
            });

            this.schema.push({ header: 'Assessment', field: 'Assessment' });
          }

          this.Data = items;
          console.log('key values==>', this.Data);
          this.totalRecords = this.Data.length;
        });
    });
  }
}
