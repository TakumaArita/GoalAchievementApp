/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GoalCreateFormInputValues = {
    GoalName?: string;
    AchieveUntil?: string;
    BehaviorGoal?: string[];
    Achieved?: boolean;
};
export declare type GoalCreateFormValidationValues = {
    GoalName?: ValidationFunction<string>;
    AchieveUntil?: ValidationFunction<string>;
    BehaviorGoal?: ValidationFunction<string>;
    Achieved?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalCreateFormOverridesProps = {
    GoalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    GoalName?: PrimitiveOverrideProps<TextFieldProps>;
    AchieveUntil?: PrimitiveOverrideProps<TextFieldProps>;
    BehaviorGoal?: PrimitiveOverrideProps<TextFieldProps>;
    Achieved?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GoalCreateFormProps = React.PropsWithChildren<{
    overrides?: GoalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GoalCreateFormInputValues) => GoalCreateFormInputValues;
    onSuccess?: (fields: GoalCreateFormInputValues) => void;
    onError?: (fields: GoalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GoalCreateFormInputValues) => GoalCreateFormInputValues;
    onValidate?: GoalCreateFormValidationValues;
} & React.CSSProperties>;
export default function GoalCreateForm(props: GoalCreateFormProps): React.ReactElement;
