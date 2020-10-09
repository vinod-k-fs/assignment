import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements  OnInit{
  filterTypes = [
    'Discount',
    'Price'
  ];

  apiTypes = [
    'Less Than',
    'Equals',
    'Greater Than'
  ];

  dummyData = [
    { filterType: 'Discount', apiType: 'Less Than', value: '100' },
    { filterType: 'Price', apiType: 'Equals', value: '50' }
  ];
  filterForm : FormGroup;
  ngOnInit(): void {
       this.filterForm = new FormGroup({
             filters: new FormArray([])
       })
  }
  getFilterControls() {
      return this.formFiltersArray.controls;
  }
  addFilterToFiltersFormArray(){
       const filterGroup = new FormGroup({
            'filterType' : new FormControl('',Validators.required),
            'apiType'    : new FormControl('',Validators.required),
            'value'      : new FormControl('',Validators.required)
       });
    this.formFiltersArray.controls.push(filterGroup)
  }
  onFilterSave(){
    const selectedFilters = [];
    this.formFiltersArray.controls.forEach(group => {
      selectedFilters.push(group.value);
    });
    console.log(selectedFilters);
  }
  get formFiltersArray() {
    return (<FormArray>this.filterForm.get('filters'));
  }
  get getValidity() {
    return this.formFiltersArray.controls.every(control => control.valid);
  }
  deleteFilter(index) {
    debugger;
    this.formFiltersArray.removeAt(index);
  }

}
