import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.less']
})
export class InventoryListComponent implements OnInit {

  userList!: User[];
  selectedRow!: Number;
  editedRows!: Boolean[];
  editedData!:User[];
  columnList = ["action", "name", "description", "price"];
  userListMatTabDataSource = new MatTableDataSource<User>();
  @ViewChild('testForm')
  testForm!: NgForm;

  constructor() { }

  ngOnInit() {
    this.editedRows = [];
    this.editedData = [];
    this.getAlldata();
  }
  getAlldata() {
    this.userList = [
      { id: 1, name: "Item1", description: "Desc 1", price: 100, edited: false },
      { id: 2, name: "Item2", description: "Desc 2", price:200, edited: false },
      { id: 3, name: "Item3", description: "Desc 3", price: 300,edited: false },
      { id: 4, name: "Item4", description: "Desc 4", price: 400,  edited: false },
      { id: 5, name: "Item5", description: "Desc 5", price: 100,edited: false },
      { id: 6, name: "Item6", description: "Desc 6", price: 200, edited: false },
      { id: 7, name: "Item7", description: "Desc 7", price: 300,  edited: false }
    ];
    this.userListMatTabDataSource.data = this.userList;
  }

  rowClick(rowId:any) {
    this.selectedRow = rowId;
  }
  deleteUser(user:User){
   const index= this.userList.findIndex(item=>item.id==user.id);
  this.userList.splice(index,1);
  this.userListMatTabDataSource.data=this.userList;
  }
  edited(user:User) {
    user.edited = true;
    this.editedData.push(user);
  }

  addRow(index:any) {
    const newData =  { id: this.userList.length, name: "", description: "", price: undefined, edited: true };
    this.userList.push(newData);  
    this.userListMatTabDataSource.data = [];
    this.userListMatTabDataSource.data = this.userList;
  }

  save(i:any) {
    if ((this.testForm.touched || this.editedData.length > 0) && !this.testForm.valid) {
      alert('not valid');
    } else {
      alert("data submitted");
      this.userListMatTabDataSource.data = [];
      this.userList[i].edited=false;
      this.userListMatTabDataSource.data = this.userList;
    }
  }
}

class User {
  id!:Number;
  name!: string;
  description!: string;
  price!:Number | undefined;
  edited:boolean | undefined;
}

