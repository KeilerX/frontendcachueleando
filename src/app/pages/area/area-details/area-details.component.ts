import { Component, OnInit, Input } from "@angular/core";

import { AreaService } from "../../../service/area.service";
import { Area } from "../../../model/area";
import { AreaListComponent } from "../area-list/area-list.component";

@Component({
  selector: "app-area-details",
  templateUrl: "./area-details.component.html",
  styleUrls: ["./area-details.component.css"]
})
export class AreaDetailsComponent implements OnInit {
  @Input() area: Area;

  constructor(
    private areaService: AreaService,
    private listComponent: AreaListComponent
  ) {}

  ngOnInit() {}

  deleteArea() {
    this.areaService.deleteArea(this.area.id).subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }
}
