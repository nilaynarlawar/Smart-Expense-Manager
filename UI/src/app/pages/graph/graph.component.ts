import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {ActionSheetController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';
import {AuthConstants} from '../../config/auth-constants';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {

  graphData: any;
  userId: any;
  expenseLimit: any;
  isData: boolean;
  isLimitExceed: boolean;
  responseData: any;
  total: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private toastService: ToastService,
              private storageService: StorageService,
              public actionSheetController: ActionSheetController) { }

  ionViewDidEnter() {
  this.userId = this.getUserId();
}
  ngOnInit() {
    this.userId = this.getUserId();
  }

  prepareGraph() {
    this.graphData = this.authService.getGraphData(this.userId).subscribe((response) => {
      if (response) {
        this.responseData = response;
        this.total = response[0].sum + response[1].sum + response[2].sum + response[3].sum;
        if (this.total > this.expenseLimit) {
          this.isLimitExceed = true;
        } else {
          this.isLimitExceed = false;
        }
        if (this.total === 0) {
          this.isData = false;
        } else {
          this.isData = true;
          this.loadGraph();
        }
      }
    });
  }

  loadGraph() {
    const dataForGraph = [((this.responseData[0].sum / this.total) * 100), ((this.responseData[1].sum / this.total) * 100),
      ((this.responseData[2].sum / this.total) * 100), ((this.responseData[3].sum / this.total) * 100)];
    const labelsForGraph = [this.responseData[0].category, this.responseData[1].category,
      this.responseData[2].category, this.responseData[3].category];
    const tag = (document.getElementById('chart') as any).getContext('2d');
    const chart = new Chart( tag , {
      type: 'doughnut',
      data: {
        labels: labelsForGraph,
        datasets: [{
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: dataForGraph,
          borderWidth: 2
        }]
      }
    });
  }

  getUserId() {
    this.storageService.get(AuthConstants.USERID).then(res => {
      if (res) {
        this.userId = parseInt(res, 10);
        this.getExpenselimit();
      }
    });
  }

  getExpenselimit() {
    this.authService.getUser(this.userId).subscribe((response: any) => {
          if (response) {
            this.expenseLimit = response.expenselimit;
            this.prepareGraph();
          } else {
            this.toastService.presentToast('no Data');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Error');
        });
  }
}
