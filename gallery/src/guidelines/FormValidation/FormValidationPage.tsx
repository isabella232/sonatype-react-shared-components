/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import FormValidationExample from './FormValidationExample';

const FormValidationCode = require('./FormValidationExample?raw');

const FormValidationPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        This page demonstrates the typical overall approach to communicating form validation matters to the user.
        There are several things to note here:
      </NxP>
      <NxList bulleted>
        <NxList.Item>
          <NxList.Text>
            Fields are not marked invalid while they are pristine. This is handled by
            the <NxCode>NxTextInput</NxCode> state helpers.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Optional text fields are declared to the user using
            the <NxCode>nx-label--optional</NxCode> class which adds the <q>- optional</q> text.
            All fields not marked optional are required. This does not apply to checkbox groups where selecting
            nothing is generally just as valid as any other selection.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Until all required fields have values, and all values pass validation, the Submit button is disabled
            and provides a tooltip on hover explaining why.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Non-pristine fields which are invalid get a red border and a red tooltip displaying the validation error.
            This tooltip is visible until the field becomes valid, as opposed to being hover-triggered. This behavior
            is implemented by <NxCode>NxTextInput</NxCode>
          </NxList.Text>
        </NxList.Item>
      </NxList>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={FormValidationCode}
                        liveExample={FormValidationExample}>
      This example shows how typical form validation logic should be set up. It includes validation of individual
      elements and management of the submit button. The first input has validation that it is non-empty. The second
      input has no validation. The third input has validation that it is non-empty and also validation that it contains
      no dollar signs.
    </GalleryExampleTile>
  </>;

export default FormValidationPage;
