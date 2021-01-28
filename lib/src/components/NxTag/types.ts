/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, WeakValidationMap, HTMLAttributes} from 'react';
import * as PropTypes from 'prop-types';

export const NX_TAG_COLORS =
    ['light-blue', 'purple', 'pink', 'blue', 'red', 'green', 'orange', 'yellow', 'lime', 'indigo'] as const;
export type NX_TAG_COLORS_TYPE = (typeof NX_TAG_COLORS)[number]; // See https://stackoverflow.com/a/45486495

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  children: ReactNode;
  tagColor?: NX_TAG_COLORS_TYPE;
}

export interface SelectableProps extends Props {
  onSelect: (() => void);
  selected: boolean;
}

export const propTypes: WeakValidationMap<Props> = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(NX_TAG_COLORS)
};

export const selectablePropTypes: WeakValidationMap<SelectableProps> = {
  ...propTypes,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};
