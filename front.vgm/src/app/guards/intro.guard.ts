import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

export const INTRO_KEY = 'intro-seen';
// import { Plugins } from '@capacitor/core';
// import { Storage } from Plugins;

import { Storage } from '@capacitor/storage';

// import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanLoad {
  constructor(private router: Router) {}
  
  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await Storage.get({ key: INTRO_KEY });
    if (hasSeenIntro && hasSeenIntro.value === 'true') {
      return true;
    } else {
      this.router.navigateByUrl('/intro', { replaceUrl: true });
      return false;
    }
  }
}
