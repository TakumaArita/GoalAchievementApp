/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AlertProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CopyOverridesProps = {
    Copy?: PrimitiveOverrideProps<FlexProps>;
    "Getting started"?: PrimitiveOverrideProps<TextProps>;
    "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to accelerate your UI development as well. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user. Amplify Studio offers an integration with Figma, allowing you to generate reusable React code by importing your Figma design file. Amplify Studio automatically converts any Figma component in your Figma file to a React component that can then be used in your app. Whenever you make a change to the component in Figma you sync the changes to Amplify Studio and update your application! Read more about Amplify Studio's Figma-to-code in our docs"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "What's in this file"?: PrimitiveOverrideProps<TextProps>;
    "Primitives The primitives page contains pre-built component primitives from Amplify UI. Do not make any changes to this page! Changes in this page won\u2019t be reflected in your Amplify Studio application and will make your components in Figma look different than in your application. Theme The theme page displays the theme values and design tokens Amplify UI uses to style the primitives. If you want to theme the primitives, use the AWS Amplify UI Builder Figma plugin to make changes to the theme. Any changes you make on the theme page won't be generated in code. My Components This page is where you will create and edit your components. There are already some pre-built components for you to use. You can use them as-is, edit them, or delete them and start fresh. Examples This page has some example designs using the custom components from the My Components page."?: PrimitiveOverrideProps<TextProps>;
    Alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type CopyProps = React.PropsWithChildren<Partial<FlexProps> & {
    プロパティ1?: "\u30C7\u30D5\u30A9\u30EB\u30C8" | "\u30D0\u30EA\u30A2\u30F3\u30C82";
} & {
    overrides?: CopyOverridesProps | undefined | null;
}>;
export default function Copy(props: CopyProps): React.ReactElement;
