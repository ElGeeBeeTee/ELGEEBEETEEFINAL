import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForumItemComponent } from './components/forum-item/forum-item.component';
import { HomeComponent } from './components/home/home.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'forum-item/:id', component: ForumItemComponent},
{ path: 'home', component: HomeComponent },
{ path: 'meditation', component: MeditationComponent },
{ path: 'sign-in', component: SignInComponent },
{ path: 'register-user', component: SignUpComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'verify-email-address', component: VerifyEmailComponent },
{ path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
