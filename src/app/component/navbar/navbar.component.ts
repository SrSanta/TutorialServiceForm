import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';
import { Router } from '@angular/router';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  eventos: Evento[] = [];
  log: number = 0;
  warn: number = 0;
  error: number = 0;

  constructor(private eventosService: EventosService, private router: Router, private observablesService: ObservablesService) { }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });

    this.observablesService.curLog$.subscribe((count) => {
      this.log = count;
    });

    this.observablesService.curWarn$.subscribe((count) => {
      this.warn = count;
    });

    this.observablesService.curError$.subscribe((count) => {
      this.error = count;
    });
  }

}
