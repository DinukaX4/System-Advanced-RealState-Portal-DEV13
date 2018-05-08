import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {HomeModule} from './home/home.module';
import {LayoutComponent} from './layout/layout.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {NotificationComponent} from './layout/notification/notification.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ForgetPasswordService} from './services/forget-password.service';
import {HttpModule} from '@angular/http';
import {NewAdminRegistrationComponent} from './new-admin-registration/new-admin-registration.component';
import {AdminService} from './services/admin.service';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ArchitectureOverviewComponent} from './layout/architecture-overview/architecture-overview.component';
import {ResetPasswordService} from './services/reset-password.service';
import {ConstructorProfileComponent} from './layout/constructor-profile/constructor-profile.component';
import {ArchitectureProfileComponent} from './layout/architecture-profile/architecture-profile.component';
import {ConstructorOverviewComponent} from './layout/constructor-overview/constructor-overview.component';
import {ArchitectureService} from './services/architecture.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {StarRatingModule} from 'angular-star-rating';
import {ConstructorService} from './services/constructor.service';
import {BankerOverviewComponent} from './layout/banker-overview/banker-overview.component';
import {BankerService} from './services/banker.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LayoutComponent,
        SidebarComponent,
        NotificationComponent,
        DashboardComponent,
        ForgetPasswordComponent,
        NewAdminRegistrationComponent,
        ResetPasswordComponent,
        ArchitectureOverviewComponent,
        ConstructorProfileComponent,
        ArchitectureProfileComponent,
        ConstructorOverviewComponent,
        BankerOverviewComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HomeModule,
        StarRatingModule.forRoot()
    ],
    providers: [
        ForgetPasswordService,
        AdminService,
        AuthService,
        AuthGuard,
        ResetPasswordService,
        ArchitectureService,
        ConstructorService,
        BankerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
