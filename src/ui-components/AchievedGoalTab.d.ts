/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type AchievedGoalTabOverridesProps = {
    AchievedGoalTab?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Classic Long Sleeve38861297"?: PrimitiveOverrideProps<TextProps>;
    "Classic Long Sleeve3971392"?: PrimitiveOverrideProps<TextProps>;
    EditButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AchievedGoalTabProps = React.PropsWithChildren<Partial<FlexProps> & {
    goal?: any;
} & {
    overrides?: AchievedGoalTabOverridesProps | undefined | null;
}>;
export default function AchievedGoalTab(props: AchievedGoalTabProps): React.ReactElement;
