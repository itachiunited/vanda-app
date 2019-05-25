import { NgModule } from '@angular/core';

import { VandaAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [VandaAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [VandaAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VandaAppSharedCommonModule {}
