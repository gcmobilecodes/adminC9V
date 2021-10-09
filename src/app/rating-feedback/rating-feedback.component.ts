import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rating-feedback',
  templateUrl: './rating-feedback.component.html',
  styleUrls: ['./rating-feedback.component.scss']
})
export class RatingFeedbackComponent implements OnInit {

  Messages:any[] = [
    {StoreId:'s1',OrderId:'o1',DriverID:'d1',orderAddress:'#123 city point',orderFeedBack:"good",orderRating:4,DriverFeedBack:'good',DriverRating:5,CreatedDate:new Date()},
    {StoreId:'s1',OrderId:'o1',DriverID:'d1',orderAddress:'#123 city point',orderFeedBack:"good",orderRating:4,DriverFeedBack:'good',DriverRating:5,CreatedDate:new Date()},
    {StoreId:'s1',OrderId:'o1',DriverID:'d1',orderAddress:'#123 city point',orderFeedBack:"good",orderRating:4,DriverFeedBack:'good',DriverRating:5,CreatedDate:new Date()}
  ];

  data = {
    page: 1,
    limit: '',
    text: '',
    storeId: localStorage.storeId,
    filter: ''
  }

  where = {
    filter: '',
    limit: 10,
    page: 1,
    order: -1
  }

  total = 0;
  catagoryId:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: AppService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  OpenAddStore() {

  }

  

  loadPage(page: number) {
    this.data.page = page;
  }

  editStore(catagory_id) {
    this.router.navigate(['edit-catagory'], { queryParams: { catagory_id: catagory_id } });
  }

  deleteStore(catagory_id, index) {

    var consent = confirm("Do you want to delete this user ?");
    if (consent) {
      debugger
      this.userService.deleteCatagory({ categoryId: catagory_id,token:localStorage.getItem("token") }).subscribe((data) => {
        debugger
        if (data.statusCode == 200) {
          this.Messages.splice(index, 1);
        }
      });
    }
  }

  search(event) {
    this.data.filter = event.target.value;
  }

}
