# CheckBox Interface

Tracks the value and validation status of an individual CheckBox.

<br/>

```typescript
interface Fields {
    type: 'checkbox';
    label?: string | null;
    name: string;
    attr?: Attributes;
    class?: string | null;
    value?: Array<any> | [];
    otherOptions: Array<any>;
    validations?: Validator[] | [];
    relation?: RelationConfig[] | [];
    changeEvent?: EventValue;
    clickEvent?: EventValue;
}
```

<br/>
<br/>

# Supported Interface

<br/>

**Attributes Interface**

```typescript
interface Attributes {
    class?: string | null;
    readonly?: boolean | false;
    placeholder?: string | '';
    bindValue?: string | 'value';
    bindLabel?: string | 'label';
}
```

<br/>
<br/>


**Validator Interface**

```typescript
interface Validator {
    name: string | null;
    validationValue?: any | null;
    message?: string | null;
}
```

<br/>
<br/>


**RelationConfig Interface**

```typescript
interface RelationConfig {
    action: string | null;
    operation: string | null;
    where: WhereConfig[] | [];
    value: boolean | true;
}
```

<br/>
<br/>


**EventValue Interface**

```typescript
interface EventValue {
    validateForm?: boolean | false;
    returnValue?: boolean | false;
    returnFormObject?: boolean | false;
    resetForm?: boolean | false;
}
```

<br/>
<br/>


**WhereConfig Interface**

```typescript
interface WhereConfig {
    rowId: string | null;
    fieldName: string | null;
    value: any | null;
}
```