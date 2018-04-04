import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "text",
  template: ``,
  styles: [``]
})
export class TextComponent implements OnInit {
  default: any = {
    decode: true,
    text: "测试label",
    class: {
      [`iwe7-design-text`]: true
    },
    style: {
      display: "block"
    },
    props: {}
  };
  @Input() props: any;
  @HostBinding("attr.id") _id: string;
  @HostBinding("innerHTML") _html: string;

  constructor(public ele: ElementRef, public cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.props = { ...this.default, ...this.props };
    this._id = this.props.id;
    this._html = this.props.text;
  }

  update() {
    this._html = this.props.text;
  }
}
