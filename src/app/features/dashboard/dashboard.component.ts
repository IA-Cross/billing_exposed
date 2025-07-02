import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-text-primary">Panel Principal</h1>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-text-secondary text-sm font-medium mb-2">Ingresos Totales</h3>
          <p class="text-text-primary text-2xl font-bold">$24,500</p>
        </div>
        <div class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-text-secondary text-sm font-medium mb-2">Clientes Activos</h3>
          <p class="text-text-primary text-2xl font-bold">45</p>
        </div>
        <div class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-text-secondary text-sm font-medium mb-2">Facturas Pendientes</h3>
          <p class="text-text-primary text-2xl font-bold">12</p>
        </div>
        <div class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-text-secondary text-sm font-medium mb-2">Suscripciones Totales</h3>
          <p class="text-text-primary text-2xl font-bold">89</p>
        </div>
      </div>

      <!-- Blog Posts Section -->
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold text-text-primary">Últimas Actualizaciones</h2>
          <button class="text-primary hover:text-primary/80 text-sm font-medium">Ver todas las publicaciones</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Blog Post 1 -->
          <div class="bg-white rounded-lg border border-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                 alt="Nuevas Funciones" 
                 class="w-full h-48 object-cover"/>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Nuevas Funciones</span>
                <span class="text-text-secondary text-sm">28 Mayo, 2024</span>
              </div>
              <h3 class="text-lg font-semibold text-text-primary mb-2">Presentamos Análisis Avanzado de Facturación</h3>
              <p class="text-text-secondary mb-4">Descubre nuestro nuevo panel de análisis con métricas avanzadas e informes personalizables para mejores perspectivas financieras.</p>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Leer más →</a>
            </div>
          </div>

          <!-- Blog Post 2 -->
          <div class="bg-white rounded-lg border border-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                 alt="Consejos y Trucos" 
                 class="w-full h-48 object-cover"/>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Consejos y Trucos</span>
                <span class="text-text-secondary text-sm">26 Mayo, 2024</span>
              </div>
              <h3 class="text-lg font-semibold text-text-primary mb-2">5 Formas de Optimizar tu Proceso de Facturación</h3>
              <p class="text-text-secondary mb-4">Aprende cómo agilizar tu flujo de facturación y reducir el tiempo dedicado a la gestión de facturas.</p>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Leer más →</a>
            </div>
          </div>

          <!-- Blog Post 3 -->
          <div class="bg-white rounded-lg border border-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                 alt="Actualizaciones" 
                 class="w-full h-48 object-cover"/>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">Actualizaciones</span>
                <span class="text-text-secondary text-sm">24 Mayo, 2024</span>
              </div>
              <h3 class="text-lg font-semibold text-text-primary mb-2">Mejoras en el Rendimiento de la Plataforma</h3>
              <p class="text-text-secondary mb-4">Hemos realizado mejoras significativas en la velocidad y fiabilidad de nuestra plataforma. Descubre las novedades.</p>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Leer más →</a>
            </div>
          </div>
        </div>

        <!-- Recent Articles List -->
        <div class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Artículos Recientes</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-4 pb-4 border-b border-border">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Guía</span>
                  <span class="text-text-secondary text-sm">22 Mayo, 2024</span>
                </div>
                <h4 class="text-text-primary font-medium">Entendiendo los Modelos de Facturación por Suscripción</h4>
              </div>
              <a href="#" class="text-primary hover:text-primary/80 shrink-0">Leer más →</a>
            </div>
            <div class="flex items-start gap-4 pb-4 border-b border-border">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Seguridad</span>
                  <span class="text-text-secondary text-sm">20 Mayo, 2024</span>
                </div>
                <h4 class="text-text-primary font-medium">Protegiendo tu Información de Facturación: Mejores Prácticas</h4>
              </div>
              <a href="#" class="text-primary hover:text-primary/80 shrink-0">Leer más →</a>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Integración</span>
                  <span class="text-text-secondary text-sm">18 Mayo, 2024</span>
                </div>
                <h4 class="text-text-primary font-medium">Nuevas Integraciones de Pasarelas de Pago Disponibles</h4>
              </div>
              <a href="#" class="text-primary hover:text-primary/80 shrink-0">Leer más →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {} 