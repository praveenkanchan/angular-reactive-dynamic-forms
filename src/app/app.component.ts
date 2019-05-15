import { Component } from '@angular/core';

import { DynamicFormService, formConstants, FieldConfig } from 'angular-reactive-dynamic-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Dynamic Form Creator';

  fieldJson: FieldConfig[] = [];

  constructor(private _dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.fieldJson = [
      {
        id: "row1",
        label: "",
        class: "",
        fields: [
          {
            type: formConstants.fieldType.textBox,
            label: "Email",
            name: "email",
            attr: {
              class: "",
              placeholder: "Email"
            },
            value: "",
            validations: [
              {
                name: formConstants.validationType.required
              }
            ],
            // relation: [
            //   {
            //     action: formConstants.relationType.readonly,
            //     operation: formConstants.operationType.AND,
            //     value: true,
            //     where: [
            //       {
            //         rowId: "row1",
            //         fieldName: "email2",
            //         value: "1"
            //       },
            //       {
            //         rowId: "row1",
            //         fieldName: "email",
            //         value: "1"
            //       }
            //     ]
            //   },
            //   {
            //     action: formConstants.relationType.readonly,
            //     operation: formConstants.operationType.OR,
            //     value: true,
            //     where: [
            //       {
            //         rowId: "row1",
            //         fieldName: "email2",
            //         value: "123"
            //       },
            //       {
            //         rowId: "row1",
            //         fieldName: "email",
            //         value: "321"
            //       }
            //     ]
            //   },
            // ]
          },
          {
            type: formConstants.fieldType.textBox,
            label: "Password",
            name: "password",
            attr: {
              class: "",
              placeholder: "password"
            },
            value: "",
            validations: [
              {
                name: formConstants.validationType.required
              }
            ]
          }
        ]
      },
      {
        id: "row2",
        label: "",
        class: "",
        fields: [
          {
            type: formConstants.fieldType.textBox,
            label: "Address",
            name: "address",
            attr: {
              class: "",
              placeholder: "1234 Main St"
            },
            value: "",
            validations: [
              {
                name: formConstants.validationType.required
              }
            ]
          }
        ]
      },
      {
        id: "row3",
        label: "",
        class: "",
        fields: [
          {
            type: formConstants.fieldType.textBox,
            label: "Address 2",
            name: "address2",
            attr: {
              class: "",
              placeholder: "Address"
            },
            value: "",
            validations: []
          },
          {
            type: formConstants.fieldType.files,
            label: "Photo",
            name: "photo",
            attr: {
              class: "",
              placeholder: "Photo"
            },
            value: "",
            validations: []
          }
        ]
      },
      {
        id: "row4",
        label: "",
        class: "",
        fields: [
          {
            type: formConstants.fieldType.radio,
            label: "Gender",
            name: "gender",
            attr: {
              class: ""
            },
            value: "",
            otherOptions: [
              { label: "Male", value: 'M' },
              { label: "Female", value: 'F' }
            ],
            validations: []
          },
          {
            type: formConstants.fieldType.checkBox,
            label: "Hobbies",
            name: "hobbies",
            attr: {
              class: ""
            },
            value: [],
            otherOptions: [
              { label: "Chess", value: 'chess' },
              { label: "Cricket", value: 'cricket' },
              { label: "Table Tennis", value: "table-tennis" }
            ],
            validations: []
          }
        ]
      },
      {
        id: "row5",
        label: "",
        class: "",
        fields: [
          {
            type: formConstants.fieldType.textBox,
            label: "City",
            name: "city",
            attr: {
              class: "",
              placeholder: "City"
            },
            value: "",
            validations: []
          },
          {
            type: formConstants.fieldType.selectOption,
            label: "State",
            name: "state",
            attr: {
              class: "",
              placeholder: "State"
            },
            value: [],
            otherOptions: [
              { label: "Uttar Pradesh", value: 'UP' },
              { label: "Delhi", value: 'DL' }
            ],
            validations: []
          },
          {
            type: formConstants.fieldType.textBox,
            label: "Zip",
            name: "zip",
            attr: {
              class: "",
              placeholder: "Zip"
            },
            value: "",
            validations: []
          }
        ]
      },
      {
        id: "row6",
        label: "",
        class: "",
        fields: [
          {
            type: formConstants.fieldType.button,
            label: "Submit",
            validateForm: true,
            name: "submit",
            class: "text-right",
            attr: {
              class: "btn-success",
            }
          },
          {
            type: formConstants.fieldType.button,
            label: "cancel",
            returnValue: true,
            name: "cancel",
            class: "text-left",
            attr: {
              class: "btn-danger",
            }
          }
        ]
      }
    ];

    this._dynamicFormService.setFormFields(this.fieldJson);
  }

  submitEvent(event) {
    console.log('Form values', event);
  }
}