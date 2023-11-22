import { Component, OnInit, Optional } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-resolution-modifier',
  templateUrl: './resolution-modifier.component.html',
  styleUrls: ['./resolution-modifier.component.scss'],
})
export class ResolutionModifierComponent implements OnInit {
  constructor(@Optional() private loggerService: LoggerService) {}

  serviceCode: string = `Sample Code`;

  ngOnInit(): void {
    this.loggerService.prefix = 'App';
    this.loggerService.log('Hello from AppComponent');
  }
}
