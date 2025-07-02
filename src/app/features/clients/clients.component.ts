import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-text-primary">Clientes</h1>
        <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Agregar cliente
        </button>
      </div>

      <!-- Client Search -->
      <div class="flex gap-4">
        <div class="flex-1">
          <input
            type="text"
            placeholder="Buscar clientes..."
            class="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary"
          />
        </div>
        <button class="px-4 py-2 text-text-secondary hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>

      <!-- Clients Table -->
      <div class="bg-white rounded-lg border border-border overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="bg-slate-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Contacto</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Estatus</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Total gastado</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-border">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <span class="text-text-primary font-medium">AC</span>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-text-primary">Acme Corporation</div>
                      <div class="text-sm text-text-secondary">Tech Industry</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-text-primary">John Smith</div>
                  <div class="text-sm text-text-secondary">john&#64;acme.com</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Activo</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$12,450.00</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary space-x-3">
                  <button class="hover:text-primary">Editar</button>
                  <button class="hover:text-primary">Ver</button>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <span class="text-text-primary font-medium">TS</span>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-text-primary">TechStart Inc</div>
                      <div class="text-sm text-text-secondary">Software</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-text-primary">Sarah Johnson</div>
                  <div class="text-sm text-text-secondary">sarah&#64;techstart.io</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Activo</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$8,750.00</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary space-x-3">
                  <button class="hover:text-primary">Editar</button>
                  <button class="hover:text-primary">Ver</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class ClientsComponent {} 