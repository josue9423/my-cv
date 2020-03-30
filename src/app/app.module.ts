import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ContentMainComponent } from './componentes/content-main/content-main.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ReferenceComponent } from './componentes/reference/reference.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { SkillItemComponent } from './componentes/skill-item/skill-item.component';
import { EducationItemComponent } from './componentes/education-item/education-item.component';
import { ExperienceItemComponent } from './componentes/experience-item/experience-item.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CertificatesComponent } from './componentes/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentMainComponent,
    ContactComponent,
    ReferenceComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    SkillItemComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
