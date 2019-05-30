import { Component, OnInit } from "@angular/core";
import { Recomendacion } from "src/app/model/recomendacion";
import { RecomendacionService } from "src/app/service/recomendacion.service";

@Component({
  selector: "app-recomendacion-create",
  templateUrl: "./recomendacion-create.component.html",
  styleUrls: ["./recomendacion-create.component.css"]
})
export class RecomendacionCreateComponent implements OnInit {
  recomendacion: Recomendacion = new Recomendacion();
  submitted = false;
  constructor(private recomendacionService: RecomendacionService) {}

  ngOnInit() {}

  newRecomendacion(): void {
    this.submitted = false;
    this.recomendacion = new Recomendacion();
  }

  save() {
    this.recomendacionService.createRecomendacion(this.recomendacion).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error)
    );
    this.recomendacion = new Recomendacion();
  }

  onSubmit() {
    this.save();
  }
}
