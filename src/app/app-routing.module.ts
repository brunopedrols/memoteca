import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarPensamentoComponent } from "./componentes/pensamento/editar-pensamento/editar-pensamento.component";
import { ExluirPensamentoComponent } from "./componentes/pensamento/exluir-pensamento/exluir-pensamento.component";
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
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
