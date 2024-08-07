# Button

---

## API

属性说明如下：

| 属性        | 说明                         | 类型         | 默认值    | 版本 |
| ----------- | ---------------------------- | ------------ | --------- | ---- |
| `type`      | 设置按钮类型                 | `ButtonType` | ’primary‘ |      |
| `size`      | 设置按钮大小                 | `ButtonSize` | ’md‘      |      |
| `href`      | 设置 link 类型按钮的跳转链接 | `string`     |           |      |
| `circle`    | 是否为圆形                   | `boolean`    | false     |      |
| `extra`     | title 右边额外插入的元素     | `ReactNode`  |           |      |
| `icon`      | 图标                         | `IconProp`   |           |      |
| `className` | class 属性                   | `string`     |           |      |
| `theme`     | 图标主题                     | `ThemeProps` |           |      |
| `disabled`  | 设置按钮是否可用             | `boolean`    | false     |      |
| `loading`   | 设置加载状态                 | `boolean`    | false     |      |

---

## 类型声明

```ts
export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType =
  | 'primary'
  | 'default'
  | 'danger'
  | 'link'
  | 'ghost'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'dark';
```
