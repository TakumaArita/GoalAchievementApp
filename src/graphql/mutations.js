/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
      id
      GoalName
      AchieveUntil
      BehaviorGoal
      Achieved
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
      id
      GoalName
      AchieveUntil
      BehaviorGoal
      Achieved
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
      id
      GoalName
      AchieveUntil
      BehaviorGoal
      Achieved
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
