import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {	
  name = '';
  title = 'app';

  showModal(): void {
    $(".ui.modal").modal("show");
  }

  onToggle() {
    $('.ui.sidebar').sidebar('toggle');
  }
}
