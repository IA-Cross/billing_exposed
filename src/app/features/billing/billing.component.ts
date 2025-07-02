import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-text-primary">Facturación</h1>
        <div class="flex gap-3">
          <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Nueva factura
          </button>
          <button class="border border-border px-4 py-2 rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Exportar facturas
          </button>
        </div>
      </div>

      <!-- Quick Bill Creation -->
      <div class="bg-white rounded-lg border border-border p-6">
        <h2 class="text-lg font-semibold text-text-primary mb-4">Crear nueva factura</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Client Selection -->
          <div>
            <label class="block text-text-secondary text-sm font-medium mb-2">Cliente</label>
            <select class="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary">
              <option value="">Seleccionar un cliente</option>
              <option value="1">Acme Corporation</option>
              <option value="2">TechStart Inc</option>
              <option value="3">Global Services LLC</option>
            </select>
          </div>

          <!-- Bill Date -->
          <div>
            <label class="block text-text-secondary text-sm font-medium mb-2">Fecha de facturación</label>
            <input type="date" class="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary" />
          </div>

          <!-- Items Section -->
          <div class="md:col-span-2">
            <label class="block text-text-secondary text-sm font-medium mb-2">Elementos</label>
            <div class="space-y-4">
              <!-- Item 1 -->
              <div class="flex gap-4 items-start">
                <div class="flex-1">
                  <input type="text" placeholder="Descripción de elemento" class="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary" />
                </div>
                <div class="w-32">
                  <input type="number" placeholder="Cantidad" class="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary" />
                </div>
                <div class="w-32">
                  <input type="number" placeholder="Precio" class="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary" />
                </div>
                <button class="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <button class="mt-4 text-primary hover:text-primary/80 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Agregar elementos
            </button>
          </div>

          <!-- Totals -->
          <div class="md:col-span-2">
            <div class="border-t border-border pt-4 mt-4">
              <div class="flex justify-end space-y-2">
                <div class="w-64 space-y-2">
                  <div class="flex justify-between text-text-secondary">
                    <span>Subtotal:</span>
                    <span>$0.00</span>
                  </div>
                  <div class="flex justify-between text-text-secondary">
                    <span>Impuestos (16%):</span>
                    <span>$0.00</span>
                  </div>
                  <div class="flex justify-between text-lg font-semibold text-text-primary">
                    <span>Total:</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end gap-3 mt-6">
          <button class="px-6 py-2 border border-border rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-colors">
            Guardar como borrador
          </button>
          <button class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Crear factura
          </button>
        </div>
      </div>

      <!-- Recent Bills -->
      <div class="bg-white rounded-lg border border-border overflow-hidden">
        <div class="p-6 border-b border-border">
          <h2 class="text-lg font-semibold text-text-primary">Facturas recientes</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="bg-slate-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Factura #</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Cantidad</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Estatus</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-border">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">#INV-2024-001</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-text-primary">Acme Corp</div>
                  <div class="text-sm text-text-secondary">john&#64;acme.com</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">Mar 28, 2024</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$1,499.00</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Pagado</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary space-x-3">
                  <button class="hover:text-primary">Ver</button>
                  <button class="hover:text-primary">Descargar</button>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">#INV-2024-002</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-text-primary">TechStart Inc</div>
                  <div class="text-sm text-text-secondary">sarah&#64;techstart.io</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">Mar 27, 2024</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$899.00</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary space-x-3">
                  <button class="hover:text-primary">Ver</button>
                  <button class="hover:text-primary">Descargar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class BillingComponent {} 