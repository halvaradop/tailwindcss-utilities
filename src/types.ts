/**
 * This file contains the types and interfaces used throughout the application. 
 * It allows us to define the types required for the different utilities.
 */
export type FontFluency = Pick<CSSStyleDeclaration, "fontSize" | "lineHeight" | "letterSpacing">
export type EntryCSS<Key = string, Value = string> = Key extends string ? Record<string, Value> : Record<keyof Key, Value>
