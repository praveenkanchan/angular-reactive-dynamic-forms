

# angular-reactive-dynamic-forms

<br/>  
It fully automates form UI creation by introducing a set of maintainable JSON, dynamic form control components and dynamic form control service.


<br/>
<br/>

See [DEMO](https://angular-reactive-dynamic-forms.stackblitz.io "See angular reactive dynamic forms demo")

<br/>

## Table of Contents

-  [Getting Started](#getting-started)

-  [Running the Sample](#running-the-sample)

-  [Basic Usage](#basic-usage)

-  [Features](#features)

-  [Form Groups](#form-groups)

<br/>
<br/>

## Getting Started

  

**1. Install the core package**:

```
npm i angular-reactive-dynamic-forms --save
```
  
<br/>


## Running the Sample

  

**1. Clone the Git repository**:

```
git clone https://github.com/praveenkanchan/angular-reactive-dynamic-forms.git

cd angular-reactive-dynamic-forms
```

  

**2. Install the dependencies**:

```
npm i
```

 

**3. Run the application**:

```
npm start
```

<br/>
  
  

## Basic Usage

  

**1. Import**  `DynamicFormControllerModule`  **and a UI module**:

```typescript
import { DynamicFormControllerModule } from "angular-reactive-dynamic-forms";
  
@NgModule({

    imports: [
        ...
        DynamicFormControllerModule
    ]
});

export  class  AppModule {}
```
<br/>
  

**2. Create a**  `FormGroup`  **via**  `DynamicFormService`:

```typescript
import { DynamicFormService, FormConstants, FieldConfig, DefaultConfig } from 'angular-reactive-dynamic-forms';  

export class DynamicFormComponent implements OnInit {

    formGroup: FieldConfig[] = [];
    defaultConfig: DefaultConfig = {};

    constructor(private  _dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = [
            ...
        ];

        this.defaultConfig = {
            formStyle: FormConstants.formStyle.vertically // or FormConstants.formStyle.horizontal
        };

        this._dynamicFormService.setFormFields(this.formGroup, this.defaultConfig);
    }
}
```
<br/>
  

**3. Add a**  `DynamicFormComponent`  :

```html
<dynamic-form-controller (submitEvent)="submitEvent($event)"></dynamic-form-controller>
```

<br/>
<br/>



## Features


**1. Version Support** :


|Ionic 4      |Angular |angular-reactive-dynamic-forms |
|-------------|--------|-------------------------------|
|Angular v7.x |v7.x    |✓                              |
|Angular v6.x |v6.x    |✓                              |


<br/>
<br/>


**2. Relation Update** :


|    |readonly |class |display |
|----|---------|------|--------|
|AND |✓        |✓     |✓       |
|OR  |✓        |✓     |✓       |


<br/>
<br/>


**3. Validation Update** :



|               |required |min |max |minLength |maxLength |email |mobile |float |pattern |
|---------------|---------|----|----|----------|----------|------|-------|------|--------|
|[number](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/number.md "Interface detail of number")         |✓        |✓   |✓   |✓         |✓         |✗     |✓      |✓     |✓       |
|[textBox](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/textBox.md "Interface detail of textBox")         |✓        |✓   |✓   |✓         |✓         |✓     |✓      |✓     |✓       |
|[password](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/password.md "Interface detail of password")       |✓        |✓   |✓   |✓         |✓         |✓     |✓      |✓     |✓       |
|[textArea](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/textArea.md "Interface detail of textArea")       |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✓       |
|[dateTextBox](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/dateTextBox.md "Interface detail of dateTextBox")    |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|[timeTextBox](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/timeTextBox.md "Interface detail of timeTextBox")    |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|[checkBox Group](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/checkBox.md "Interface detail of checkBox") |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|[radio Group](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/radio.md "Interface detail of radio")    |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|[selectOption](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/selectOption.md "Interface detail of selectOption")   |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|[files](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/files.md "Interface detail of files")          |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|[image](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/image.md "Interface detail of image")          |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|[hidden](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/hidden.md "Interface detail of hidden")         |✗        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|[stepWizard](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/stepWizard.md "Interface detail of stepWizard")     |✗        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|[button](https://github.com/praveenkanchan/angular-reactive-dynamic-forms/blob/master/document/button.md "Interface detail of button")         |✗        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |


<br/>
<br/>

**4. Event Update** :

 

|               |clickEvent |changeEvent |
|---------------|-----------|------------|
|number         |✗          |✓           |
|textBox        |✗          |✓           |
|password       |✗          |✓           |
|textArea       |✗          |✓           |
|dateTextBox    |✗          |✓           |
|timeTextBox    |✗          |✓           |
|checkBox Group |✓          |✓           |
|radio Group    |✗          |✓           |
|selectOption   |✗          |✓           |
|files          |✗          |✓           |
|image          |✗          |✗           |
|hidden         |✗          |✗           |
|stepWizard     |✓          |✗           |
|button         |✓          |✗           |

 
<br/>
<br/>


## Form Groups

  

In order to improve clarity it's often considered good practice to group forms into several logical `fieldset` sections.

**1. Create a**  `FormGroup`  **and add a**  `DynamicFormComponent`:

```typescript
ngOnInit() {
    this.formGroup = [
        {
            id:  "row1",
            label:  "",
            class:  "",
            fields: [
                {
                    type:  FormConstants.fieldType.textBox,
                    label:  "Email",
                    name:  "email",
                    attr: {
                        class:  "",
                        placeholder:  "Email",
                        display: true // Default value
                    },
                    value:  "",
                    validations: []
                },
                {
                    type:  FormConstants.fieldType.password,
                    label:  "Password",
                    name:  "password",
                    attr: {
                        class:  "",
                        placeholder:  "Password",
                        display: true // Default value
                    },
                    value:  "",
                    validations: []
                }
            ]
        }
    ];

    this._dynamicFormService.setFormFields(this.formGroup);
}
```

  

```html
<dynamic-material-form (submitEvent)="submitEvent($event)"></dynamic-material-form>
```


<br/>



**2. You can add divider in every rows**:

```typescript
this.formGroup = [
    {
        id:  "row1",
        label:  "",
        divider: true,
        fields: [
            ...
        ]
    }
];
```



<br/>



**3. In file type input return file object or also return base64decoded files using `base64codedFile` attributes**:

```typescript
this.formGroup = [
    {
        id:  "row1",
        label:  "",
        fields: [
            ...
            {
                type: FormConstants.fieldType.files,
                label: "Logo",
                name: "logo",
                attr: {
                    ...
                    base64codedFile: true
                },
                value: [],
                validations: []
            }
        ]
    }
];
```



<br/>


**4. You can relate one or more fields with conditional values**:

```typescript
this.formGroup = [
    {
        id:  "row1",
        fields: [
            {
                type:  FormConstants.fieldType.textBox,
                label:  "name",
                name:  "name",
                attr: {
                    class:  "",
                    placeholder:  "name"
                },
                value:  "",
                relation: [
                    {
                        action: FormConstants.relationType.readonly,
                        operation: FormConstants.operationType.AND,
                        value: true, // Default value
                        where: [
                            {
                                rowId: "row1",
                                fieldName: "name",
                                value: "xyz"
                            },
                            {
                                rowId: "row1",
                                fieldName: "number",
                                value: "XXXXX"
                            }
                        ]
                    },
                    {
                        action: FormConstants.relationType.readonly,
                        operation: FormConstants.operationType.OR,
                        value: true, // Default value
                        where: [
                            {
                                rowId: "row1",
                                fieldName: "name",
                                value: "abc"
                            },
                            {
                                rowId: "row1",
                                fieldName: "number",
                                value: "321"
                            }
                        ]
                    }
                ]
            },
            {
                type:  FormConstants.fieldType.textBox,
                label:  "Number",
                name:  "number",
                attr: {
                    class:  "",
                    placeholder:  "Number"
                },
                value:  ""
            }
        ]
    }
];
```


<br/>


**5. You can click this button then validate value and return form values**:

```typescript
this.formGroup = [
    ...
    {
        id: "row1",
        label: "",
        class: "",
        fields: [
            {
                type: FormConstants.fieldType.button,
                label: "Save",
                clickEvent: {
                    validateForm: true
                },
                name: "save",
                attr: {
                    class: "btn-success"
                }
            }
        ]
    }
];
```


<br/>


**6. You can click this button then return form values without validate value**:

```typescript
this.formGroup = [
    ...
    {
        id: "row1",
        label: "",
        class: "",
        fields: [
            {
                type: FormConstants.fieldType.button,
                label: "Save",
                clickEvent: {
                    returnValue: true
                },
                name: "save",
                attr: {
                    class: "btn-success"
                }
            }
        ]
    }
];
```


<br/>


**7. You can click this button then return reactive form object**:

```typescript
this.formGroup = [
    ...
    {
        id: "row1",
        label: "",
        class: "",
        fields: [
            {
                type: FormConstants.fieldType.button,
                label: "Save",
                clickEvent: {
                    returnFormObject: true
                },
                name: "save",
                attr: {
                    class: "btn-success"
                }
            }
        ]
    }
];
```


<br/>


**8. You can click this button then return fields form JSON object**:

```typescript
this.formGroup = [
    ...
    {
        id: "row1",
        label: "",
        class: "",
        fields: [
            {
                type: FormConstants.fieldType.button,
                label: "Save",
                clickEvent: {
                    returnFieldObject: true
                },
                name: "save",
                attr: {
                    class: "btn-success"
                }
            }
        ]
    }
];
```


<br/>


**9. You can click this button then reset form values**:

```typescript
this.formGroup = [
    ...
    {
        id: "row1",
        label: "",
        class: "",
        fields: [
            {
                type: FormConstants.fieldType.button,
                label: "Reset",
                clickEvent: {
                    resetForm: true
                },
                name: "reset",
                attr: {
                    class: "btn-info"
                }
            }
        ]
    }
];
```

<br/>


**10. You can validate form with**  `DynamicFormService`:

```typescript
this._dynamicFormService.validateFormField();
```


<br/>


**11. You can return values for click event**:

```typescript
submitEvent(event) {
    console.log('Form values', event);
}
```


<br/>  

**12. You can now easily modify your form attributes with**  `DynamicFormService`:

```typescript
let changeValue = [
	{
        rowId:  'row1',
        fieldName:  'email',
        attrName:  FormConstants.attributeType.readonly,
        value:  true
    }
];

this._dynamicFormService.updateFormAttr(changeValue);
```



<br/>  

**13. You can now easily modify your form values with**  `DynamicFormService`:

```typescript
let changeValue = [
	{
        rowId: 'row1',
        fieldName: 'email',
        value: "xyz@xyz.com"
    }
];

this._dynamicFormService.updateFormValue(changeValue);
```
