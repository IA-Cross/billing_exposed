import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-text-primary">Reportes</h1>
        <div class="flex gap-4">
          <button class="px-4 py-2 text-text-secondary hover:text-primary transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Exportar
          </button>
          <button class="px-4 py-2 text-text-secondary hover:text-primary transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtrar
          </button>
        </div>
      </div>

      <!-- Report Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Revenue Overview -->
        <div class="bg-white p-6 rounded-lg border border-border">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Descripción general de los ingresos</h3>
          <div class="h-64 flex items-center justify-center bg-slate-50 rounded-lg mb-4">
            <span class="text-text-secondary">Marcador de posición del gráfico de ingresos</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-text-secondary text-sm">Ingresos totales</p>
              <p class="text-text-primary text-xl font-semibold">$45,850.00</p>
            </div>
            <div>
              <p class="text-text-secondary text-sm">Crecimiento</p>
              <p class="text-green-600 text-xl font-semibold">+12.5%</p>
            </div>
          </div>
        </div>

        <!-- Subscription Stats -->
        <div class="bg-white p-6 rounded-lg border border-border">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Estadísticas de suscripción</h3>
          <div class="h-64 flex items-center justify-center bg-slate-50 rounded-lg mb-4">
            <span class="text-text-secondary">Marcador de posición del gráfico de suscripciones</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-text-secondary text-sm">Suscripciones activas</p>
              <p class="text-text-primary text-xl font-semibold">124</p>
            </div>
            <div>
              <p class="text-text-secondary text-sm">Tasa de abandono</p>
              <p class="text-red-600 text-xl font-semibold">2.4%</p>
            </div>
          </div>
        </div>

        <!-- Recent Transactions -->
        <div class="bg-white p-6 rounded-lg border border-border md:col-span-2">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Transacciones recientes</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-text-secondary text-sm font-medium">Fecha</th>
                  <th class="text-left py-3 px-4 text-text-secondary text-sm font-medium">Cliente</th>
                  <th class="text-left py-3 px-4 text-text-secondary text-sm font-medium">Cantidad</th>
                  <th class="text-left py-3 px-4 text-text-secondary text-sm font-medium">Estatus</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="py-3 px-4 text-text-primary">Mar 28, 2024</td>
                  <td class="py-3 px-4 text-text-primary">Acme Corp</td>
                  <td class="py-3 px-4 text-text-primary">$499.00</td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completado</span>
                  </td>
                </tr>
                <tr class="border-b border-border">
                  <td class="py-3 px-4 text-text-primary">Mar 27, 2024</td>
                  <td class="py-3 px-4 text-text-primary">TechStart Inc</td>
                  <td class="py-3 px-4 text-text-primary">$299.00</td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-4 text-text-primary">Mar 26, 2024</td>
                  <td class="py-3 px-4 text-text-primary">Global Services LLC</td>
                  <td class="py-3 px-4 text-text-primary">$99.00</td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ReportsComponent {} 