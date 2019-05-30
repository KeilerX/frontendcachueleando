import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-usuario-create",
  templateUrl: "./usuario-create.component.html",
  styleUrls: ["./usuario-create.component.css"]
})
export class UsuarioCreateComponent implements OnInit {
  usuario: Usuario = new Usuario();
  submitted = false;
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  newUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  save() {
    this.usuarioService.createUsuario(this.usuario).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error)
    );
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.save();
  }
}
