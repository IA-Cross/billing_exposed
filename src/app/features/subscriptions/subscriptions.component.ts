import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-text-primary">Subscriptions</h1>
        <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          New Subscription
        </button>
      </div>

      <!-- Subscription Table -->
      <div class="bg-white rounded-lg border border-border overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="bg-slate-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Client</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Plan</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Next Billing</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Amount</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-border">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-text-primary">Acme Corp</div>
                  <div class="text-sm text-text-secondary">john&#64;acme.com</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="text-sm text-text-primary">Enterprise Plan</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">Apr 1, 2024</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$499.00</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  <button class="hover:text-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-text-primary">TechStart Inc</div>
                  <div class="text-sm text-text-secondary">sarah&#64;techstart.io</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="text-sm text-text-primary">Pro Plan</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">Apr 15, 2024</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$299.00</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  <button class="hover:text-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-text-primary">Global Services LLC</div>
                  <div class="text-sm text-text-secondary">accounts&#64;globalserv.com</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="text-sm text-text-primary">Basic Plan</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">Apr 30, 2024</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-primary">$99.00</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  <button class="hover:text-primary">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class SubscriptionsComponent {} 