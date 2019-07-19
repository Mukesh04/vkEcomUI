import { Component, OnInit, Input } from '@angular/core';
import { SidebarMenuService } from './sidebar-menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Input('menuItems') menuItems;
  @Input('menuParentId') menuParentId;
  parentMenu:Array<any>;

  constructor(private sidenavMenuService:SidebarMenuService) { }

  ngOnInit() {
    this.parentMenu = this.menuItems.subscribe(item => item.menuParentId == this.menuParentId);
    console.log(this.parentMenu, 'sgdfgdf');
  }

  onClick(menuId){
    this.sidenavMenuService.toggleMenuItem(menuId);
    this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
  }

}
