import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Iwe7DesignSettingComponent, Iwe7DesignComponent } from '../../interface';
@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends Iwe7DesignComponent implements OnInit {
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
