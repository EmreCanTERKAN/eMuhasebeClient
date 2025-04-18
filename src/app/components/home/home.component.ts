import { AfterViewInit, Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../services/http.service';
import { PurchaseReportModel } from '../../models/purchase-report.model';
import { DatePipe } from '@angular/common';
import { SignalrService } from '../../services/signalr.service';
declare const Chart:any;

@Component({
    selector: 'app-home',
    imports: [SharedModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    providers:[DatePipe]
})
export class HomeComponent implements AfterViewInit {
  chart: any;
  response: PurchaseReportModel = new PurchaseReportModel();

  constructor(
    private http : HttpService,
    private date : DatePipe,
    private signalR : SignalrService
  ) { }
ngAfterViewInit(): void {
  this.showChart();
  this.getPurchaseReports();


  this.signalR.connect(() => {
    this.signalR.hub?.on("PurchaseReports", (res: { date: string, amount: number, action?: string }) => {
  
      const index = this.response.dates.findIndex(x => x === res.date);
  
      if (res.action === "delete") {

        if (index !== -1) {
          this.response.amounts[index] -= res.amount;
  

          if (this.response.amounts[index] <= 0) {
            this.response.amounts.splice(index, 1);
            this.response.dates.splice(index, 1);
          }
        }
      } else {
        // Ekleme işlemi
        if (index !== -1) {
          this.response.amounts[index] += res.amount;
        } else {
          this.response.amounts.push(res.amount);
          this.response.dates.push(res.date);
        }
      }
  
      this.response.dates = this.response.dates.sort((a, b) => a.localeCompare(b));
  
      this.updateChart();
    });
  });
  
}


getPurchaseReports(){
  this.http.get<PurchaseReportModel>("Reports/PurchaseReports", (res) => {
    this.response = res;
    this.updateChart();
  })
}

updateChart(){
  this.chart.data.labels = this.response.dates.map(value => {
    return this.date.transform(value, 'dd/MM/yyyy')
  });
  this.chart.data.datasets[0].data = this.response.amounts;

  this.chart.update();
}

showChart(){
const ctx = document.getElementById('myChart');

 this.chart =  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: '# Günlük Satışlar',
        data: [],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    }
}
