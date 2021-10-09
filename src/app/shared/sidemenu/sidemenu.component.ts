import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor: pointer
    }
  `
  ]
})
export class SidemenuComponent{

  templateMenu: MenuItem[] = [
    {
      text: 'Basicos',
      path: 'template/basics'
    },
    {
      text: 'Dinamicos',
      path: 'template/dynamics'
    },
    {
      text: 'Switches',
      path: 'template/switches'
    }    
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basicos',
      path: 'reactive/basics'
    },
    {
      text: 'Dinamicos',
      path: 'reactive/dynamics'
    },
    {
      text: 'Switches',
      path: 'reactive/switches'
    }    
  ]

  authMenu: MenuItem[] = [
    {
      text: 'Registro',
      path: 'auth/register'
    },
    {
      text: 'Login',
      path: 'auth/login'
    }
  ]
}
