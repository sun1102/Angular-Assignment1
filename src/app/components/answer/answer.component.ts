import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDetails } from '../../Model/details';
import { Subscription } from 'rxjs/Subscription';
import { AssignmentService } from '../../services/assignment.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, OnDestroy {

  Details: IDetails[];
  filterDetails: any[];
  selectedRow: IDetails;
  subscribe: Subscription;
  timerSubscription : Subscription;

  constructor(private service: AssignmentService) {
    this.subscribe =  this.service.getDetails()
                .subscribe(details => {
                  this.filterDetails =  this.Details = details.hits;
                  this.subscribeToData();
                });
  }

  ngOnInit() {
    
  }

  private refreshData(): void {
    this.subscribe =  this.service.getDetails()
                .subscribe(details => {
                  this.filterDetails =  this.Details = details.hits;
                  this.subscribeToData();
                });
    console.log("Refreshed after 10 sec");
  }

  private subscribeToData(): void {
    this.timerSubscription = Observable.timer(10000).first().subscribe(() => this.refreshData());
}

  onSelecteRow(val: IDetails){
    this.selectedRow = val
  }

  filter(query: string){
    this.filterDetails = (query) ? 
        this.Details.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.Details;
  }

  ngOnDestroy(){
    // To prevent memory leaks...
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
