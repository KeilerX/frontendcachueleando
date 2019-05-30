import { Component, OnInit } from "@angular/core";
import { Recomendacion } from "src/app/model/recomendacion";
import { RecomendacionService } from "src/app/service/recomendacion.service";

@Component({
  selector: "app-recomendacion-search",
  templateUrl: "./recomendacion-search.component.html",
  styleUrls: ["./recomendacion-search.component.css"]
})
export class RecomendacionSearchComponent implements OnInit {
  id: number;
  recomendaciones: Recomendacion[];
  constructor(private recomendacionService: RecomendacionService) {}

  ngOnInit() {
    this.id = null;
  }

  private searchRecomendacion() {
    this.recomendaciones = [];
    this.recomendacionService
      .getRecomendacionById(this.id)
      .subscribe(recomedaciones => (this.recomendaciones = recomedaciones));
  }

  onSubmit() {
    this.searchRecomendacion();
  }
}
