import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {}

  irParaBusca(event: Event) {
    event.preventDefault();
    const input = (document.getElementById('termoBusca') as HTMLInputElement).value;
    if (input.trim()) {
      this.router.navigate(['/busca'], { queryParams: { termo: input } });
    }
  }
}