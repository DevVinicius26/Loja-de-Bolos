import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BuscaComponent } from './busca/busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { Cadastro } from './cadastro/cadastro'; // <--- Importa do ficheiro cadastro.ts
import { EsqueciComponent } from './esqueci/esqueci.component';

export const routes: Routes = [
  { path: '', component: VitrineComponent },
  { path: 'detalhe/:nome', component: DetalheComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: Cadastro },
  { path: 'esqueci', component: EsqueciComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];