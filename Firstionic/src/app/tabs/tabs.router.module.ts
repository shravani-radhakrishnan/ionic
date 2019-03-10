import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bar',
        children: [
          {
            path: '',
            loadChildren: '../bar/bar.module#BarPageModule'
          }
        ]
      },
      {
        path: 'line',
        children: [
          {
            path: '',
            loadChildren: '../line/line.module#LinePageModule'
          }
        ]
      },
      {
        path: 'dougnut',
        children: [
          {
            path: '',
            loadChildren: '../dougnut/dougnut.module#DougnutPageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
