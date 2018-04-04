import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentFactory,
  SimpleChanges,
  Renderer2
} from "@angular/core";
import { Iwe7DesignLibraryService } from "./iwe7-design-library.service";
import * as _ from "underscore";
import { fromEvent } from "rxjs/observable/fromEvent";
/**
 *design="name;class 'class';style 'style';drag true; drop true;"
 */

export const instanceMap: Map<string, any> = new Map();

@Directive({
  selector:
    "[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]"
})
export class Iwe7DesignDirective implements OnChanges {
  @Input() design: any;
  @Input() designClass: { [key: string]: boolean };
  @Input() designStyle: { [key: string]: string };
  @Input() designDrag: boolean;
  @Input() designDrop: boolean;
  @Input() designSetting: boolean = false;
  @Input() designDebug: boolean = false;

  moduleRef: any;
  viewContainerRef: ViewContainerRef;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
    private lib: Iwe7DesignLibraryService,
    private renderer2: Renderer2
  ) {
    this.viewContainerRef = _viewContainerRef;
  }

  ngOnInit() {
    if (this.designDebug) {
      console.log(this);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("design" in changes) {
      this.createComponent();
    }
  }

  private createComponent() {
    this.viewContainerRef.clear();
    let component;
    let name = this.design.name || null;
    if (!this.designSetting) {
      component = this.lib.get(name);
      this.lib.uuid = null;
    } else {
      component = this.lib.getSetting(name);
    }
    if (!component) {
      return "";
    }
    const elInjector = this.viewContainerRef.parentInjector;
    const componentFactoryResolver: ComponentFactoryResolver = this.moduleRef
      ? this.moduleRef.componentFactoryResolver
      : elInjector.get(ComponentFactoryResolver);
    const componentFactory = componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = this.viewContainerRef.createComponent(
      componentFactory
    );
    const { instance } = componentRef;
    // 新建一个实例
    (<any>instance).props = this.design;

    if (this.lib.uuid) {
      (<any>instance).props.id = this.lib.uuid;
      (<any>instance).props = instanceMap.get(this.lib.uuid).props;
      (<any>instance).instance = instanceMap.get(this.lib.uuid);
    } else {
      this.lib.uuid = (<any>instance).props.id = new Date().getTime();
      instanceMap.set(this.lib.uuid, instance);
    }
    if (!this.designSetting) {
      this.setClass((<any>instance).ele.nativeElement);
      this.setStyle((<any>instance).ele.nativeElement);

      if (this.designDrag) {
        this.setDrag(instance);
      }
      if (this.designDrop) {
        this.setDrop(instance);
      }
    }
  }

  private setClass(ele: any) {
    _.map(this.design.class, (s, key) => {
      if (s) {
        this.renderer2.addClass(ele, "" + key);
      } else {
        this.renderer2.removeClass(ele, "" + key);
      }
    });
  }

  private setStyle(ele: any) {
    _.map(this.design.style, (s, key) => {
      this.renderer2.setStyle(ele, "" + key, s);
    });
  }

  private setDrag(instance: any) {
    let ele = instance.ele.nativeElement;
    this.etAttribute(
      {
        draggable: true
      },
      ele
    );
    let uuid: string;
    fromEvent(ele, "dragstart").subscribe((ev: DragEvent) => {
      uuid = instance.id;
      ev.dataTransfer.setData("name", "guid_" + instance.guid);
      ev.stopPropagation();
    });
    fromEvent(ele, "dragend").subscribe((ev: DragEvent) => {
      // dragend 删除这一个
      // this.history.removeComponentByUuid(uuid);
      console.log(ele);
    });
  }

  private setDrop(instance: any) {
    const ele = instance.ele.nativeElement;
    fromEvent(ele, "drop").subscribe((ev: DragEvent) => {});
  }

  private etAttribute(classObj: { [key: string]: any }, ele?: HTMLElement) {
    if (!ele) {
      return "";
    }
    for (const key in classObj) {
      if (typeof classObj[key] === "boolean") {
        if (classObj[key]) {
          this.renderer2.setAttribute(ele, key, "true");
        } else {
          this.renderer2.removeAttribute(ele, key);
        }
      } else {
        this.renderer2.setAttribute(ele, key, classObj[key]);
      }
    }
  }
}
