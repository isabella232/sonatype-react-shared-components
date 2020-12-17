/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState } from 'react';

import NxToggle from '../NxToggle';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxStatefulToggle = forwardRef<HTMLLabelElement, Props>(
    function NxStatefulToggle({ defaultChecked, onChange, ...otherProps }, ref) {
      const [isChecked, setIsChecked] = useState(defaultChecked);

      function changeHandler() {
        const newCheckedStatus = !isChecked;
        setIsChecked(newCheckedStatus);
        if (onChange) {
          onChange(newCheckedStatus);
        }
      }

      return <NxToggle ref={ref} { ...otherProps } onChange={changeHandler} isChecked={isChecked} />;
    }
);

NxStatefulToggle.propTypes = propTypes;
export default NxStatefulToggle;
