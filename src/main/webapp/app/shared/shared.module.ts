import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VandaAppSharedLibsModule, VandaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [VandaAppSharedLibsModule, VandaAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [VandaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VandaAppSharedModule {
  static forRoot() {
    return {
      ngModule: VandaAppSharedModule
    };
  }
}
