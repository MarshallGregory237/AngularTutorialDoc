import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})

export class PropertyBindingComponent {

  imageUrl = '../../../../public/favicon.ico';

  isEditable = false;
}
