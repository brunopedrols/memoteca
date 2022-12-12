import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPensamentoComponent } from "./componentes/pensamento/lista-pensamento/lista-pensamento.component";
import { CriarPensamentosComponent } from "./componentes/pensamentos/criar-pensamentos/criar-pensamentos.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listarPensamento',
    component: ListaPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
