import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef
} from "@angular/core";

export class Iwe7DesignComponent {
  @Input() props: any;
  @HostBinding("attr.id") _id: string;
  constructor(public ele: ElementRef) {}
  // 更新数据
  update() {}
}

export class Iwe7DesignSettingComponent {
  @Input() props: any;
  instance: any;
  constructor(public ele: ElementRef) {}
}

export interface Iwe7Design {
  title: string;
  name: string;
  show: true;
  setting: any;
  preview: any;
  props: {
    name: string;
    style: any;
    class: any;
  };
}

export interface Iwe7DesignConfig {
  [key: string]: Iwe7Design;
}
