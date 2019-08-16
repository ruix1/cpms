import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SearchBoxComponent } from './searchbox/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from "../app/searchbox/search.service";
import { SearchboxDirective } from './searchbox.directive';
import { ElerefComponent } from './eleref/eleref.component';
import { Routes, RouterModule } from '@angular/router';
import { CiscoComponent } from './cisco/cisco.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './auth/sign/sign.component';
import { ReactiveComponent } from './auth/reactive/reactive.component';
import { D3Component } from './d3/d3.component';
import { TableComponent } from './auth/table/table.component';
import { ProductPipe } from './auth/product.pipe';
import { LineComponent } from './auth/line/line.component';
import { AuthService } from './services/auth.service';
import { ListService } from './services/list.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListComponent } from './auth/list/list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "home", component: WelcomeComponent },
  { path: "cisco", component: CiscoComponent },
  { path: "todolist", component: TodoListComponent },
  { path: "searchbox", component: SearchBoxComponent },
  { path: "eleref", component: ElerefComponent },
  { path: "login", component: SignComponent },
  { path: "ds", component: D3Component },
  { path: "table", component: TableComponent },
  { path: "signup", component: ReactiveComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: 'home' },

];
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SearchBoxComponent,
    SearchboxDirective,
    ElerefComponent,
    CiscoComponent,
    NavigationComponent,
    WelcomeComponent,
    SignComponent,
    ReactiveComponent,
    D3Component,
    TableComponent,
    ProductPipe,
    LineComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [SearchService,
    AuthService,
    ListService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
