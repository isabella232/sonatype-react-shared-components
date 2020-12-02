/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow,
  NxPagination,
  NxFilterInput
} from '@sonatype/react-shared-components';
import { slice, toLower, pipe, prop, includes, filter, both } from 'ramda';

interface Row { name: string; country: string };

const PAGE_SIZE = 5;

const tableData: Row[] = [
  {name: 'Anna', country: 'USA'},
  {name: 'Lean', country: 'France'},
  {name: 'Louis', country: 'France'},
  {name: 'Zach', country: 'Colombia'},
  {name: 'Jimmy', country: 'Germany'},
  {name: 'Karen', country: 'Australia'},
  {name: 'Paul', country: 'UK'},
  {name: 'Raul', country: 'Argentina'},
  {name: 'Maria', country: 'Spain'}
];

const NxTablePaginationFilterExample = () => {

  const [nameFilter, setNameFilter] = useState(''),
      [countryFilter, setCountryFilter] = useState(''),
      [page, setPage] = useState(0),
      matchesName = pipe<Row, string, string, boolean>(prop('name'), toLower, includes(toLower(nameFilter))),
      matchesCountry = pipe<Row, string, string, boolean>(prop('country'), toLower, includes(toLower(countryFilter))),
      filteredData = filter(both(matchesName, matchesCountry), tableData),
      pageCount = Math.ceil(filteredData.length / PAGE_SIZE),
      currentPage = pageCount ? Math.min(page, pageCount - 1) : undefined,
      rows = currentPage != null && slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE, filteredData);

  return (
    <div className="nx-table-container gallery-pagination-filter-table-example">
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Name</NxTableCell>
            <NxTableCell>Country</NxTableCell>
          </NxTableRow>
          <NxTableRow isFilterHeader>
            <NxTableCell>
              <NxFilterInput placeholder="Type a name" onChange={setNameFilter} value={nameFilter}/>
            </NxTableCell>
            <NxTableCell>
              <NxFilterInput placeholder="Select a country" onChange={setCountryFilter} value={countryFilter}/>
            </NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody emptyMessage="No rows match the current filter">
          { rows && rows.map((row: Row) =>
            <NxTableRow key={row.name.concat(row.country)}>
              <NxTableCell>{row.name}</NxTableCell>
              <NxTableCell>{row.country}</NxTableCell>
            </NxTableRow>
          )}
        </NxTableBody>
      </NxTable>
      <div className="nx-table-container__footer">
        <NxPagination { ...{ pageCount, currentPage } } onChange={setPage} />
      </div>
    </div>
  );
};

export default NxTablePaginationFilterExample;
