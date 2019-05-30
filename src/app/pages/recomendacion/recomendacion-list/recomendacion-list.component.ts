import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Recomendacion } from "src/app/model/recomendacion";
import { RecomendacionService } from "src/app/service/recomendacion.service";

@Component({
  selector: "app-recomendacion-list",
  templateUrl: "./recomendacion-list.component.html",
  styleUrls: ["./recomendacion-list.component.css"]
})
export class RecomendacionListComponent implements OnInit {
  recomendaciones: Observable<Recomendacion[]>;
  constructor(private recomendacionService: RecomendacionService) {}

  ngOnInit() {
    this.reloadData;
  }

  reloadData() {
    this.recomendaciones = this.recomendacionService.getRecomendacionList();
  }

  deleteRecomendaciones() {
    this.recomendacionService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log("ERROR: " + error)
    );
  }
}
