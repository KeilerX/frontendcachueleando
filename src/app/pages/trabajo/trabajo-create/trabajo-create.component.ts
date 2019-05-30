import { Component, OnInit } from "@angular/core";
import { Trabajo } from "src/app/model/trabajo";
import { TrabajoService } from "src/app/service/trabajo.service";

@Component({
  selector: "app-trabajo-create",
  templateUrl: "./trabajo-create.component.html",
  styleUrls: ["./trabajo-create.component.css"]
})
export class TrabajoCreateComponent implements OnInit {
  trabajo: Trabajo = new Trabajo();
  submitted = false;
  constructor(private trabajoService: TrabajoService) {}

  ngOnInit() {}

  newTrabajo(): void {
    this.submitted = false;
    this.trabajo = new Trabajo();
  }

  save() {
    this.trabajoService.createTrabajo(this.trabajo).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error)
    );
    this.trabajo = new Trabajo();
  }

  onSubmit() {
    this.save();
  }
}
