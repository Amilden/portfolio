import { Component } from '@angular/core';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent {
  sample(){
    console.log("It is works")
  }
}
