import { Component, OnInit } from "@angular/core";
import { Area } from "src/app/model/area";
import { AreaService } from "src/app/service/area.service";

@Component({
  selector: "app-area-search",
  templateUrl: "./area-search.component.html",
  styleUrls: ["./area-search.component.css"]
})
export class AreaSearchComponent implements OnInit {
  nombre: string;
  areas: Area[];

  constructor(private areaService: AreaService) {}

  ngOnInit() {
    this.nombre = "";
  }

  private searchArea() {
    this.areas = [];
    this.areaService
      .getAreaByNombre(this.nombre)
      .subscribe(areas => (this.areas = areas));
  }

  onSubmit() {
    this.searchArea();
  }
}
