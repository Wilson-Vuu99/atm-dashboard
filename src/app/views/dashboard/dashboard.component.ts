import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatInputModule } from '@angular/material/input';  
import { MatFormFieldModule } from '@angular/material/form-field'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,    // Add CommonModule for *ngIf and pipes
    FormsModule,     // Add FormsModule for ngModel
    MatDatepickerModule,  // Add Material Datepicker module
    MatInputModule,  // Add Material Input module
    MatFormFieldModule, 
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
}
