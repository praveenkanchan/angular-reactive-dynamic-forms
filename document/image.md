# Image Interface

Tracks the value and validation status of an individual Image.

<br/>

```typescript
interface Fields {
    type: 'image';
    label?: string | null;
    name: string;
    attr?: Attributes;
    class?: string | null;
    value?: string | null;
    gridLayout?: GridLayout | null;
    validations?: Validator[] | [];
    relation?: RelationConfig[] | [];
}
```

<br/>
<br/>

# Supported Interface

<br/>

**GridLayout Interface**

```typescript
interface GridLayout {
    startColumn: number;
    endColumn: number;
    startRow: number;
    endRow: number;
}
```

<br/>
<br/>


**Attributes Interface**

```typescript
interface Attributes {
    class?: string | null;
    display?: boolean | true;
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


**WhereConfig Interface**

```typescript
interface WhereConfig {
    rowId: string | null;
    fieldName: string | null;
    value: any | null;
}
```