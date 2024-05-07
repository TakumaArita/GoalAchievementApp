/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal(
    $filter: ModelSubscriptionGoalFilterInput
    $owner: String
  ) {
    onCreateGoal(filter: $filter, owner: $owner) {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal(
    $filter: ModelSubscriptionGoalFilterInput
    $owner: String
  ) {
    onUpdateGoal(filter: $filter, owner: $owner) {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal(
    $filter: ModelSubscriptionGoalFilterInput
    $owner: String
  ) {
    onDeleteGoal(filter: $filter, owner: $owner) {
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
