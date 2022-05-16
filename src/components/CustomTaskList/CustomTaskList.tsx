import React from 'react';

import { Manager } from '@twilio/flex-ui'
// import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';
import { StateToProps, DispatchToProps } from './CustomTaskList.Container';

//import { Button } from '@twilio-paste/core';

interface OwnProps {
  // Props passed directly to the component
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

// It is recommended to keep components stateless and use redux for managing states
const CustomTaskList: React.FunctionComponent<Props> = (props: Props) => {
  console.log(Manager)

  if (!props.isOpen) {
    return null;
  }

  return (
   <div>Test</div>
  );
};

CustomTaskList.displayName = 'foo';

export default CustomTaskList;
