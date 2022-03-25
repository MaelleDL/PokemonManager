import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {RequestGenerationList} from "../../models/RequestGenerationList";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.sass']
})

export class GenerationsComponent implements OnInit {

  public generations$: Observable<RequestGenerationList> | undefined;

  constructor(
    @Inject(ApiService) private api: ApiService
  ) {
  }

  ngOnInit(): void {
    this.generations$ = this.api.getGeneration();
  }

}
