import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.sass']
})

export class GenerationsComponent implements OnInit {

  public generations : string[];

  constructor() {
    this.generations =
      [ "Génération I",
        " Génération II",
        " Génération III",
        " Génération IV",
        " Génération V",
        " Génération VI",
        " Génération VII",
        " Génération VIII"];
  }

  ngOnInit(): void {
  }

}
