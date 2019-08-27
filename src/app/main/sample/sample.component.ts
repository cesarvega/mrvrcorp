import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FieldConfig2, FieldGroupConfig } from '../dynamic-profile/field.interface';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { Validators } from '@angular/forms';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }
    // / tabConfig = this.fieldData;
    // tslint:disable-next-line:variable-name
    P_info_1: FieldConfig2[] = [
    {
        labelValue: 'First name *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter your First Name',
        type: 'input',
        label: 'First name *',
        name: 'First name *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must enter first name'
            }
        ]
    },
    {
        labelValue: 'Middle name',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter your Middle Name (Optional)',
        type: 'input',
        label: 'Middle name',
        name: 'Middle name',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Last name *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter your Last Name',
        type: 'input',
        label: 'Last name *',
        name: 'Last name *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must enter last name'
            }
        ]
    },
    {
        labelValue: 'Gender *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-radio',
        options: [
            'Female',
            'Male'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'Gender *',
        name: 'Gender *',
        value: '',
        inputType: 'bi-input-radio',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Select your Gender is required'
            }
        ]
    },
    {
        labelValue: 'Date of birth *',
        icon: '',
        defaultInputValue: '1999-06-15',
        componentType: 'bi-input-date',
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'Date of birth *',
        name: 'Date of birth *',
        value: '',
        inputType: 'date',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must enter your date of birth is required'
            }
        ]
    },
    {
        labelValue: 'Select country of residency *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: ['Colombia', 'Espania', 'E.U'],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Country',
        type: 'select',
        label: 'Select country of residency *',
        name: 'Select country of residency *',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Select your country of residency'
            }
        ]
    }, {
        labelValue: 'Mailing street address 1 *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Address 1',
        type: 'input',
        label: 'Mailing street address 1 *',
        name: 'Mailing street address 1 *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Please provide Mailing Address'
            }
        ]
    }, {
        labelValue: 'Mailing street address 2',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Address 2',
        type: 'input',
        label: 'Mailing street address 2',
        name: 'Mailing street address 2',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }, {
        labelValue: 'Select State/Province *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select-input',
        options: [
            'Catalunia',
            'Valle',
            'California'

        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'State/Province',
        type: 'select',
        label: 'Select State/Province *',
        name: 'Select State/Province *',
        value: '',
        inputType: '',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Select your state/province of residency'
            }
        ]
    },
    {
        labelValue: 'Zip Code *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-number',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'ZipCode',
        type: 'input',
        label: 'Zip Code *',
        name: 'Zip Code *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'zip code is required'
            }
        ]
    },
    {
        labelValue: 'Cell Phone',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: 'U.S./Canada can be used to receive our survey texts',
        placeHolder: 'Enter your Cell Phone Number',
        type: 'input',
        label: 'Cell Phone',
        name: 'Cell Phone',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Specify your profession or occupation in order to continue',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-dropdown',
        options: [
            {
                'names': 'Not related to Health Care',
                'values': 'NonHCP'
            },
            {
                'names': 'Physician/Doctor of Medicine (MD, DO)',
                'values': 'MD_PA_lic_Info'
            },
            {
                'names': 'Physician Assistant (PA)',
                'values': 'MD_PA_lic_Info'
            },
            {
                'names': 'Nurse',
                'values': 'Nurse_Lic_Info'
            },
            {
                'names': 'Pharmacist',
                'values': 'Pharm_Lic_Info'
            },
            {
                'names': 'Pharmacist Technician',
                'values': 'Pharm_Lic_Info'
            },
            {
                'names': 'Dentist',
                'values': 'OTHER_HCP'
            },
            {
                'names': 'Optometrist',
                'values': 'OTHER_HCP'
            },
            {
                'names': 'Veterinarian',
                'values': 'OTHER_HCP'
            },
            {
                'names': 'Allied Health Care Profession or Occupation',
                'values': 'OTHER_HCP'
            },
            'Not related to Health Care',
            'Physician/Doctor of Medicine (MD, DO)',
            'Physician Assistant (PA)',
            'Nurse',
            'Pharmacist',
            'Pharmacist Technician',
            'Dentist',
            'Optometrist',
            'Veterinarian',
            'Allied Health Care Profession or Occupation'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Profession/Occupation',
        type: 'select',
        label: 'Specify your profession or occupation in order to continue',
        name: 'Specify your profession or occupation in order to continue',
        value: '',
        inputType: '',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Profession is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: 'Your profile information is used to match up with defined research specifications in order to determine which research studies you will be invited to participate. We need to collect some of your personal information to know who you are and where to send you the payment when the time arrives.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: '',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }

];

    NonHCP: FieldConfig2[] = [
    {
        labelValue: 'Type of industry *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [

            'Aerospace industry',
            'Agriculture',
            'Education industry'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select an Industry',
        type: 'select',
        label: 'Type of industry *',
        name: 'Type of industry *',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your type of industry',
            }
        ]
    },
    {
        labelValue: 'Title position *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            'Meeting Management',
            'Office Support',
            'Administrative Assistant'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a Position',
        type: 'select',
        label: 'Title position *',
        name: 'Title position *',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your title position',
            }
        ]
    },
    {
        labelValue: 'Level of Education',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            'Secondary Education',
            'Professional'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Education Level',
        type: 'select',
        label: 'Level of Education',
        name: 'Level of Education',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Spoken Languages',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            {
                'sql': '[BI_MEMBERS].[dbo].[pm_getLanguageList]'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Language(s)',
        type: 'input',
        label: 'Spoken Languages',
        name: 'Spoken Languages',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Employer name',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter Employer Name (optional)',
        type: 'input',
        label: 'Employer name',
        name: 'Employer name',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: 'Anybody can register and participate in our surveys; but we need to know which your occupation is to know who you are and classify you in the right category to participate in our surveys. We look for people from different industries to have a wide variety opinions; your profession and level of education we will tell us what type of surveys we can qualify for. All this information will help you to increase your chances to receive more invitations to participate in our surveys.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-help',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-button',
        options: [
            'Previous',
            'Continue'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-button',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    OTHER_HCP: FieldConfig2[] = [
    {
        labelValue: 'Profession or Occupation *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Pofession/Occupation',
        type: 'input',
        label: 'Profession or Occupation *',
        name: 'Profession or Occupation *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your profession/occupation',
            }
        ]
    },
    {
        labelValue: 'Practice type *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',

        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Practice Type',
        type: 'input',
        label: 'Practice type *',
        name: 'Practice type *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your practice type'
            }
        ]
    },
    {
        labelValue: 'University/College',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter University/College',
        type: 'input',
        label: 'University/College',
        name: 'University/College',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License number',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter License Number',
        type: 'input',
        label: 'License number',
        name: 'License number',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License State/Province',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter State/Province where License was Obtained',
        type: 'input',
        label: 'License State/Province',
        name: 'License State/Province',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'You must provide proof of your medical profession',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-upload',

        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'You must provide proof of your medical profession',
        name: 'You must provide proof of your medical profession',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Upload up to 2 documents to proof your profession'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: 'Anybody can register and participate in our surveys; as a health care professional your opinion is very valuable for us; we need your job title/position to know who you are and classify you in the right category. All Health care professionals will be asked to provide proof of their profession in order to be invited as a Health Care professional; if you don’t provide proof we will classify you as a None Health Care Professional. All this information will help you to increase your chances to receive more invitations to participate in our surveys.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'Anybody can register',
        name: '',
        value: 'Anybody can register',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    // {
    //     labelValue: '',
    //     icon: '',
    //     defaultInputValue: '',
    //     componentType: 'bi-button',
    //     options: [
    //         'Previous',

    //         'Continue'

    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'input',
    //     label: '',
    //     name: '',
    //     value: '',
    //     inputType: 'text',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // }
];

    MD_PA_Lic_Info: FieldConfig2[] = [
    {
        labelValue: 'Primary specialty *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a Specialty',
        type: 'checkbox',
        label: 'Primary specialty *',
        name: 'Primary specialty *',
        value: '',
        inputType: 'bi-select',

    },
    {
        labelValue: 'Secondary specialty',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a Specialty (optional)',
        type: 'checkbox',
        label: 'Secondary specialty',
        name: 'Secondary specialty',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Tertiary specialty',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',

        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a Specialty (optional)',
        type: 'checkbox',
        label: 'Tertiary specialty',
        name: 'Tertiary specialty',
        value: '',
        inputType: 'bi-select'
    },
    {
        labelValue: 'Degree date *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-date',

        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'checkbox',
        label: 'Degree date *',
        name: 'Degree date *',
        value: '',
        inputType: 'bi-input-date',

    },
    {
        labelValue: 'University/College',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter University/College',
        type: 'input',
        label: 'University/College',
        name: 'University/College',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License number',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter License Number',
        type: 'input',
        label: 'License number',
        name: 'License number',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License State/Province',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter State/Province were License was Obtained',
        type: 'input',
        label: 'License State/Province',
        name: 'License State/Province',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Enter Board name (if applies)',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter Board Name',
        type: 'input',
        label: 'Enter Board name (if applies)',
        name: 'Enter Board name (if applies)',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'You must provide proof of your medical profession',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-upload',

        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'You must provide proof of your medical profession',
        name: 'You must provide proof of your medical profession',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Upload up to 2 documents to proof your profession'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: 'Besides your current professional title we want to know what the fields of medicine you are specialized are. You can select at least one to a maximum of 3 different medical fields. We will select participants for projects based upon the fields select in this section. All Health care professionals will be asked to provide proof of their profession in order to be invited as a Health Care professional; if you don’t provide proof we will classify you as a None Health Care Professional. All this information will help you to increase your chances to receive more invitations to participate in our surveys.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-button',
        options: [
            {
                'names': 'Previous',
                'values': 'P_info_1'
            },
            {
                'names': 'Continue',
                'values': 'Payment_Email_Type'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'button',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-button',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    Pharm_Lic_Info: FieldConfig2[] = [
    {
        labelValue: 'Practice type *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            {
                'sql': '[BI_MEMBERS].[dbo].[pm_getPharmacistTypeList]'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Practice Type',
        type: 'input',
        label: 'Practice type *',
        name: 'Practice type *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your practice type'
            }
        ]
    },
    {
        labelValue: 'Degree date *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-date',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'Degree date *',
        name: 'Degree date *',
        value: '',
        inputType: 'date',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Please select a date for degree obtained'
            }
        ]
    },
    {
        labelValue: 'University/College',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter University/College',
        type: 'input',
        label: 'University/College',
        name: 'University/College',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License number',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter License Number',
        type: 'input',
        label: 'License number',
        name: 'License number',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License State/Province',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter State/Province were License was Obtained',
        type: 'input',
        label: 'License State/Province',
        name: 'License State/Province',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'You must provide proof of your medical profession',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-upload',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'You must provide proof of your medical profession',
        name: 'You must provide proof of your medical profession',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Upload up to 2 documents to proof your profession'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: 'All Health care professionals will be asked to provide proof of their profession in order to be invited as a Health Care professional; if you don’t provide proof we will classify you as a None Health Care Professional. All this information will help you to increase your chances to receive more invitations to participate in our surveys.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-help',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-button',
        options: [
            {
                'names': 'Previous',
                'values': 'P_info_1'
            },
            {
                'names': 'Continue',
                'values': 'Payment_Email_Type'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'button',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-button',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    Nurse_Lic_Info: FieldConfig2[] = [
    {
        labelValue: 'Practice type *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            {
                'sql': '[BI_MEMBERS].[dbo].[pm_getPharmacistTypeList]'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select Practice Type',
        type: 'input',
        label: 'Practice type *',
        name: 'Practice type *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your practice type'
            }
        ]
    },
    {
        labelValue: 'Nurse Class *',
        icon: 'sql',
        defaultInputValue: '',
        componentType: 'bi-select',

        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a Nurse Class',
        type: 'input',
        label: 'Nurse Class *',
        name: 'Nurse Class *',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select your Nurse class'
            }
        ]
    },
    {
        labelValue: 'License number',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [
            ''
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter License Number',
        type: 'input',
        label: 'License number',
        name: 'License number',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'License State/Province',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter State/Province were License was Obtained',
        type: 'input',
        label: 'License State/Province',
        name: 'License State/Province',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'You must provide proof of your Nursing profession',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-upload',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'You must provide proof of your Nursing profession',
        name: 'You must provide proof of your Nursing profession',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Upload up to 2 documents to proof your profession'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: 'All Health care professionals will be asked to provide proof of their profession in order to be invited as a Health Care professional; if you don’t provide proof we will classify you as a None Health Care Professional. All this information will help you to increase your chances to receive more invitations to participate in our surveys.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-help',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-button',
        options: [
            {
                'names': 'Previous',
                'values': 'P_info_1'
            },
            {
                'names': 'Continue',
                'values': 'Payment_Email_Type'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-button',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    Payment_Email_Type: FieldConfig2[] = [
    {
        labelValue: 'Select preferred payment method *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-radio',
        options: [
            'PayPal',
            'Check'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'Select preferred payment method *',
        name: 'Select preferred payment method *',
        value: '',
        inputType: 'bi-input-radio',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Must select a payment method'
            }
        ]
    },
    {
        labelValue: 'Enter your PayPal account',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter your PayPal Account Number',
        type: 'input',
        label: 'Enter your PayPal account',
        name: 'Enter your PayPal account',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'If PayPal must enter your PayPal account'
            }
        ]
    },
    {
        labelValue: 'Select how you want to receive our invitations for surveys *',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-checkbox',
        options: [
            'Email',
            'SMS/Text',
            'BI App'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'Select how you want to receive our invitations for surveys *',
        name: 'Select how you want to receive our invitations for surveys *',
        value: '',
        inputType: 'bi-input-checkbox',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Select at least one option'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-label',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Choose 2 security questions to recover your password later and answer them',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'Choose 2 security questions to recover your password later and answer them',
        name: 'Choose 2 security questions to recover your password later and answer them',
        value: '',
        inputType: 'bi-label',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Choose a security questions to recover your password later and answer them',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            'What is your mothers maiden name?',
            'What is the name of your favorite pet?',
            'What is your favorite travel destination?',
            'What is the name of your first school?',
            'What is the name of your first grade teacher?'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a Security Question',
        type: 'radiobutton',
        label: 'Choose a security questions to recover your password later and answer them',
        name: 'Choose a security questions to recover your password later and answer them',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Choose only 2'
            }
        ]
    },
    {
        labelValue: 'Answer the question you selected',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter Answer for the Security Question Selected above',
        type: 'input',
        label: 'Answer the question you selected',
        name: 'Answer the question you selected',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Provide an answer'
            }
        ]
    },
    {
        labelValue: 'Choose a security questions to recover your password later and answer them',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            'What is your mothers maiden name?',
            'What is the name of your favorite pet?',
            'What is your favorite travel destination?',
            'What is the name of your first school?',
            'What is the name of your first grade teacher?'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Select a different Security Question',
        type: 'radiobutton',
        label: 'Choose a security questions to recover your password later and answer them',
        name: 'Choose a security questions to recover your password later and answer them',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Choose only 2'
            }
        ]
    },
    {
        labelValue: 'Answer the question you selected',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-input-text',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: 'Enter Answer for the Security Question Selected above',
        type: 'input',
        label: 'Answer the question you selected',
        name: 'Answer the question you selected',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Provide an answer'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-label',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'How did you hear about us?',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-select',
        options: [
            'Google or other search',
            'Word of mouth',
            'Advertisement',
            'Article or blog post',
            'Social media'
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'How did you hear about us?',
        name: 'How did you hear about us?',
        value: '',
        inputType: 'bi-select',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: 'question',
        defaultInputValue: '<b>Preferred payment method:</b> We only offer payments by PayPal or check; below read what you should keep in mind before choosing your payment method for surveys:<br><b>Check:</b> If you are outside United States bank fees might apply when cashing a check. Those fees are not covered by Brand Institute. If you want to be paid by check make sure you provide your full mailing address to avoid delays in payments.<br><b>PayPal:</b> It is faster and cheaper; it is available almost everywhere. Your PayPal account should be your registration email if you have another PayPal account please enter here. PayPal account has to be unique; one PayPal account cannot be use for multiple users.<br>We <b>do not do</b> bank transfers or any other payment method besides check and PayPal. We are working on adding more payment options. We apologize if you cannot complete your registration because of payment. To participate in our surveys you have to be notified; right now we offer 2 ways to get those notifications.<br><br><b>Receive invitations for surveys</b><br><b>Email:</b> This is the most reliable way to know that you were invited to a survey.<br><b>SMS Text:</b> This is only available for U.S./Canada panelists who have provided their cellphone numbers to receive those texts; some extra charges might apply when receiving those texts.<br><br><b>Forgot password</b><br>Select two security questions from the list below and provide the answers to them; those answers will help you to recover your password later.<br><b>How did you hear about us? </b> We would like to know how you heard about for our records.<br><b>Refer friends and family</b><br>Provide emails if you want your family, friends or coworkers to be invited to registered in our panel.',
        componentType: 'bi-help',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-help',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: '',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-button',
        options: [
            {
                'names': 'Previous',
                'values': ''
            },
            {
                'names': 'Continue',
                'values': 'Ext_Profile'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: '',
        name: '',
        value: '',
        inputType: 'bi-button',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    acc_History: FieldConfig2[] = [
    {
        labelValue: 'surveyHistoryTitle',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-table',
        options: [
            {
                'SurveyName': 'SKYFLEX_RX',
                'SurveyStatus': 'Open',
                'SurveyDate': 'Date',
                'RespStatus': 'Not started'
            },
            {
                'SurveyName': 'RIZES_RX',
                'SurveyStatus': 'Open',
                'SurveyDate': 'Date',
                'RespStatus': 'Not started'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'surveyHistoryTitle',
        name: 'surveyHistoryTitle',
        value: '',
        inputType: 'bi-table',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'paymentHistoryTitle',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-table',
        options: [
            {
                'SurveyName': 'BEYFROY_RX',
                'PaymentStatus': 'Paid',
                'PaymentAmount': '$15',
                'PaymentDate': 'Date'
            },
            {
                'SurveyName': 'CRD_RX',
                'PaymentStatus': 'Paid',
                'PaymentAmount': '$15',
                'PaymentDate': 'Date'
            }
        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'radiobutton',
        label: 'paymentHistoryTitle',
        name: 'paymentHistoryTitle',
        value: '',
        inputType: 'bi-table',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'MyProfile',
        icon: '',
        defaultInputValue: 'http://url',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: 'Click to see profile information',
        placeHolder: '',
        type: 'radiobutton',
        label: 'MyProfile',
        name: 'MyProfile',
        value: '',
        inputType: 'bi-label',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    profile_Info: FieldConfig2[] = [
    {
        labelValue: 'accHistory',
        icon: '',
        defaultInputValue: 'http://url',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: 'Click to see account History',
        placeHolder: '',
        type: 'checkbox',
        label: 'accHistory',
        name: 'accHistory',
        value: '',
        inputType: 'bi-label',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'accDetails',
        icon: '',
        defaultInputValue: '',
        componentType: 'bi-label',
        options: [
            'Frank DiRoma',
            'United States',
            'NY',
            'New York',
            'xx@gmail.com',
            'xx@gmail.com',
            'M',
            '04/24/1988',
            'Doctor',
            'Hospital',
            'Surgery, Reconstructive',
            '78562',
            'NY'

        ],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'select',
        label: 'accDetails',
        name: 'accDetails',
        value: '',
        inputType: 'bi-label',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'updateInfo',
        icon: '',
        defaultInputValue: 'http://url',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: 'Click to update your profile',
        placeHolder: '',
        type: 'input',
        label: 'updateInfo',
        name: 'updateInfo',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    },
    {
        labelValue: 'Contact Us',
        icon: '',
        defaultInputValue: 'http://url',
        componentType: 'bi-label',
        options: [''],
        disabled: 'false',
        componentId: '0',
        sortOrder: '0',
        tooltip: '',
        placeHolder: '',
        type: 'input',
        label: 'Contact Us',
        name: 'Contact Us',
        value: '',
        inputType: 'text',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Service time is required'
            }
        ]
    }
];

    Ext_Profile: FieldConfig2[] = [
    // {
    //     labelValue: 'This section is completely optional, all information provided here will help us better match you with current survey opportunities.',
    //     icon: '',
    //     defaultInputValue: '',
    //     componentType: 'bi-label',
    //     options: [''],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'radiobutton',
    //     label: 'This section is completely optional, all information provided here will help us better match you with current survey opportunities.',
    //     name: 'This section is completely optional, all information provided here will help us better match you with current survey opportunities.',
    //     value: '',
    //     inputType: 'bi-label',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Medical history. Do you, anyone in your household, or someone for whom you provide care suffer from any of the following medical conditions?',
    //     icon: 'sql',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [

    //         'Hypertension.',
    //         'Cancer',
    //         'Coronary Heart Disease'

    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: 'Select up to 5 medical conditions',
    //     placeHolder: '5',
    //     type: 'select',
    //     label: 'Medical history. Do you, anyone in your household, or someone for whom you provide care suffer from any of the following medical conditions?',
    //     name: 'Medical history. Do you, anyone in your household, or someone for whom you provide care suffer from any of the following medical conditions?',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Select up to 5 medical conditions'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Ethnic: For clasification purposes select the ethnic group you belong',
    //     icon: 'sql',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [
    //         'Manchu',
    //         'latin'
    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: 'Select an Ethnicity',
    //     type: 'select',
    //     label: 'Ethnic: For clasification purposes select the ethnic group you belong',
    //     name: 'Ethnic: For clasification purposes select the ethnic group you belong',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Level of Education: Select the maximum level of education you have',
    //     icon: 'sql',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [

    //         'secundary',
    //         'professional'

    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: 'Select Highest Education Level',
    //     type: 'select',
    //     label: 'Level of Education: Select the maximum level of education you have',
    //     name: 'Level of Education: Select the maximum level of education you have',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Marital Status *',
    //     icon: 'sql',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [

    //         'soltero',
    //         'casado'

    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'select',
    //     label: 'Marital Status *',
    //     name: 'Marital Status *',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Household income *',
    //     icon: 'sql',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [
    //         '5000',
    //         '6000'
    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: 'Select a Household Income',
    //     type: 'select',
    //     label: 'Household income *',
    //     name: 'Household income *',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Number of children',
    //     icon: '',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [
    //         '0',
    //         '1',
    //         '2',
    //         '3',
    //         '4',
    //         '5+'
    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: 'Select Number of Children',
    //     type: 'select',
    //     label: 'Number of children',
    //     name: 'Number of children',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Marketing Affiliated: Do you or any member of your immediate family work in any of the following areas?',
    //     icon: '',
    //     defaultInputValue: '',
    //     componentType: 'bi-select',
    //     options: [
    //         'Do you or any member of your immediate family work in any of the following areas?',
    //         'Advertising',
    //         'Emea',
    //         'Public Relations',
    //         'Marketing',
    //         'Market Research',
    //         'Sales Promotion',
    //         'Brand Institute or any of its affiliates',
    //         'A Company that manufactures, distributes, or sells medicine/medical devices'
    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'select',
    //     label: 'Marketing Affiliated: Do you or any member of your immediate family work in any of the following areas?',
    //     name: 'Marketing Affiliated: Do you or any member of your immediate family work in any of the following areas?',
    //     value: '',
    //     inputType: 'bi-select',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: 'Other information: Some questions about your current system configurations',
    //     icon: '',
    //     defaultInputValue: '',
    //     componentType: 'bi-input-checkbox',
    //     options: [
    //         'Microphone built-in or attached to a computer',
    //         'Scanner attached to a computer',
    //         'Webcam attached to a computer'
    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'select',
    //     label: 'Other information: Some questions about your current system configurations',
    //     name: 'Other information: Some questions about your current system configurations',
    //     value: '',
    //     inputType: 'bi-input-checkbox',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: '',
    //     icon: 'question',
    //     defaultInputValue: 'This section is completely optional, but all information provide here will help us better match you with current survey opportunities. You can answer some or all of the questions here. We do not share your profile information with any other third party.',
    //     componentType: 'bi-help',
    //     options: [''],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'radiobutton',
    //     label: '',
    //     name: '',
    //     value: '',
    //     inputType: 'bi-help',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // },
    // {
    //     labelValue: '',
    //     icon: '',
    //     defaultInputValue: '',
    //     componentType: 'bi-button',
    //     options: [
    //         {
    //             'names': 'Previous',
    //             'values': 'Payment_Email_Type'
    //         },
    //         {
    //             'names': 'Submit',
    //             'values': ''
    //         }
    //     ],
    //     disabled: 'false',
    //     componentId: '0',
    //     sortOrder: '0',
    //     tooltip: '',
    //     placeHolder: '',
    //     type: 'input',
    //     label: '',
    //     name: '',
    //     value: '',
    //     inputType: 'bi-button',
    //     validations: [
    //         {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Service time is required'
    //         }
    //     ]
    // }

];


fieldData2 = [
    {
        item: this.P_info_1,
        name: 'P_info_1'
    }
    ,
    {
        item: this.NonHCP,
        name: 'NonHCP'
    },
    {
        item: this.OTHER_HCP,
        name: 'OTHER_HCP'
    }
    ,
    {
        item: this.MD_PA_Lic_Info,
        name: 'MD_PA_Lic_Info'
    }
    ,
    {
        item: this.Pharm_Lic_Info,
        name: 'Pharm_Lic_Info'
    }

    ,
    {
        item: this.Nurse_Lic_Info,
        name: 'Nurse_Lic_Info'
    }
    ,
    {
        item: this.Payment_Email_Type,
        name: 'Payment_Email_Type'
    },
    {
        item: this.acc_History,
        name: 'acc_History'
    },
    {
        item: this.profile_Info,
        name: 'profile_Info'
    },
    {
        item: this.Ext_Profile,
        name: 'Ext_Profile'
    }

];


//   // fieldOBJ = JSON.stringify(this.fieldData2);
fieldOBJ = this.fieldData2;
ngOnInit(): void {
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);
    }
}
