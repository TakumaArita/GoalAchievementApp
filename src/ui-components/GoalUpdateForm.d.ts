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
export declare type GoalUpdateFormInputValues = {
    GoalName?: string;
    AchieveUntil?: string;
    BehaviorGoal?: string[];
    Achieved?: boolean;
};
export declare type GoalUpdateFormValidationValues = {
    GoalName?: ValidationFunction<string>;
    AchieveUntil?: ValidationFunction<string>;
    BehaviorGoal?: ValidationFunction<string>;
    Achieved?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalUpdateFormOverridesProps = {
    GoalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    GoalName?: PrimitiveOverrideProps<TextFieldProps>;
    AchieveUntil?: PrimitiveOverrideProps<TextFieldProps>;
    BehaviorGoal?: PrimitiveOverrideProps<TextFieldProps>;
    Achieved?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GoalUpdateFormProps = React.PropsWithChildren<{
    overrides?: GoalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    goal?: any;
    onSubmit?: (fields: GoalUpdateFormInputValues) => GoalUpdateFormInputValues;
    onSuccess?: (fields: GoalUpdateFormInputValues) => void;
    onError?: (fields: GoalUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GoalUpdateFormInputValues) => GoalUpdateFormInputValues;
    onValidate?: GoalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GoalUpdateForm(props: GoalUpdateFormProps): React.ReactElement;
