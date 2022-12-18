import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Pensamento } from '../../pensamento';
import { PensamentosService } from '../../pensamento/pensamentos.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo:'modelo'
  }

  constructor(
    private service: PensamentosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  acaoCancelada() {
    this.router.navigate(['/listarPensamento'])
  }
}
