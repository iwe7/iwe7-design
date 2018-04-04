import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Iwe7DesignDirective } from "./iwe7-design.directive";
import { DesignLayoutComponent } from "./design-layout/design-layout.component";
import { UnderscoreModule } from "iwe7-underscore";
import { Iwe7DesignAddonService } from "./iwe7-design-addon.service";
import {
  Iwe7DesignLibraryService,
  DESIGN_LIBRARYS
} from "./iwe7-design-library.service";
import { TextComponent } from "./iwe7-design-text/text/text.component";
import { TextSettingComponent } from "./iwe7-design-text/text-setting/text-setting.component";
import { PageComponent } from "./iwe7-design-page/page/page.component";
import { PageSettingComponent } from "./iwe7-design-page/page-setting/page-setting.component";

import { component as TextCom } from "./iwe7-design-text/public_api";
import { component as PageCom } from "./iwe7-design-page/public_api";

export const emtryComponents = [
  TextComponent,
  TextSettingComponent,
  PageComponent,
  PageSettingComponent
];

@NgModule({
  imports: [CommonModule, UnderscoreModule, FormsModule, ReactiveFormsModule],
  declarations: [
    Iwe7DesignDirective,
    DesignLayoutComponent,
    ...emtryComponents
  ],
  exports: [Iwe7DesignDirective, DesignLayoutComponent],
  entryComponents: [...emtryComponents]
})
export class Iwe7DesignModule {
  public static forRoot(comps: any): ModuleWithProviders {
    return {
      ngModule: Iwe7DesignModule,
      providers: [
        Iwe7DesignAddonService,
        Iwe7DesignLibraryService,
        {
          provide: DESIGN_LIBRARYS,
          useValue: [
            {
              page: PageCom,
              text: TextCom
            }
          ],
          multi: true
        },
        {
          provide: DESIGN_LIBRARYS,
          useValue: comps,
          multi: true
        }
      ]
    };
  }
}
