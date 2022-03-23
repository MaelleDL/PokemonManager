import {Component, NgModule, OnInit} from '@angular/core';
import {MatListModule} from "@angular/material/list";
@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.sass']
})
@NgModule({
  imports: [
    MatListModule,
  ]
})
export class GenerationsComponent implements OnInit {

  public generations=
    [ "Génération I", " Génération II", " Génération III", " Génération IV", " Génération V", " Génération VI", " Génération VII", " Génération VIII"];

  constructor() { }

  ngOnInit(): void {
  }

}
