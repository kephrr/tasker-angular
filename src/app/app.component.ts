import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './public/layout/main-layout/main-layout.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'web';
  ngOnInit(): void {
    initFlowbite();
  }
}
