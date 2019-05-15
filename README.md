

# angular-reactive-dynamic-forms

  
[**dynamic forms guide**](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html), It **fully automates form UI creation** by introducing a set of maintainable **JSON**, **dynamic form control components and dynamic form control service**

    

## Table of Contents

-  [Getting Started](#getting-started)

-  [Running the Sample](#running-the-sample)

-  [Basic Usage](#basic-usage)

-  [Features](#features)

-  [Form Groups](#form-groups)

  

## Getting Started

  

**1. Install the core package**:

```
npm i angular-reactive-dynamic-forms --save
```
  
  

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

  

**2. Create a**  `FormGroup`  **via**  `DynamicFormService`:

```typescript
import { DynamicFormService, formConstants } from  'angular-reactive-dynamic-forms';  

export  class  DynamicFormComponent  implements  OnInit {

    fieldJson:  any  = [];

    constructor(private  _dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }
}
```

  

**3. Add a**  `DynamicFormComponent`  :

```html
<dynamic-form-controller (submitEvent)="submitEvent($event)"></dynamic-form-controller>
```



## Features



**1. Relation Update** :


|    |readonly |class |
|----|---------|------|
|AND |✓        |✓     |
|OR  |✓        |✓     |





**2. Validation Update** :



|               |required |min |max |minLength |maxLength |email |mobile |float |
|---------------|---------|----|----|----------|----------|------|-------|------|
|number         |✓        |✓   |✓   |✓         |✓         |✗     |✓      |✓     |
|textBox        |✓        |✓   |✓   |✓         |✓         |✓     |✓      |✓     |
|textArea       |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |
|dateTextBox    |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |
|timeTextBox    |✓        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |
|checkBox Group |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |
|radio Group    |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |
|selectOption   |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |
|files          |✓        |✗   |✗   |✓         |✓         |✗     |✗      |✗     |
|button         |✗        |✗   |✗   |✗         |✗         |✗     |✗      |✗     |




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
                        placeholder:  "Email"
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
                        placeholder:  "Password"
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
<dynamic-material-form  [group]="formGroup"  [model]="formModel"></dynamic-material-form>
```

  

**2. You can now easily modify your form array with**  `DynamicFormService`:

```typescript
let changeValue = [
	{
        rowId:  'row1',
        fieldName:  'email',
        attrName:  formConstants.attributeType.readonly,
        value:  "xyz@gmail.com"
    }
];

this._dynamicFormService.updateFormAttr(changeValue);
```



**3. You can relate one or more fields with conditional values**:

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





**4. You can click this button then validate value and return form values**:

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




**5. You can click this button then return form values without validate value**:

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



**6. You can return values for click event**:

```typescript
submitEvent(event) {
    console.log('Form values', event);
}
```