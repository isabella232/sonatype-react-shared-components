/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxTagExample from './NxTagExample';
import NxActionTagExample from './NxActionTagExample';

const NxTagExampleCode = require('!!raw-loader!./NxTagExample').default;
const NxActionTagExampleCode = require('!!raw-loader!./NxActionTagExample').default;

const NxTagPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>blah</p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        liveExample={NxTagExample}
                        codeExamples={NxTagExampleCode}>
      An example of a simple tag.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTags with Actions Example"
                        liveExample={NxActionTagExample}
                        codeExamples={NxActionTagExampleCode}>
      An example of a simple tag.
    </GalleryExampleTile>

  </>;

export default NxTagPage;
