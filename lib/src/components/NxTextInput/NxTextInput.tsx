/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';

import './NxTextInput.scss';
import { Props, propTypes } from './types';
import NxTooltip from '../NxTooltip/NxTooltip';
import { hasValidationErrors, getFirstValidationError } from '../../util/validationUtil';
export { Props, propTypes, inputTypes } from './types';

/**
 * Standard text input with validation styling
 * @param type What type of text input to render.  Defaults to "text".
 *   Possible values: "textarea" | "text" | "password"
 * @param value The value rendered in the text input
 * @param isPristine Should be set to true when the user has not yet adjusted the value of the input
 * @param validationErrors Zero or more validation error messages.  If empty or not defined, the field is
 *   considered to be valid
 * @param onChange A callback for when the user changes the value of the text box (e.g. by typing a letter)
 * @param onKeyPress A callback for when the user presses a key that doesn't necessarily change the input value
 *    (e.g. by hitting enter)
 */
const NxTextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    function NxTextInput(props, ref) {
      const { type, isPristine, validationErrors, onChange, className, onKeyPress, ...attrs } = props;
      /**
       * `trimmedValue` is a hidden property in `props`
       * We need to remove it so react doesn't complain when we pass the object
       * with the props to the `createElement` method below.
       */
      const newProps = omit(['trimmedValue'], attrs);
      const isTextArea = type === 'textarea',
          element = isTextArea ? 'textarea' : 'input',
          typeAttr = isTextArea ? undefined : (type || 'text'),
          isInvalid = hasValidationErrors(validationErrors),
          firstValidationError = getFirstValidationError(validationErrors),
          internalClassName = classnames('nx-text-input', className, {
            'nx-text-input--pristine': isPristine,
            'nx-text-input--invalid': isInvalid,
            'nx-text-input--valid': !isInvalid
          });

      function inputOnChange(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (onChange) {
          onChange(e.currentTarget.value);
        }
      }

      function inputOnKeyPress(e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (onKeyPress) {
          onKeyPress(e.key);
        }
      }

      const textElement = React.createElement(element, {
        ...newProps,
        ref,
        type: typeAttr,
        onChange: inputOnChange,
        className: internalClassName,
        onKeyPress: inputOnKeyPress
      });

      const invalidTextElementWithTooltip = (
        <NxTooltip open={isInvalid}
                   title={firstValidationError}
                   className="nx-tooltip--validation-error"
                   placement="top-end">
          { textElement }
        </NxTooltip>
      );

      return isInvalid ? invalidTextElementWithTooltip : textElement;
    }
);

NxTextInput.propTypes = propTypes;

export default NxTextInput;