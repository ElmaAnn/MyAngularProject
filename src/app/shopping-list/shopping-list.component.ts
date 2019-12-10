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

  total:number;
  name:string[];
  items:any[]=[];
  cart:any[]=[];
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

  addToCart()
  {
    this.total = 0;
    this.name = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				id: item.id,
				quantity: item.quantity
			});
			this.total += item.id.price * item.quantity;
		}
	}

}
