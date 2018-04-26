import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {NotificationComponent} from './layout/notification/notification.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {NewAdminComponent} from './new-admin/new-admin.component';
import {ArchitectureOverviewComponent} from './layout/architecture-overview/architecture-overview.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path: 'new-admin', component: NewAdminComponent},
    {
        path: 'layout', component: LayoutComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'notification', component: NotificationComponent},
            {path: 'architectures', component: ArchitectureOverviewComponent},
        ]
    },
];


// const routes: Routes = [
//     { path: '', loadChildren: './layout/layout.module#LayoutModule'},
//     { path: 'login', loadChildren: './login/login.module#LoginModule' },
//     { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
//     { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
//     { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
//     { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
//     { path: '**', redirectTo: 'not-found' }
// ];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
