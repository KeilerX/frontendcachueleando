import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-usuario-search",
  templateUrl: "./usuario-search.component.html",
  styleUrls: ["./usuario-search.component.css"]
})
export class UsuarioSearchComponent implements OnInit {
  nombres: string;
  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.nombres = "";
  }

  private searchUsuario() {
    this.usuarios = [];
    this.usuarioService
      .getUsuarioByNombres(this.nombres)
      .subscribe(usuarios => (this.usuarios = usuarios));
  }

  onSubmit() {
    this.searchUsuario();
  }
}
