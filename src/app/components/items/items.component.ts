import { Component, OnInit } from '@angular/core';
import {ItemService } from '../../services/item.service';
import {Item} from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items: Item[];
editState: Boolean = false;
itemToEdit: Item;
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {

      // console.log(items);
      this.items = items;
    });
  }
deleteItem(event, item: Item) {
  this.clearstate();
this.itemService.deleteItem(item);
}
updateItem(item: Item) {

this.itemService.updateItem(item);
this.clearstate();

}
editItem($event, item: Item) {

  this.editState = true;
  this.itemToEdit = item;

}
clearstate() {

  this.editState = false;
  this.itemToEdit = null;
}



}
