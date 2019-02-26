import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  numOfArticales: Number = 0;
  feeds: any =  []; 
  constructor(private feedServices: FeedService) { }

  ngOnInit() {
    //get data from server using feed service
    this.feedServices.getFeedsFromServer().subscribe( res => {
      if (res.success) {
        // save data to vairables
        this.numOfArticales = res.data.totalResults;
        this.feeds = res.data.articles;
      }
    });
  }

}
