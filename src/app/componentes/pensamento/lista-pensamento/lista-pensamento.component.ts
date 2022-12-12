import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../pensamento';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.css']
})
export class ListaPensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
