/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { NxStatefulDropdown, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

function NxStatefulDropdownExample() {
  const labelElement = (
    <>
      <NxFontAwesomeIcon icon={faHatWizard} className="nx-dropdown-icon"/>
      <span>Apo Pantos Kakodaimonos!</span>
    </>
  );

  const onClick = () => { alert('click'); };

  return (
    <NxStatefulDropdown label={labelElement}>
      <a href="#/" className="nx-dropdown-button">
        Nav Link1
      </a>
      <a href="#/" className="nx-dropdown-button">
        Nav Link2
      </a>
      <a href="#/" className="nx-dropdown-button">
        Nav Link3
      </a>
      <button onClick={onClick} className="nx-dropdown-button">
        Nav Link4 - this link should trigger truncation
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Nav Link5
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Nav Link6
      </button>
      <button className="disabled nx-dropdown-button">
        Nav Link7 Disabled
      </button>
    </NxStatefulDropdown>
  );
}

export default NxStatefulDropdownExample;
