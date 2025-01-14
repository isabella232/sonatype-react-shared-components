/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState } from 'react';

interface StateProps {
  value: number | string;
}

/**
 * @return an initialized state with the specified value and isPristine set to true.
 */
export function initialState<T extends string | number>(value: T): StateProps {
  return { value };
}

/**
 * @return a state useful once a user has adjusted the value of a form select: one with the specified value and
 * isPristine set to false.
 */
export function userInput<T extends string | number>(newValue: T): StateProps {
  return { value: newValue };
}

/**
 * A react hook for managing NxFormSelect state.
 * @param initialValue The initial `value` desired for the NxFormSelect
 * @return a tuple containing:
 *   A StateProps object containing the current value and isPristine flag, which can be passed as props to an
 *   NxFormSelect.
 *   A updater function that takes a new value and initiates a new render with that value, similarly to the
 *   second return value of React's `useState` hook
 */
export function useNxFormSelectState<T extends string | number>(initialValue: T): [StateProps, (v: T) => void] {
  const [state, setState] = useState(initialState(initialValue));

  return [
    state,
    newVal => setState(userInput(newVal))
  ];
}
