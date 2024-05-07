/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createGoal } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GoalCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    GoalName: "",
    AchieveUntil: "",
    BehaviorGoal: [],
    Achieved: false,
  };
  const [GoalName, setGoalName] = React.useState(initialValues.GoalName);
  const [AchieveUntil, setAchieveUntil] = React.useState(
    initialValues.AchieveUntil
  );
  const [BehaviorGoal, setBehaviorGoal] = React.useState(
    initialValues.BehaviorGoal
  );
  const [Achieved, setAchieved] = React.useState(initialValues.Achieved);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGoalName(initialValues.GoalName);
    setAchieveUntil(initialValues.AchieveUntil);
    setBehaviorGoal(initialValues.BehaviorGoal);
    setCurrentBehaviorGoalValue("");
    setAchieved(initialValues.Achieved);
    setErrors({});
  };
  const [currentBehaviorGoalValue, setCurrentBehaviorGoalValue] =
    React.useState("");
  const BehaviorGoalRef = React.createRef();
  const validations = {
    GoalName: [{ type: "Required" }],
    AchieveUntil: [],
    BehaviorGoal: [],
    Achieved: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          GoalName,
          AchieveUntil,
          BehaviorGoal,
          Achieved,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createGoal.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "GoalCreateForm")}
      {...rest}
    >
      <TextField
        label="Goal name"
        isRequired={true}
        isReadOnly={false}
        value={GoalName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              GoalName: value,
              AchieveUntil,
              BehaviorGoal,
              Achieved,
            };
            const result = onChange(modelFields);
            value = result?.GoalName ?? value;
          }
          if (errors.GoalName?.hasError) {
            runValidationTasks("GoalName", value);
          }
          setGoalName(value);
        }}
        onBlur={() => runValidationTasks("GoalName", GoalName)}
        errorMessage={errors.GoalName?.errorMessage}
        hasError={errors.GoalName?.hasError}
        {...getOverrideProps(overrides, "GoalName")}
      ></TextField>
      <TextField
        label="Achieve until"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={AchieveUntil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              GoalName,
              AchieveUntil: value,
              BehaviorGoal,
              Achieved,
            };
            const result = onChange(modelFields);
            value = result?.AchieveUntil ?? value;
          }
          if (errors.AchieveUntil?.hasError) {
            runValidationTasks("AchieveUntil", value);
          }
          setAchieveUntil(value);
        }}
        onBlur={() => runValidationTasks("AchieveUntil", AchieveUntil)}
        errorMessage={errors.AchieveUntil?.errorMessage}
        hasError={errors.AchieveUntil?.hasError}
        {...getOverrideProps(overrides, "AchieveUntil")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              GoalName,
              AchieveUntil,
              BehaviorGoal: values,
              Achieved,
            };
            const result = onChange(modelFields);
            values = result?.BehaviorGoal ?? values;
          }
          setBehaviorGoal(values);
          setCurrentBehaviorGoalValue("");
        }}
        currentFieldValue={currentBehaviorGoalValue}
        label={"Behavior goal"}
        items={BehaviorGoal}
        hasError={errors?.BehaviorGoal?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("BehaviorGoal", currentBehaviorGoalValue)
        }
        errorMessage={errors?.BehaviorGoal?.errorMessage}
        setFieldValue={setCurrentBehaviorGoalValue}
        inputFieldRef={BehaviorGoalRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Behavior goal"
          isRequired={false}
          isReadOnly={false}
          value={currentBehaviorGoalValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.BehaviorGoal?.hasError) {
              runValidationTasks("BehaviorGoal", value);
            }
            setCurrentBehaviorGoalValue(value);
          }}
          onBlur={() =>
            runValidationTasks("BehaviorGoal", currentBehaviorGoalValue)
          }
          errorMessage={errors.BehaviorGoal?.errorMessage}
          hasError={errors.BehaviorGoal?.hasError}
          ref={BehaviorGoalRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "BehaviorGoal")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Achieved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Achieved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              GoalName,
              AchieveUntil,
              BehaviorGoal,
              Achieved: value,
            };
            const result = onChange(modelFields);
            value = result?.Achieved ?? value;
          }
          if (errors.Achieved?.hasError) {
            runValidationTasks("Achieved", value);
          }
          setAchieved(value);
        }}
        onBlur={() => runValidationTasks("Achieved", Achieved)}
        errorMessage={errors.Achieved?.errorMessage}
        hasError={errors.Achieved?.hasError}
        {...getOverrideProps(overrides, "Achieved")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
