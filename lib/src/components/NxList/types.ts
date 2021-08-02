/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, LiHTMLAttributes, ValidationMap,
  ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export interface NxListProps extends HTMLAttributes<HTMLUListElement> {
  bulleted?: boolean | null;
  children?: ReactNode | null;
  emptyMessage?: ReactNode | null;
  error?: string | null;
  isLoading?: boolean | null;
  retryHandler?: (() => void) | null;
}

export const nxListPropTypes: ValidationMap<NxListProps> = {
  bulleted: PropTypes.bool,
  children: PropTypes.node,
  emptyMessage: PropTypes.node,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  retryHandler: PropTypes.func
};

export interface NxListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  selected?: boolean | null;
}

export const nxListItemPropTypes: ValidationMap<NxListItemProps> = {
  selected: PropTypes.bool
};

export interface NxListTextProps {
  children?: ReactNode | null,
  className?: string | null
}

export const nxListTextPropTypes: ValidationMap<NxListTextProps> = {
  children: PropTypes.node,
  className: PropTypes.string
};

export interface NxListSubtextProps {
  children?: ReactNode | null,
  className?: string | null
}

export const nxListSubtextPropTypes: ValidationMap<NxListSubtextProps> = {
  children: PropTypes.node,
  className: PropTypes.string
};

export interface NxListActionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | null;
}

export const nxListActionPropTypes: ValidationMap<NxListActionProps> = {
  children: PropTypes.node
};

export interface NxListButtonItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | null,
  selected?: boolean | null
}

export const nxListButtonItemPropTypes: ValidationMap<NxListButtonItemProps> = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool
};

export interface NxListLinkItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode | null,
  disabled?: boolean | null,
  selected?: boolean | null
}

export const nxListLinkItemPropTypes: ValidationMap<NxListLinkItemProps> = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

export interface NxListDescriptionTermProps {
  children?: ReactNode | null
}

export const nxListDescriptionTermPropTypes: ValidationMap<NxListDescriptionTermProps> = {
  children: PropTypes.node
};

export interface NxListDescriptionProps {
  children?: ReactNode | null
}

export const nxListDescriptionPropTypes: ValidationMap<NxListDescriptionProps> = {
  children: PropTypes.node
};
