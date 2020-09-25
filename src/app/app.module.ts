import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddPostComponent,
    RegisterComponent, 
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'add-post', component: AddPostComponent },
      { path: 'register', component: RegisterComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
