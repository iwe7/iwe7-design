import { Injectable, InjectionToken, Inject } from "@angular/core";
import * as _ from "underscore";
// 组件库
export const DESIGN_LIBRARYS = new InjectionToken("DESIGN_LIBRARYS");
@Injectable()
export class Iwe7DesignLibraryService {
  components: any;
  uuid: any;
  constructor(@Inject(DESIGN_LIBRARYS) components: any) {
    this.components = _.flatten(components);
  }

  get(key: string) {
    let com: any;
    this.components.map(item => {
      if (item[key]) {
        com = item[key];
      }
    });
    return com ? com.preview : null;
  }

  getSetting(key: string) {
    let com: any;
    this.components.map(item => {
      if (item[key]) {
        com = item[key];
      }
    });
    return com ? com.setting : null;
  }
}
