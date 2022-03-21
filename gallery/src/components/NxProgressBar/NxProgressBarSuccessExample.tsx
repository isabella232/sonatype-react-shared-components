/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxProgressBar } from '@sonatype/react-shared-components';

export default function NxProgressBarExample() {
  return (
    <>
      <div>
        <NxProgressBar value={100}
                       variant="small"
                       showCounter={true}
        />
        <NxProgressBar value={100}
                       label="10 of 10 of files transferred."
                       showCounter={true}
        />
        <NxProgressBar value={100}
                       label="10 of 10 of files transferred."
                       labelSuccess="With success label!"
                       showCounter={true}
        />
      </div>
    </>
  );
}
