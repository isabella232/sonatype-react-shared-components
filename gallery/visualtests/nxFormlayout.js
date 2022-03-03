/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-form', function() {
  const { simpleTest } = setupBrowser('#/pages/Form Layout Examples');

  const generalFormSelector = '#nx-form-layout-example .nx-form',
      horizontablFormSelector = '#nx-form-layout-horizontal-example .nx-form';

  describe('nx-form layout', function() {
    it('looks right', simpleTest(generalFormSelector));
  });

  describe('nx-form horizontal layout', function() {
    it('looks right', simpleTest(horizontablFormSelector));
  });

  describe('nx-form-group deprecated layout', function() {
    const { simpleTest } = setupBrowser('#/pages/Form Group');

    const selector = '#nx-form-group-deprecated-example .nx-form-group';

    it('looks right', simpleTest(selector));
  });

  describe('nx-fieldset deprecated layout', function() {
    const { simpleTest } = setupBrowser('#/pages/Fieldset');

    const selector = '#nx-fieldset-deprecated-example .nx-fieldset';

    it('looks right', simpleTest(selector));
  });
});
