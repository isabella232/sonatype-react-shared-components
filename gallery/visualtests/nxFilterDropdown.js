/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxFilterDropdown', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Filter Dropdown');
    await browser.refresh();
  });

  const tableExampleSelector = '#nx-filter-dropdown-table-example .gallery-example-live',
      dropdownSelector = `${tableExampleSelector} .nx-filter-dropdown`,
      toggleSelector = `${dropdownSelector} .nx-dropdown__toggle`;
      shortDropdownSelector = '#nx-filter-dropdown-short-example .nx-filter-dropdown',
      nonDefaultDropdownSelector = '#nx-filter-dropdown-non-default-example .nx-filter-dropdown',
      labelledDropdownSelector = '#nx-filter-dropdown-example .nx-form-group';

  describe('NxFilterDropdown when closed', function() {

    it('has a light grey border by default', simpleTest(tableExampleSelector));
    it('has a dark grey border when hovered', hoverTest(tableExampleSelector, toggleSelector));
    it('has a light blue border when focused', focusTest(tableExampleSelector, toggleSelector));
    it('has a light blue border when focused and hovered', focusAndHoverTest(tableExampleSelector, toggleSelector));
    it('has a dark grey border when clicked', clickTest(tableExampleSelector, toggleSelector));
  });

  describe('NxFilterDropdown when open', function() {
    beforeEach(async function() {
      const button = await browser.$(toggleSelector);

      await button.scrollIntoView({ block: 'center' });
      await button.click();
    });

    it('has a dark button border with expanded menu', async function() {
      const [targetElement, toggleElement] = await Promise.all([
        browser.$(dropdownSelector),
        browser.$(toggleSelector)
      ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });
      await browser.execute(function(el) {
        el.blur();
      }, toggleElement);

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 376);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });

    it('has focus, hover, and selection styles for checkboxes', async function() {
      const [dropdownEl, cb1, cb2] = await Promise.all([
        browser.$(dropdownSelector),
        browser.$(`${dropdownSelector} .nx-checkbox:first-child`),
        browser.$(`${dropdownSelector} .nx-checkbox:nth-child(2)`)
      ]);

      // after this cb1 should be selected and focused, cb2 should be hovered
      await cb1.scrollIntoView({ block: 'center' });
      await cb1.click();
      await cb2.moveTo();

      const { x, y } = await dropdownEl.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 376);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });

    describe('NxFilterDropdown reset button', function() {
      const resetBtnSelector = `${dropdownSelector} .nx-filter-dropdown__reset`,
          checkboxSelector = `${dropdownSelector} .nx-checkbox`;

      beforeEach(async function() {
        const resetBtn = await browser.$(resetBtnSelector);
        await resetBtn.scrollIntoView();
      });

      it('looks disabled when no items are selected', simpleTest(dropdownSelector));

      describe('NxFilterDropdown reset button when items are selected', function() {
        beforeEach(async function() {
          const checkbox = await browser.$(checkboxSelector);

          checkbox.click();
        });

        it('looks like a link', simpleTest(dropdownSelector));
        it('has lighter blue text when clicked', clickTest(dropdownSelector, resetBtnSelector));
        it('has darker text when hovered', hoverTest(dropdownSelector, resetBtnSelector));
        it('has a focus border around the Reset icon and text when focused',
            focusTest(dropdownSelector, resetBtnSelector));
      });
    });
  });

  describe('Short NxFilterDropdown', function() {
    it('looks right when open', async function() {
      const [dropdown, button] = await Promise.all([
        browser.$(shortDropdownSelector),
        browser.$(shortDropdownSelector + ' .nx-dropdown__toggle')
      ]);

      await button.scrollIntoView({ block: 'center' });
      await button.click();

      const { x, y } = await dropdown.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 150, 244);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  describe('NxFilterDropdown with custom placeholder and no Reset', function() {
    it('looks right when open', async function() {
      const [dropdown, button] = await Promise.all([
        browser.$(nonDefaultDropdownSelector),
        browser.$(nonDefaultDropdownSelector + ' .nx-dropdown__toggle')
      ]);

      await button.scrollIntoView({ block: 'center' });
      await button.click();

      const { x, y } = await dropdown.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 212);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  describe('NxFilterDropdown with label', function() {
    it('looks right when open', async function() {
      const [formGroup, button] = await Promise.all([
        browser.$(labelledDropdownSelector),
        browser.$(labelledDropdownSelector + ' .nx-dropdown__toggle')
      ]);

      await button.scrollIntoView({ block: 'center' });
      await button.click();

      const { x, y } = await formGroup.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 244);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  it('stays open when a checkbox is clicked', async function() {
    const button = await browser.$(dropdownSelector + ' .nx-dropdown__toggle');

    await button.scrollIntoView({ block: 'center' });
    await button.click();

    const [dropdownMenu, checkbox] = await Promise.all([
      browser.$(`${dropdownSelector} .nx-dropdown-menu`),
      browser.$(`${dropdownSelector} .nx-checkbox:first-child`)
    ]);

    await checkbox.scrollIntoView({ block: 'center' });
    await checkbox.click();

    expect(await dropdownMenu.isDisplayed()).toBe(true);
  });

  it('closes when a click outside of the dropdown occurs', async function() {
    const [table, button] = await Promise.all([
      browser.$(tableExampleSelector),
      browser.$(dropdownSelector + ' .nx-dropdown__toggle')
    ]);

    await table.scrollIntoView({ block: 'center' });
    await button.click();

    // click outside of menu
    await table.click({ y: 50 });

    const dropdownMenu = await browser.$(`${dropdownSelector} .nx-dropdown-menu`);
    expect(await dropdownMenu.isDisplayed()).toBe(false);
  });
});
