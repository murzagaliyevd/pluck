import { AppConfig } from './app/shared/models/app-config';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

fetch('assets/configs/runtime-environment.json')
  .then(response => {
    return response.json()
  })
  .then( (data: AppConfig) => {
    if (data.production) {
      enableProdMode();
    }
    environment.appConfig = data;
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  });
