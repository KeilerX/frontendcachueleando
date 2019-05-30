import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-usuario-list",
  templateUrl: "./usuario-list.component.html",
  styleUrls: ["./usuario-list.component.css"]
})
export class UsuarioListComponent implements OnInit {
  usuarios: Observable<Usuario[]>;
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.reloadData;
  }

  reloadData() {
    this.usuarios = this.usuarioService.getUsuarioList();
  }

  deleteUsuarios() {
    this.usuarioService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log("ERROR: " + error)
    );
  }
}
