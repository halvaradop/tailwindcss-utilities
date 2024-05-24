
export type FontFluency = Pick<CSSStyleDeclaration, "fontSize" | "lineHeight" | "letterSpacing">
export type EntryCSS<Key = string, Value = string> = Key extends string ? Record<string, Value> : Record<keyof Key, Value>
