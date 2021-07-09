/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon, NxButton, NxTextInput, NxFormGroup, NxForm, nxTextInputStateHelpers}
  from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalFormExample() {
  const [showModal, setShowModal] = useState(false),
      [loading, setLoading] = useState(true),
      [usernameState, setUsernameState] = useState(nxTextInputStateHelpers.initialState('')),
      [passwordState, setPasswordState] = useState(nxTextInputStateHelpers.initialState('')),
      modalCloseHandler = () => setShowModal(false),
      validationErrors = usernameState.trimmedValue === '' || passwordState.trimmedValue === '' ?
        'Missing required field' : null;

  function openModal() {
    setShowModal(true);

    setTimeout(function() {
      setLoading(false);
    }, 1000);
  }

  function onUsernameChange(val: string) {
    setUsernameState(nxTextInputStateHelpers.userInput(null, val));
  }

  function onPasswordChange(val: string) {
    setPasswordState(nxTextInputStateHelpers.userInput(null, val));
  }

  return (
    <>
      <NxButton onClick={openModal}>Open Modal with Form</NxButton>
      {showModal &&
        <NxModal id="nx-modal-form-example" onCancel={modalCloseHandler}>
          <NxForm className="nx-form"
                  onSubmit={modalCloseHandler}
                  onCancel={modalCloseHandler}
                  validationErrors={validationErrors}
                  additionalFooterBtns={
                    <NxButton type="button" onClick={modalCloseHandler} variant="tertiary">
                      Tertiary
                    </NxButton>
                  }
                  doLoad={() => {}}
                  loading={loading}>
            <header className="nx-modal-header">
              <h2 className="nx-h2">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>NxModal header with form content</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <NxFormGroup label="Username" isRequired>
                <NxTextInput aria-required={true}
                             placeholder="Username"
                             onChange={onUsernameChange}
                             { ...usernameState } />
              </NxFormGroup>
              <NxFormGroup label="Password" isRequired>
                <NxTextInput type="password"
                             aria-required={true}
                             placeholder="Password"
                             onChange={onPasswordChange}
                             { ...passwordState } />
              </NxFormGroup>
            </div>
          </NxForm>
        </NxModal>
      }
    </>
  );
}
