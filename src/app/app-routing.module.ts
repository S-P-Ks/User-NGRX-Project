import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './post/add/add.component';
import { PostComponent } from './post/post.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: PostComponent,
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: UserUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
