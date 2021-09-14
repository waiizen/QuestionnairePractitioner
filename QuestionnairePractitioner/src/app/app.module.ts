import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import { MatTableModule } from '@angular/material/table';
import {PopupInfoPractitioner} from "./Popup/popup-info-practitioner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { ManageQuestionnaireComponent } from './manage-questionnaire/manage-questionnaire.component';
import { MyPatientComponent } from './my-patient/my-patient.component';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {PopupViewQuestionnaire} from "./Popup/popup-view-questionnaire";
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from "@angular/material/badge";
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newQuestionnaire', component: NewQuestionnaireComponent},
  {path: 'manageQuestionnaire', component: ManageQuestionnaireComponent},
  {path: 'myPatient', component: MyPatientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PopupInfoPractitioner,
    NavBarComponent,
    NewQuestionnaireComponent,
    ManageQuestionnaireComponent,
    MyPatientComponent,
    HomeComponent,
    PopupViewQuestionnaire,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatBadgeModule,
    MatTableModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
