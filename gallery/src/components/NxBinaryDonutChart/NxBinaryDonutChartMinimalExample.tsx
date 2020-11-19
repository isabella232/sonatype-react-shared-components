/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxBinaryDonutChart } from '@sonatype/react-shared-components';

export default function NxBinaryDonutChartMinimalExample() {
  return (
    <>
      <NxBinaryDonutChart percent={0} aria-label="An empty donut chart" />
      <NxBinaryDonutChart percent={15} />
      <NxBinaryDonutChart percent={25} />
      <NxBinaryDonutChart percent={50} aria-label="A half-full donut chart" />
      <NxBinaryDonutChart percent={90} />
      <NxBinaryDonutChart percent={100} aria-label="A full donut chart" />
    </>
  );
}
