import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FieldConfig2, Validator } from '../../field.interface';
import { NameRulesService } from 'app/main/name-rules/name-rules.service';


@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig2[] = [];

  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() emailTaken: EventEmitter<any> = new EventEmitter<any>();
  @Output() paypal: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  noValid = false;


  get value(): void {
    return this.form.value;
  }
  constructor(
    private fb: FormBuilder,
    private _nameRuleService: NameRulesService
    ) { }

  ngOnInit(): void {
    this.form = this.createControl();
  }

  onSubmit(event: Event): void {
    this.noValid = false;
    event.preventDefault();
    event.stopPropagation();

    if (this.form.valid) {
      console.log(this.form.value);
    }
    // const projectID = 'TEST_RICARDO';
    // const rationales = ['safety,innnovation,pain,relief'];
    // const wordparts = ['zav,saf,fety,ety|innno,nova,novation,tion|in,pai,nipa,pa|rel,lif,lief,lif|'];
    // this._nameRuleService.addRationalesAndWordParts(projectID, rationales.toString(), wordparts.join('|') ).subscribe(res => {
    //   console.log(res);      
    // });

  }

  createControl(): FormGroup {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') { return; }
      const control = this.fb.control(
        { value: field.value, disabled: (field.disabled === 'false') ? false : true },
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any): any {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
