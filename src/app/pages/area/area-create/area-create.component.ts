import { Component, OnInit } from "@angular/core";

import { AreaService } from "src/app//service/area.service";
import { Area } from "src/app//model/area";

@Component({
  selector: "app-area-create",
  templateUrl: "./area-create.component.html",
  styleUrls: ["./area-create.component.css"]
})
export class AreaCreateComponent implements OnInit {
  area: Area = new Area();
  submitted = false;
  constructor(private areaService: AreaService) {}

  ngOnInit() {}

  newArea(): void {
    this.submitted = false;
    this.area = new Area();
  }

  save() {
    this.areaService.createArea(this.area).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error)
    );
    this.area = new Area();
  }

  onSubmit() {
    this.save();
  }
}
