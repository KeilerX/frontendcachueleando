import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { AreaService } from "../../../service/area.service";
import { Area } from "../../../model/area";

@Component({
  selector: "app-area-list",
  templateUrl: "./area-list.component.html",
  styleUrls: ["./area-list.component.css"]
})
export class AreaListComponent implements OnInit {
  areas: Observable<Area[]>;

  constructor(private areaService: AreaService) {}

  ngOnInit() {
    this.reloadData;
  }

  reloadData() {
    this.areas = this.areaService.getAreaList();
  }

  deleteAreas() {
    this.areaService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log("ERROR: " + error)
    );
  }
}
