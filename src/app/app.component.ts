import { Component } from '@angular/core';

import { DynamicFormService, FormConstants, FieldConfig, DefaultConfig } from 'angular-reactive-dynamic-forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular Dynamic Form Creator';

    fieldJson: FieldConfig[] = [];
    formConstants: any = FormConstants;
    defaultConfig: DefaultConfig = {
        formStyle: FormConstants.formStyle.vertically, // or FormConstants.formStyle.horizontal
        class: 'dynamic-form'
    };

    constructor(private _dynamicFormService: DynamicFormService) { }

    ngOnInit() {
        this.fieldJson = [
            {
                id: "row1",
                label: "",
                class: "",
                fields: [
                    {
                        type: this.formConstants.fieldType.textBox,
                        label: "Email",
                        name: "email",
                        attr: {
                            class: "",
                            placeholder: "Email"
                        },
                        value: "",
                        validations: [
                            {
                                name: this.formConstants.validationType.required
                            }
                        ],
                        relation: [
                            {
                                action: this.formConstants.relationType.readonly,
                                operation: this.formConstants.operationType.AND,
                                value: true, // Default value
                                where: [
                                    {
                                        rowId: "row1",
                                        fieldName: "email",
                                        value: "xyz"
                                    },
                                    {
                                        rowId: "row1",
                                        fieldName: "password",
                                        value: "123"
                                    }
                                ]
                            },
                            {
                                action: this.formConstants.relationType.readonly,
                                operation: this.formConstants.operationType.OR,
                                value: true, // Default value
                                where: [
                                    {
                                        rowId: "row1",
                                        fieldName: "email",
                                        value: "a"
                                    },
                                    {
                                        rowId: "row1",
                                        fieldName: "password",
                                        value: "b"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: this.formConstants.fieldType.password,
                        label: "Password",
                        name: "password",
                        attr: {
                            class: "",
                            placeholder: "password"
                        },
                        value: "",
                        validations: [
                            {
                                name: this.formConstants.validationType.required
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
                        type: this.formConstants.fieldType.textBox,
                        label: "Address",
                        name: "address",
                        attr: {
                            class: "",
                            placeholder: "1234 Main St"
                        },
                        value: "",
                        validations: [
                            {
                                name: this.formConstants.validationType.required
                            }
                        ]
                    },
                    {
                        type: this.formConstants.fieldType.textBox,
                        label: "Address 2",
                        name: "address2",
                        attr: {
                            class: "",
                            placeholder: "Address"
                        },
                        value: "",
                        validations: []
                    }
                ]
            },
            {
                id: "row3",
                label: "",
                class: "",
                fields: [
                    {
                        type: this.formConstants.fieldType.dateTextBox,
                        label: "Current Date",
                        name: "currentdate",
                        attr: {
                            class: "",
                            placeholder: "Current Date"
                        },
                        value: "",
                        validations: []
                    },
                    {
                        type: this.formConstants.fieldType.radio,
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
                        type: this.formConstants.fieldType.checkBox,
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
                        type: this.formConstants.fieldType.textBox,
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
                        type: this.formConstants.fieldType.selectOption,
                        label: "State",
                        name: "state",
                        attr: {
                            class: "",
                            placeholder: "State",
                            multiple: true
                        },
                        value: [],
                        otherOptions: [
                            { label: "Uttar Pradesh", value: 'UP' },
                            { label: "Delhi", value: 'DL' }
                        ],
                        validations: []
                    },
                    {
                        type: this.formConstants.fieldType.textBox,
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
                id: "row4",
                label: "",
                class: "",
                divider: true,
                fields: [
                    {
                        type: this.formConstants.fieldType.timeTextBox,
                        label: "Current Time",
                        name: "current-time",
                        attr: {
                            class: ""
                        },
                        value: "",
                        validations: []
                    },
                    {
                        type: this.formConstants.fieldType.files,
                        label: "Photo",
                        name: "photo",
                        changeEvent: {
                            returnValue: true
                        },
                        attr: {
                            class: "",
                            placeholder: "Photo",
                            base64codedFile: true
                        },
                        value: "",
                        validations: []
                    },
                    {
                        type: this.formConstants.fieldType.image,
                        label: "Show Photo",
                        name: "show-photo",
                        attr: {
                            class: "show-photo"
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
                        type: this.formConstants.fieldType.button,
                        label: "Submit",
                        clickEvent: {
                            validateForm: true
                        },
                        name: "submit",
                        class: "text-center",
                        attr: {
                            class: "btn-success",
                        }
                    },
                    {
                        type: this.formConstants.fieldType.button,
                        label: "cancel",
                        clickEvent: {
                            returnValue: true
                        },
                        name: "cancel",
                        class: "text-center",
                        attr: {
                            class: "btn-danger",
                        }
                    },
                    {
                        type: this.formConstants.fieldType.button,
                        label: "Reset",
                        clickEvent: {
                            resetForm: true
                        },
                        name: "reset",
                        class: "text-center",
                        attr: {
                            class: "",
                        }
                    },
                    {
                        type: this.formConstants.fieldType.button,
                        label: "Form Object",
                        clickEvent: {
                            returnFormObject: true
                        },
                        name: "form-object",
                        class: "text-center",
                        attr: {
                            class: "btn-info",
                        }
                    },
                    {
                        type: this.formConstants.fieldType.button,
                        label: "Form Fields Object",
                        clickEvent: {
                            returnFieldObject: true
                        },
                        name: "fields-object",
                        class: "text-center",
                        attr: {
                            class: "btn-info",
                        }
                    }
                ]
            }
        ];
        
        this._dynamicFormService.setFormFields(this.fieldJson, this.defaultConfig);
    }

    submitEvent(event) {
        console.log('Form values', event);

        if (event.fieldName === "photo") {
            this._dynamicFormService.updateFormAttr([
                {
                    rowId: "row4",
                    fieldName: "photo",
                    value: true,
                    attrName: this.formConstants.attributeType.readonly
                }
            ]);

            this._dynamicFormService.updateFormValue([
                {
                    rowId: "row4",
                    fieldName: "show-photo",
                    value: event['formData'][4]['photo'][0]
                }
            ]);
        }
    }
}