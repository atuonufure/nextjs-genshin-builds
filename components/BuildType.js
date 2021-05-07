import React from "react";

const BuildType = ({ buildType }) => {
  if (buildType && buildType.length === 2) {
    return (
      <div>
        2 пердмета "{buildType[0]}", 2 предмета "{buildType[1]}"
      </div>
    );
  }
  if (buildType && buildType.length === 1) {
    return <div>4 пердмета "{buildType[0]}"</div>;
  }
  return <div />
};

export default BuildType;
