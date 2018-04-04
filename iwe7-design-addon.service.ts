import { Injectable } from "@angular/core";
// 应用
@Injectable()
export class Iwe7DesignAddonService {
  // 我的应用
  app: any = {
    // 分享设置
    name: "日天日地日空气",
    share: {},
    // 具体内容 模块列表
    menu: {
      show: true,
      name: "导航栏",
      props: {}
    },
    props: {
      [`runner`]: {
        name: "测试应用",
        active: true,
        share: {},
        footer: {
          show: true,
          name: "footer",
          title: "底部导航",
          props: [],
          router: 'runner/footer'
        },
        // 具体内容 页面列表
        props: [
          {
            title: "首页",
            name: "page",
            active: true,
            router: 'runner/index',
            props: [
              {
                id: "1",
                decode: true,
                name: "text",
                text: "测试label",
                title: "文本",
                class: {
                  [`iwe7-design-text`]: true
                },
                style: {
                  display: "block"
                },
                props: {}
              }
            ],
            share: {
              title: "",
              icon: "",
              desc: ""
            }
          },
          {
            title: "发布",
            name: "page",
            active: false,
            router: 'runner/post',
            props: [],
            share: {
              title: "",
              icon: "",
              desc: ""
            }
          },
          {
            title: "我的",
            name: "page",
            active: false,
            router: 'runner/home',
            props: [],
            share: {
              title: "",
              icon: "",
              desc: ""
            }
          }
        ]
      }
    }
  };

  constructor() {}
}
