import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Iwe7DesignSettingComponent, Iwe7DesignComponent } from '../../interface';

@Component({
  selector: 'button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.scss']
})
export class ButtonSettingComponent extends Iwe7DesignSettingComponent implements OnInit {
  @Input() props: any;
  constructor(
    ele: ElementRef
  ) {
    super(ele);
  }

  ngOnInit() {
    console.log(this.props);
  }

}
