import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'forgotpass', loadChildren: './forgotpass/forgotpass.module#ForgotpassPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'select-music', loadChildren: './select-music/select-music.module#SelectMusicPageModule' },
  { path: 'select-artist', loadChildren: './select-artist/select-artist.module#SelectArtistPageModule' },
  { path: 'find-artist', loadChildren: './find-artist/find-artist.module#FindArtistPageModule' },
  { path: 'find-loading', loadChildren: './find-loading/find-loading.module#FindLoadingPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'song-list', loadChildren: './song-list/song-list.module#SongListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
