import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { FieldConfig2 } from '../dynamic-profile/field.interface';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { NameRulesService } from './name-rules.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name-rules',
  templateUrl: './name-rules.component.html',
  styleUrls: ['./name-rules.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class NameRulesComponent implements OnInit {

  constructor(
    private _fuseConfigService: FuseConfigService,
    private route: ActivatedRoute,
    private _nameRuleService: NameRulesService
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: false
        }
      }
    };
  }
  questions: FieldConfig2[] = [
    {
      labelValue: 'upload-file *',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your First Name',
      type: 'file',
      label: '',
      name: 'upload-file *',
      value: '',
      inputType: 'file',
      // validations: [
      //   {
      //     name: 'required',
      //     validator: Validators.required,
      //     message: 'please enter first name'
      //   }
      // ]
    },
    // {


    //   icon: '',
    //   defaultInputValue: '',
    //   componentType: 'false',
    //   options: [''],
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Enter or paste Recraft Names',
    //   type: 'input',
    //   label: 'Recraft Names',
    //   name: 'Recraft Names',
    //   value: '',
    //   inputType: 'text'
    // },
    // {
    //   labelValue: 'Min Letters',
    //   icon: '',
    //   defaultInputValue: '',
    //   componentType: 'false',
    //   options: [''],
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Enter number',
    //   type: 'input',
    //   label: 'Min Letters',
    //   name: 'Min Letters',
    //   value: '',
    //   inputType: 'number',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'please enter last name'
    //     }
    //   ]
    // },
    // {
    //   labelValue: 'Max Letters',
    //   icon: '',
    //   defaultInputValue: '',
    //   componentType: 'false',
    //   options: [''],
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Enter number',
    //   type: 'input',
    //   label: 'Max Letters',
    //   name: 'Max Letters',
    //   value: '',
    //   inputType: 'number',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'please enter last name'
    //     }
    //   ]
    // },
    // {
    //   labelValue: 'Different Lenght',
    //   icon: 'sql',
    //   defaultInputValue: '',
    //   componentType: 'bi-select',
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Different Lenght',
    //   type: 'checkbox',
    //   label: 'Different Lenght',
    //   name: 'Different Lenght',
    //   value: '',
    //   inputType: 'bi-select',

    // },
    // {
    //   labelValue: 'Different Prefix',
    //   icon: 'sql',
    //   defaultInputValue: '',
    //   componentType: 'bi-select',
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Different Prefix',
    //   type: 'checkbox',
    //   label: 'Different Prefix',
    //   name: 'Different Prefix',
    //   value: '',
    //   inputType: 'bi-select',

    // },
    // {
    //   labelValue: 'Different Suffix',
    //   icon: 'sql',
    //   defaultInputValue: '',
    //   componentType: 'bi-select',
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Different Suffix',
    //   type: 'checkbox',
    //   label: 'Different Suffix',
    //   name: 'Different Suffix',
    //   value: '',
    //   inputType: 'bi-select',

    // },
    // {
    //   labelValue: 'Different Letter / Letter Position',
    //   icon: 'sql',
    //   defaultInputValue: '',
    //   componentType: 'bi-select',
    //   disabled: 'false',
    //   componentId: '0',
    //   sortOrder: '0',
    //   tooltip: '',
    //   placeHolder: 'Different Letter / Letter Position',
    //   type: 'checkbox',
    //   label: 'Different Letter / Letter Position',
    //   name: 'Different Letter / Letter Position',
    //   value: '',
    //   inputType: 'bi-select',

    // }
  ];
  projectid;
  dataTable;
  fieldData2 = [
    {
      item: this.questions,
      name: 'Creative Name Rules'
    }

  ];

  fieldOBJ = this.fieldData2;
  name = new FormControl('');
  ngOnInit(): void {
    this.projectid = this.route.snapshot.paramMap.get('projectid');
    this._nameRuleService.setProjectId(this.projectid);
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);

    // tslint:disable-next-line:max-line-length
    const res = '[{"Rationale":"innnovation","WordParts":[{"wp": "innno","infix": "true", "prefix": "true","suffix": "true"},{"wp": "nova","infix": "true", "prefix": "true","suffix": "true"},{"wp": "novation","infix": "true", "prefix": "true","suffix": "true"},{"wp": "tion","infix": "true", "prefix": "true","suffix": "true"}]},{"Rationale":"pain","WordParts":[{"wp": "in","infix": "true", "prefix": "true","suffix": "true"},{"wp": "nipa","infix": "true", "prefix": "true","suffix": "false"},{"wp": "pa","infix": "true", "prefix": "true","suffix": "false"},{"wp": "pai","infix": "true", "prefix": "true","suffix": "true"}]},{"Rationale":"relief","WordParts":[{"wp": "lief","infix": "true", "prefix": "true","suffix": "true"},{"wp": "lif","infix": "true", "prefix": "true","suffix": "true"},{"wp": "rel","infix": "true", "prefix": "true","suffix": "true"}]},{"Rationale":"safety","WordParts":[{"wp": "ety","infix": "true", "prefix": "true","suffix": "true"},{"wp": "fety","infix": "true", "prefix": "true","suffix": "true"},{"wp": "saf","infix": "true", "prefix": "true","suffix": "true"},{"wp": "zav","infix": "true", "prefix": "true","suffix": "true"}]},{"Rationale":"test","WordParts":[{"wp": "1","infix": "true", "prefix": "true","suffix": "true"},{"wp": "2","infix": "true", "prefix": "true","suffix": "true"},{"wp": "3","infix": "true", "prefix": "true","suffix": "true"},{"wp": "wp1","infix": "true", "prefix": "true","suffix": "true"},{"wp": "wp2","infix": "true", "prefix": "true","suffix": "true"},{"wp": "wp3","infix": "true", "prefix": "true","suffix": "true"}]},{"Rationale":"test2","WordParts":[{"wp": "WP1","infix": "true", "prefix": "true","suffix": "true"},{"wp": "WP2","infix": "true", "prefix": "true","suffix": "true"}]}]';

    this.dataTable = JSON.parse(res);

  }
}
