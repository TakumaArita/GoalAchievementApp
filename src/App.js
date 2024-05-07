import React, { useState } from 'react';
import { NavBarHeader } from './ui-components';
import { GoalTabCollection, GoalTabCollectionAchieved } from './ui-components';
import { GoalCreateForm, GoalUpdateForm } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut }) {
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const toggleGoalForm = () => {setShowGoalForm(!showGoalForm)};

  const toggleHome = () => {
    setShowHome(true);
    setShowGoalForm(false); // Ensure GoalForm is hidden when going to home
    setShowUpdateForm(false); // Ensure UpdateForm is hidden when going to home
  };

  const toggleAchieved = () => {
    setShowHome(false);
    setShowGoalForm(false); // Ensure GoalForm is hidden when going to achieved
    setShowUpdateForm(false); // Ensure UpdateForm is hidden when going to achieved
  };

  const toggleUpdateForm = (goal) => {
    setSelectedGoal(goal);
    setShowUpdateForm(true);
  };

  const handleUpdateSubmit = async (updatedFields) => {
    console.log("Updating data:", updatedFields);
    setShowUpdateForm(false);
  };

  const handleUpdateCancel = () => {
    setShowUpdateForm(false);
  };

  const NavBarHeaderOverrides = {
    "Button": { onClick: signOut },
    "Add Goal": {
      style: { cursor: "pointer" },
      onClick: toggleGoalForm
    },
    "Home": {
      style: { cursor: "pointer" },
      onClick: toggleHome
    },
    "Achieved Goals": {
      style: { cursor: "pointer", backgroundColor: "#FEE6EE" },
      onClick: toggleAchieved
    }
  };

  return (
    <div className="App">
      <NavBarHeader 
        overrides={ NavBarHeaderOverrides }
      />
     {showGoalForm && ( 
     <GoalCreateForm />
      )}

      {showUpdateForm && (
        <GoalUpdateForm
          goal={selectedGoal} // Pass the selected goal as initial value
          //onSubmit={handleUpdateSubmit} // Handle submit action
          onCancel={handleUpdateCancel} // Handle cancel action
        />
      )}
      <header className="App-header">
        {showHome ? (
          <GoalTabCollection
            overrideItems={({ item, index }) => ({
              overrides: {
                "EditButton": {
                  onClick: () => toggleUpdateForm(item)
                }
              },
              key: index
            })}
          />
        ) : (
          <GoalTabCollectionAchieved
            overrideItems={({ item, index }) => ({
              overrides: {
                "EditButton": {
                  onClick: () => toggleUpdateForm(item)
                }
              },
              key: index
            })}
          />
        )}
      </header>
    </div>
     );
}

export default withAuthenticator(App);
