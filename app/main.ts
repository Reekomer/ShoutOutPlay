// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
import * as app from 'application';

// angular
import {provide} from 'angular2/core';

// libs
import {provideStore} from '@ngrx/store';
import {routerReducer, routerMiddleware} from 'ngrx-store-router';
import {TNSFontIconService} from 'nativescript-ng2-fonticon';

// app
import {CORE_PROVIDERS, SpotifyAppDelegate} from './frameworks/core.framework/index';
import {ANALYTICS_PROVIDERS} from './frameworks/analytics.framework/index';
import {
  SHOUTOUTPLAY_PROVIDERS,
  currentTrackReducer,
  playlistReducer,
  searchReducer,
  shoutoutReducer
} from './frameworks/shoutoutplay.framework/index';
import {AppComponent} from './app.component';

// Spotify setup
if (app.ios) {
  app.ios.delegate = SpotifyAppDelegate;
}

nativeScriptBootstrap(AppComponent, [
  NS_ROUTER_PROVIDERS,
  CORE_PROVIDERS,
  ANALYTICS_PROVIDERS,
  SHOUTOUTPLAY_PROVIDERS,
  provide(TNSFontIconService, {
    useFactory: () => {
      return new TNSFontIconService({
        'fa': 'font-awesome.css'
      });
    }
  }),
  provideStore({
    router: routerReducer,
    currentTrack: currentTrackReducer,
    playlists: playlistReducer,
    searchResults: searchReducer,
    shoutOuts: shoutoutReducer
  }),
  routerMiddleware
], { startPageActionBarHidden: false }); // https://github.com/NativeScript/nativescript-angular/issues/121