import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig2 } from '../dynamic-profile/field.interface';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-name-rules',
  templateUrl: './name-rules.component.html',
  styleUrls: ['./name-rules.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class NameRulesComponent implements OnInit {

  constructor(private _fuseConfigService: FuseConfigService, ) {
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
              hidden: true
          }
      }
  };
   }
  questions: FieldConfig2[] = [
    {
      labelValue: 'Email *',
      icon: 'edit',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'true',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your email Address',
      type: 'input',
      label: 'Email *',
      name: 'Email *',
      value: '',
      inputType: 'email',
      validations: [
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          message: 'please enter a valid email address'
        },
        {
          name: 'required',
          validator: Validators.required,
          message: 'please enter an email address'
        },
        {
          name: 'taken',
          validator: Validators.required,
          message: 'email address is already taken'
        }
      ]
    },
    {
      labelValue: 'First name *',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
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
          message: 'please enter first name'
        }
      ]
    },
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
      label: 'Upload License or Documents *',
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
    {


      icon: '',
      defaultInputValue: '',
      componentType: 'false',
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
      inputType: 'text'
    },
    {
      labelValue: 'Last name *',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
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
          message: 'please enter last name'
        }
      ]
    },
    {


      icon: '',
      defaultInputValue: '',
      componentType: 'false',
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


      icon: '',
      defaultInputValue: '',
      componentType: 'false',
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
          message: 'please select payment method is required'
        }
      ]
    },
    {


      icon: '',
      defaultInputValue: '2000-06-15',
      componentType: 'false',
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'MM DD YYYY',
      type: 'date',
      label: 'Date of birth *',
      name: 'Date of birth *',
      value: '',
      inputType: 'date',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please enter your date of birth is required'
        }
      ]
    },
    {


      icon: 'sql',
      defaultInputValue: '',
      componentType: 'false',
      // tslint:disable-next-line:max-line-length
      options: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire (Ivory Coast)', 'Croatia (Hrvatska)', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand (Aotearoa)', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'S. Georgia S. Sandwich Isls.', 'Saint Kitts Nevis', 'Saint Lucia', 'Vincent the Grenadines', 'Samoa', 'San Marino', 'Sao Tome Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City (Holy See)', 'Venezuela', 'Viet Nam', 'Virgin (British)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe', 'Zimbabwe'],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Select Country',
      type: 'auto',
      label: 'Select country of residency *',
      name: 'Select country of residency *',
      value: '',
      inputType: 'auto',
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
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Address 1',
      type: 'input',
      label: 'Mailing street address *',
      name: 'Mailing street address *',
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
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Address 2',
      type: 'input',
      label: 'Mailing street/#apto/unit',
      name: 'Mailing street/#apto/unit',
      value: '',
      inputType: 'text'
    }, {
      labelValue: 'State/Province',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'false',
      // tslint:disable-next-line:max-line-length
      options: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated states of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Lousiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'State/Province',
      type: 'input',
      label: 'State/Province',
      name: 'State/Province',
      value: '',
      inputType: 'text',
      validations: [
        // {
        //   name: 'required',
        //   validator: Validators.required,
        //   message: 'please select your state/province of residency'
        // }
      ]
    },
    {
      labelValue: 'Zip Code',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'ZipCode',
      type: 'input',
      label: 'Zip Code',
      name: 'Zip Code',
      value: '',
      inputType: 'text',
      validations: [
        // {
        //   name: 'required',
        //   validator: Validators.required,
        //   message: 'zip code is required'
        // }
      ]
    },
    {
      labelValue: 'Cell Phone *',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: 'U.S./Canada can be used to receive our survey texts',
      placeHolder: 'Enter your Cell Phone Number',
      type: 'input',
      label: 'Cell Phone *',
      name: 'Cell Phone *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'cellphone number is required'
        }
      ]
    },
    {
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
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
      type: 'select',
      label: 'How did you hear about us? *',
      name: 'How did you hear about us? *',
      value: '',
      inputType: 'select',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'How did you hear about us is required'
        }
      ]
    },
    {
      labelValue: 'Specify your profession or occupation *',
      icon: 'edit',
      defaultInputValue: '',
      componentType: 'false',
      options: [
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
      disabled: 'true',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Select Profession/Occupation',
      type: 'input',
      label: 'Specify your profession or occupation *',
      name: 'Specify your profession or occupation *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Profession is required'
        }
      ]
    }
  ];

  fieldData2 = [
    {
      item: this.questions,
      name: 'Creative Name Rules'
    }

  ];

  fieldOBJ = this.fieldData2;

  ngOnInit(): void {
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);

  }
}
