import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getShoppingList();
  }

  shoppingList:any[]=[];
  getShoppingList()
  {
    var url="https://api.myjson.com/bins/qzuzi";
    this.obj.get(url).subscribe(
      response=>{
        this.shoppingList = response as string[];
      }
    );
  }


}
