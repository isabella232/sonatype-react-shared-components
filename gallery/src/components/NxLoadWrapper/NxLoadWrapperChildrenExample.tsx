/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxLoadWrapper } from '@sonatype/react-shared-components';

const NxLoadWrapperChildrenExample = () =>
  <NxLoadWrapper>
    <div>Children will render, because neither loading nor error are set</div>
  </NxLoadWrapper>;

export default NxLoadWrapperChildrenExample;