# SignaturePad Interface

Tracks the value and validation status of an individual SignaturePad. This functionality made using Canvas.

<br/>

```typescript
interface Fields {
    type: 'signaturePad';
    label?: string | null;
    name: string;
    canvasAttr?: CanvasAttributes;
    attr?: Attributes;
    class?: string | null;
    validations?: Validator[] | [];
    relation?: RelationConfig[] | [];
    changeEvent?: EventValue;
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
    display?: boolean | true;
}
```

<br/>
<br/>


**CanvasAttributes Interface**

```typescript
export interface CanvasAttributes {
    width?: number;
    height?: number;
    lineWidth?: number;
    lineCap?: string;
    strokeStyle?: string;
    fillStyle?: string;
    filter?: string;
    font?: string;
    globalAlpha?: number;
    globalCompositeOperation?: string;
    imageSmoothingEnabled?: boolean;
    imageSmoothingQuality?: string;
    lineDashOffset?: number;
    lineJoin?: string;
    miterLimit?: number;
    shadowBlur?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    textAlign?: string;
    textBaseline?: string;
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
    returnFieldObject?: boolean | false;
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