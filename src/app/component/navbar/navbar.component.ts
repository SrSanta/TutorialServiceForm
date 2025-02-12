import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  eventos: Evento[] = [];
  log = 0;
  warn = 0;
  error = 0;
  
  constructor(private eventosService: EventosService, private router: Router) {}
  
  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
      this.contarCategorias(eventos);
    });
  }
  
  contarCategorias(eventos: Evento[]): void {
    this.log = eventos.filter(r => r.categoria === 'log').length;
    this.warn = eventos.filter(r => r.categoria === 'warn').length;
    this.error = eventos.filter(r => r.categoria === 'error').length;
  }
}
