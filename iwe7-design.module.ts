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

import { ButtonComponent } from "./iwe7-design-button/button/button.component";
import { ButtonSettingComponent } from "./iwe7-design-button/button-setting/button-setting.component";

import { CheckboxGroupComponent } from "./checkbox-group/checkbox-group/checkbox-group.component";
import { CheckboxGroupSettingComponent } from "./checkbox-group/checkbox-group-setting/checkbox-group-setting.component";
import { CheckboxComponent } from "./checkbox/checkbox/checkbox.component";
import { CheckboxSettingComponent } from "./checkbox/checkbox-setting/checkbox-setting.component";

import { InputComponent } from "./iwe7-design-input/input/input.component";
import { InputSettingComponent } from "./iwe7-design-input/input-setting/input-setting.component";

import { component as TextCom } from "./iwe7-design-text/public_api";
import { component as PageCom } from "./iwe7-design-page/public_api";
import { component as ButtonCom } from "./iwe7-design-button/public_api";
import { component as CheckboxCom } from "./checkbox/public_api";
import { component as CheckboxGroupCom } from "./checkbox-group/public_api";
import { component as InputCom } from "./iwe7-design-input/public_api";
import { component as SwitchCom } from "./iwe7-design-switch/public_api";
import { component as TextareaCom } from "./iwe7-design-textarea/public_api";
import { component as FormCom } from "./iwe7-design-form/public_api";
import { component as AudioCom } from "./iwe7-design-audio/public_api";
import { component as ImageCom } from "./iwe7-design-image/public_api";
import { component as VideoCom } from "./iwe7-design-video/public_api";
import { component as MapCom } from "./iwe7-design-map/public_api";
import { component as IconCom } from "./iwe7-design-icon/public_api";

import { SwitchComponent } from "./iwe7-design-switch/switch/switch.component";
import { SwitchSettingComponent } from "./iwe7-design-switch/switch-setting/switch-setting.component";
import { TextareaComponent } from "./iwe7-design-textarea/textarea/textarea.component";
import { TextareaSettingComponent } from "./iwe7-design-textarea/textarea-setting/textarea-setting.component";
import { FormComponent } from "./iwe7-design-form/form/form.component";
import { FormSettingComponent } from "./iwe7-design-form/form-setting/form-setting.component";
import { AudioComponent } from "./iwe7-design-audio/audio/audio.component";
import { AudioSettingComponent } from "./iwe7-design-audio/audio-setting/audio-setting.component";
import { ImageComponent } from "./iwe7-design-image/image/image.component";
import { ImageSettingComponent } from "./iwe7-design-image/image-setting/image-setting.component";
import { VideoComponent } from "./iwe7-design-video/video/video.component";
import { VideoSettingComponent } from "./iwe7-design-video/video-setting/video-setting.component";
import { MapComponent } from "./iwe7-design-map/map/map.component";
import { MapSettingComponent } from "./iwe7-design-map/map-setting/map-setting.component";
import { IconComponent } from "./iwe7-design-icon/icon/icon.component";
import { IconSettingComponent } from "./iwe7-design-icon/icon-setting/icon-setting.component";

export const emtryComponents = [
  TextComponent,
  TextSettingComponent,
  PageComponent,
  PageSettingComponent,
  ButtonComponent,
  ButtonSettingComponent,
  CheckboxGroupComponent,
  CheckboxGroupSettingComponent,
  CheckboxComponent,
  CheckboxSettingComponent,
  InputComponent,
  InputSettingComponent,
  SwitchComponent,
  SwitchSettingComponent,
  TextareaComponent,
  TextareaSettingComponent,
  FormComponent,
  FormSettingComponent,
  AudioComponent,
  AudioSettingComponent,
  ImageComponent,
  ImageSettingComponent,
  VideoComponent,
  VideoSettingComponent,
  MapComponent,
  MapSettingComponent,
  IconComponent,
  IconSettingComponent
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
              text: TextCom,
              button: ButtonCom,
              [`checkbox-group`]: CheckboxGroupCom,
              checkbox: CheckboxCom,
              input: InputCom,
              switch: SwitchCom,
              textarea: TextareaCom,
              form: FormCom,
              audio: AudioCom,
              image: ImageCom,
              video: VideoCom,
              map: MapCom,
              icon: IconCom
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
