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

import { emtryComponents, Libs } from "./components/public_api";
import { RouterModule } from "@angular/router";

import { DesignPage } from "./pages/design/design.component";
import { AddonsPage } from "./pages/addons/addons.component";
import { TemplatePage } from "./pages/template/template.component";
import { ComponentsPage } from "./pages/components/components.component";
import { ResourcePage } from "./pages/resource/resource.component";
import { RoutingPage } from "./pages/routing/routing.component";
import { DatabasePage } from "./pages/database/database.component";
import { HomePage } from "./pages/home/home.component";

@NgModule({
  imports: [
    CommonModule,
    UnderscoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: RoutingPage,
        children: [
          {
            path: "",
            component: DesignPage
          },
          {
            path: "addons",
            component: AddonsPage
          },
          {
            path: "template",
            component: TemplatePage
          },
          {
            path: "components",
            component: ComponentsPage
          },
          {
            path: "resource",
            component: ResourcePage
          },
          {
            path: "database",
            component: DatabasePage
          },
          {
            path: "home",
            component: HomePage
          }
        ]
      }
    ])
  ],
  declarations: [
    Iwe7DesignDirective,
    DesignLayoutComponent,
    DesignPage,
    ...emtryComponents,
    AddonsPage,
    TemplatePage,
    ComponentsPage,
    ResourcePage,
    RoutingPage,
    DatabasePage,
    HomePage
  ],
  exports: [Iwe7DesignDirective, DesignLayoutComponent, RouterModule],
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
          useValue: [Libs],
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
