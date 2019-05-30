import { Component, OnInit, Input } from "@angular/core";
import { Usuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";
import { UsuarioListComponent } from "../usuario-list/usuario-list.component";

@Component({
  selector: "app-usuario-details",
  templateUrl: "./usuario-details.component.html",
  styleUrls: ["./usuario-details.component.css"]
})
export class UsuarioDetailsComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private listComponent: UsuarioListComponent
  ) {}

  ngOnInit() {}

  deleteUsuario() {
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }
}
