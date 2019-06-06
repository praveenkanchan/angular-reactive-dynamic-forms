

# angular-reactive-dynamic-forms

<br/>  
It fully automates form UI creation by introducing a set of maintainable JSON, dynamic form control components and dynamic form control service.

<br/>
<br/> 

See [DEMO](https://angular-reactive-dynamic-forms.stackblitz.io "See angular reactive dynamic forms demo")

<br/>
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
import { DynamicFormControllerModule } from  "angular-reactive-dynamic-forms";
  
@NgModule({

    imports: [
        ...
        ReactiveFormsModule,
        DynamicFormControllerModule
    ]
});

export  class  AppModule {}
```
<br/>
  

**2. Create a**  `FormGroup`  **via**  `DynamicFormService`:

```typescript
import { DynamicFormService, formConstants, FieldConfig } from  'angular-reactive-dynamic-forms';  

export  class  DynamicFormComponent  implements  OnInit {

    formGroup: FieldConfig[] = [];

    constructor(private  _dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = [
            ...
        ];

        this._dynamicFormService.setFormFields(this.formGroup);
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


**1. Relation Update** :


|    |readonly |class |display |
|----|---------|------|--------|
|AND |✓        |✓     |✓       |
|OR  |✓        |✓     |✓       |


<br/>
<br/>


**2. Validation Update** :



|               |required |min |max |minLength |maxLength |email |mobile |float |pattern |
|---------------|---------|----|----|----------|----------|------|-------|------|--------|
|number         |✓        |✓   |✓   |✓         |✓         |✗     |✓      |✓     |✓       |
|textBox        |✓        |✓   |✓   |✓         |✓         |✓     |✓      |✓     |✓       |
|password       |✓        |✓   |✓   |✓         |✓         |✓     |✓      |✓     |✓       |
|textArea       |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✓       |
|dateTextBox    |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|timeTextBox    |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|checkBox Group |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|radio Group    |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|selectOption   |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|files          |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |✗       |
|image          |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |
|button         |✗        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |✗       |


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
                    type:  formConstants.fieldType.textBox,
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
                    type:  formConstants.fieldType.textBox,
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
                type: formConstants.fieldType.files,
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
                type:  formConstants.fieldType.textBox,
                label:  "name",
                name:  "name",
                attr: {
                    class:  "",
                    placeholder:  "name"
                },
                value:  "",
                relation: [
                    {
                        action: formConstants.relationType.readonly,
                        operation: formConstants.operationType.AND,
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
                        action: formConstants.relationType.readonly,
                        operation: formConstants.operationType.OR,
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
                type:  formConstants.fieldType.textBox,
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
                type: formConstants.fieldType.button,
                label: "Save",
                validateForm: true,
                name: "save"
                attr: {
                    class: "btn-success",
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
                type: formConstants.fieldType.button,
                label: "Save",
                returnValue: true,
                name: "save"
                attr: {
                    class: "btn-success",
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
                type: formConstants.fieldType.button,
                label: "Save",
                returnFormObject: true,
                name: "save"
                attr: {
                    class: "btn-success",
                }
            }
        ]
    }
];
```




<br/>


**8. You can click this button then reset form values**:

```typescript
this.formGroup = [
    ...
    {
        id: "row1",
        label: "",
        class: "",
        fields: [
            {
                type: formConstants.fieldType.button,
                label: "Reset",
                resetForm: true,
                name: "reset"
                attr: {
                    class: "btn-info",
                }
            }
        ]
    }
];
```

<br/>


**9. You can return values for click event**:

```typescript
submitEvent(event) {
    console.log('Form values', event);
}
```


<br/>  

**10. You can now easily modify your form attributes with**  `DynamicFormService`:

```typescript
let changeValue = [
	{
        rowId:  'row1',
        fieldName:  'email',
        attrName:  formConstants.attributeType.readonly,
        value:  true
    }
];

this._dynamicFormService.updateFormAttr(changeValue);
```



<br/>  

**11. You can now easily modify your form values with**  `DynamicFormService`:

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
