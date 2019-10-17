import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicProfileComponent } from './dynamic-profile.component';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseSharedModule } from '@fuse/shared.module';
// import { SmartComponent } from '../smart/smart.component';
import { LabelComponent } from './components/textlabel/textlabel.component';
// import { RegistrationFormComponent } from '../login-register/registration-form/registration-form.component';
// import { ProfileComponent } from '../login-register/profile/profile.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageUploadModule } from 'ng2-imageupload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleComponent } from '../sample/sample.component';
import { NameRulesComponent } from '../name-rules/name-rules.component';
import { MatTable, MatTableModule, MatSliderModule, MatGridList, MatGridListModule } from '@angular/material';
const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'names/:projectid',
    component: NameRulesComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FuseSharedModule,
    PdfViewerModule,
    ImageUploadModule,
    MatFormFieldModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSliderModule,
    MatGridListModule
  ],
  declarations: [
    // ProfileComponent,
    AutocompleteComponent,
    // SmartComponent,
    // RegistrationFormComponent,
    DynamicProfileComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    LabelComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FileUploaderComponent,
    SampleComponent,
    NameRulesComponent
  ],
  entryComponents: [
    AutocompleteComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    LabelComponent,
    FileUploaderComponent
  ]
})
export class DynamicProfileModule { }
