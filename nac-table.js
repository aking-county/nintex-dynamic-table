import { i, _ as _decorate, s, e, y, a as e$1 } from './query-assigned-elements-8a604587.js';

const baseStyle = i`
  :host {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const NacTableStyles = i`
.table-wrapper {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ccc;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: inherit;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}

th,
td {
  padding: 0 0.5rem;
  border-top: 1px solid #ccc;
  text-align: left;
  vertical-align: middle;
  position: relative;
}

th {
  font-weight: bold;
  height: 3.5rem;
  text-transform: capitalize;
  border-top: none;
}
thead tr {
  background-color: #fff !important;
}

tr {
  background-color: #fff;
  height: 3.25rem;
}

tr:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

th {
  font-weight: bold;
  cursor: pointer;
}

.table-row.selected {
  background-color: rgba(25, 118, 210, 0.08);
}

.table-row.selected:hover {
  background-color: rgba(25, 118, 210, 0.12);
}

.table-cell-value {
  visibility: visible;
}

.table-row.edit .table-cell-value {
  visibility: hidden;
}

.table-cell-input {
  position: absolute;
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  padding: 0 0.5rem;
  font-size: inherit;
  color: inherit;
}

.dsc {
  transform: rotate(180deg);
}

.flex-item {
  display: flex;
}

.top-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.margin-left-4 {
  margin-left: 0.25rem;
}

.opacity {
  opacity: 1;
}

/*  search start*/
.search-wrapper {
  height: 3.5rem;
  width: 100%;
  max-width: 26.25rem;
  position: relative;
}
.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  color: rgba(0, 0, 0, 0.54);
}
.search-input {
  height: 3.5rem;
  width: 100%;
  padding: 1.03125rem 0.875rem;
  padding-left: 3rem;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
}

.input-styled {
  border-radius: 0.25rem;
  box-sizing: border-box;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.23);
  outline: none;
}

.input-styled:hover {
  border-color: rgba(0, 0, 0, 0.87);
}

.input-styled:focus {
  box-shadow: 0 0 0 1px rgb(25, 118, 210);
  border-color: rgb(25, 118, 210);
}
/* search end */

/* Pagination-start */
.pagination {
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0;
  font-family: inherit;
}
.pagination-total {
  display: inline-flex;
  align-items: center;
  margin-right: 2rem;
}
.pagination-button {
  border: 0;
  outline: 0;
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
}

.pagination-button:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.pagination-button:disabled {
  cursor: default;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
}


@media (max-width: 872px) {
  .top-panel {
    flex-direction: column;
  }
  .search-wrapper {
    margin-bottom: 1rem;
  }
}


@media (max-width: 767px) {
  th:not(:nth-of-type(1)):not(:nth-of-type(2)):not(:nth-of-type(3)),
  td:not(:nth-of-type(1)):not(:nth-of-type(2)):not(:nth-of-type(3)) {
    display: none;
  }
}
`;
const styles = [baseStyle, NacTableStyles];

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

_decorate([e$1("lit-toolbar")], function (_initialize, _LitElement) {
  class LitToolbar extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: LitToolbar,
    d: [{
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "editMode",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "hasSelectedRow",
      value() {
        return false;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return i`
      :host {
        background-color: rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        width: 100%;
        max-width: 420px;
      }
      .button-wrapper {
        box-sizing: border-box;
        height: 56px;
        padding: 16.5px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        padding: 8px;
        margin: 0;
      }

      .delete {
        color: #d32f2f;
      }

      button:hover {
        text-decoration: underline;
      }

      button:disabled {
        text-decoration: none;
        cursor: default;
        color: rgba(0, 0, 0, 0.3);
      }

      button > svg {
        margin-right: 2px;
      }
    `;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y`
      <div class="button-wrapper">
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("add-row"))}"
        >
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Add
        </button>
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("edit-row"))}"
          ?disabled="${!this.hasSelectedRow}"
        >
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="currentColor"
          >
            <path
              d="M16 2H17V3H18V4H19V5H20V6H19V7H18V8H17V7H16V6H15V5H14V4H15V3H16M12 6H14V7H15V8H16V10H15V11H14V12H13V13H12V14H11V15H10V16H9V17H8V18H7V19H6V20H2V16H3V15H4V14H5V13H6V12H7V11H8V10H9V9H10V8H11V7H12"
            />
          </svg>
          Edit
        </button>
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("discard-row"))}"
          ?disabled="${!this.editMode}"
        >
          <svg
            height="18px"
            fill="currentColor"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"
            />
          </svg>

          Discard
        </button>
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("save-row"))}"
          ?disabled="${!this.editMode}"
        >
          <svg
            height="18px"
            fill="currentColor"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21"
            />
          </svg>
          Save
        </button>
        <button
          class="delete"
          @click="${() => this.dispatchEvent(new CustomEvent("delete-row"))}"
          ?disabled="${!this.hasSelectedRow}"
        >
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
          Delete
        </button>
      </div>
    `;
      }
    }]
  };
}, s);

let AndysTable = _decorate([e$1('andys-table')], function (_initialize, _LitElement) {
  class AndysTable extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: AndysTable,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "collection",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "readonly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "data",
      value() {
        return [];
      }
    }, {
      kind: "field",
      key: "editCell",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "pageData",
      value() {
        return [];
      }
    }, {
      kind: "field",
      key: "totalPages",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      key: "currentPage",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      key: "pageSize",
      value() {
        return 10;
      }
    }, {
      kind: "field",
      key: "searchText",
      value() {
        return "";
      }
    }, {
      kind: "field",
      key: "tableSort",
      value() {
        return {
          field: "",
          direction: "asc"
        };
      }
    }, {
      kind: "field",
      key: "selectedRow",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "editMode",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "tempEditRowData",
      value() {
        return null;
      }
    }, {
      kind: "get",
      key: "filteredData",
      value:
      // @property({ type: Boolean })
      // readOnly = false;

      function filteredData() {
        return this.data.filter(item => {
          return Object.values(item).map(val => String(val)).some(val => val.toLowerCase().includes(this.searchText.toLowerCase()));
        });
      }
    }, {
      kind: "get",
      key: "sortedData",
      value: function sortedData() {
        const {
          field,
          direction
        } = this.tableSort;
        return this.filteredData.sort((a, b) => {
          const aVal = a[field];
          const bVal = b[field];
          if (aVal < bVal) return direction === "asc" ? -1 : 1;
          if (aVal > bVal) return direction === "asc" ? 1 : -1;
          return 0;
        });
      }
    }, {
      kind: "get",
      key: "columns",
      value: function columns() {
        const sampleRow = this.data[0] || {};
        return Object.keys(sampleRow).map(field => {
          return {
            label: field,
            field: field
          };
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("collection")) {
          try {
            this.data = JSON.parse(this.collection);
            this.updatePageData();
          } catch (e) {
            console.error("Error parsing table data: ", e);
          }
        }
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./nac-table.config-d2342d00.js').then(x => x.config);
      }
    }, {
      kind: "method",
      key: "unselect",
      value: function unselect() {
        this.selectedRow = null;
        this.editMode = false;
        this.tempEditRowData = null;
        this.editCell = null;
      }
    }, {
      kind: "method",
      key: "onSortClick",
      value: function onSortClick(field) {
        const {
          direction
        } = this.tableSort;
        this.unselect();
        if (this.tableSort.field === field) {
          this.tableSort.direction = direction === "asc" ? "desc" : "asc";
        } else {
          this.tableSort = {
            field: field,
            direction: "asc"
          };
        }
        this.currentPage = 1;
        this.updatePageData();
      }
    }, {
      kind: "method",
      key: "onPageChange",
      value: function onPageChange(page) {
        this.unselect();
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
          this.updatePageData();
        }
      }

      // Handle edit event for a cell
    }, {
      kind: "method",
      key: "onCellEdit",
      value: function onCellEdit({
        field,
        value
      }) {
        if (this.editCell) {
          const found = this.tempEditRowData || this.pageData.find(item => item === this.editCell?.row);
          if (!found) return;
          const editedRow = {
            ...found
          };
          editedRow[field] = value;
          this.tempEditRowData = editedRow;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y`
      <div class="top-panel">
        ${this.renderSearch()} ${this.readonly ? null : this.renderToolbar()}
      </div>
      <br />
      ${this.renderTable()}
    `;
      }
    }, {
      kind: "method",
      key: "renderSearch",
      value: function renderSearch() {
        return y`<div class="search-wrapper">
      <svg
        class="search-icon"
        height="24px"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z"
        />
      </svg>
      <input
        class="search-input input-styled"
        id="search-input"
        placeholder="Search..."

        @input=${event => {
          this.searchText = event.target.value;
          this.updatePageData();
        }}
      />
    </div> `;
      }
    }, {
      kind: "method",
      key: "renderToolbar",
      value: function renderToolbar() {
        return y`
      <lit-toolbar
        @add-row="${this.onAddRow}"
        @edit-row="${this.onEditRow}"
        @delete-row="${this.onDeleteRow}"
        @save-row="${this.onSaveRow}"
        @discard-row="${this.onDiscardRow}"
        .editMode="${this.editMode}"
        .hasSelectedRow="${!!this.selectedRow}"
        
      ></lit-toolbar>
    `;
      }
    }, {
      kind: "method",
      key: "renderTable",
      value: function renderTable() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.pageData = this.sortedData.slice(start, end);
        return y`

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              
              ${this.columns.map(column => y`
                  <th @click="${() => this.onSortClick(column.field)}">
                    ${y`<span class="flex-item">
                      ${column.label}
                      ${this.tableSort.direction === "asc" ? y`<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="18px"
                            width="18px"
                            opacity="0"
                            class="margin-left-4 ${this.tableSort.field === column.field ? "opacity" : ""}"
                          >
                            <path
                              d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
                            />
                          </svg>` : y`<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="18px"
                            width="18px"
                            opacity="0"
                            class="margin-left-4 dsc ${this.tableSort.field === column.field ? "opacity" : ""}"
                          >
                            <path
                              d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
                            />
                          </svg>`}
                    </span>`}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.pageData.map(item => y`
              
                <tr
                  @click="${() => {
          if (this.readonly) return;
          if (this.editMode && this.selectedRow !== item) {
            this.unselect();
          }
          if (this.selectedRow === item && !this.editMode) {
            this.selectedRow = null;
          } else {
            this.selectedRow = item;
          }
          this.requestUpdate();
        }}"
                  class="table-row ${this.editMode && this.selectedRow === item ? "edit" : ""} ${this.selectedRow === item ? "selected" : ""}"
                >
                  ${this.columns.map(column => y`
                      <td>
                        ${this.editMode && this.selectedRow === item ? y`<input
                              type="text"
                              .value="${item[column.field]}"
                              class="table-cell-input input-styled"
                              @input="${event => this.onCellEdit({
          field: column.field,
          value: event.target.value
        })}"
                              @focus="${() => {
          this.editCell = {
            columnName: column.field,
            row: item
          };
          this.requestUpdate();
        }}"
                              @blur="${() => {
          if (this.editCell?.row === item) {
            this.editCell = {
              columnName: column.field,
              row: item
            };
            this.requestUpdate();
          }
        }}"
                              ?disabled=${!!this.readonly}
                            />` : y`<span class="table-cell-value"
                              >${item[column.field]}</span
                            >`}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
      ${this.onLoad(this.collection)}                    
      ${this.totalPages > 1 ? this.renderPagination() : null}
      
    `;
      }
    }, {
      kind: "method",
      key: "renderPagination",
      value: function renderPagination() {
        const start = (this.currentPage - 1) * this.pageSize + 1;
        const end = Math.min(start + this.pageSize - 1, this.filteredData.length);
        const total = this.filteredData.length;
        return y`
      <div class="pagination">
        <span class="pagination-total">${start}-${end} of ${total}</span>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(1)}"
          ?disabled="${this.currentPage === 1}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
            ></path>
          </svg>
        </button>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(this.currentPage - 1)}"
          ?disabled="${this.currentPage === 1}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            ></path>
          </svg>
        </button>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(this.currentPage + 1)}"
          ?disabled="${this.currentPage === this.totalPages}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
            ></path>
          </svg>
        </button>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(this.totalPages)}"
          ?disabled="${this.currentPage === this.totalPages}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
            ></path>
          </svg>
        </button>
      </div>
      <script>
        
  const nacTable = document.querySelector("andys-table");

  
</script>
    `;
      }
    }, {
      kind: "method",
      key: "saveSelectedRow",
      value: function saveSelectedRow() {
        if (!this.selectedRow) return;
        const editedRow = this.data.find(item => item === this.selectedRow);
        if (editedRow) {
          Object.assign(editedRow, this.tempEditRowData);
          this.dispatchEvent(new CustomEvent("change", {
            detail: {
              collection: JSON.stringify(this.data)
            }
          }));
        }
      }
    }, {
      kind: "method",
      key: "updatePageData",
      value: function updatePageData() {
        this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
        if (this.totalPages < 1) {
          this.currentPage = 1;
        }
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "onAddRow",
      value: function onAddRow() {
        this.searchText = "";
        this.tableSort = {
          field: "",
          direction: "asc"
        };
        const searchInput = this.shadowRoot?.querySelector("#search-input");
        if (searchInput) searchInput.value = "";
        this.updatePageData();
        const newRow = {};
        this.columns.forEach(column => newRow[column.field] = "");
        this.data.push(newRow);
        this.selectedRow = newRow;
        this.editMode = true;
        this.editCell = null;
        this.updatePageData();
        this.currentPage = this.totalPages;
        this.focusInputOnEdit();
      }
    }, {
      kind: "method",
      key: "onEditRow",
      value: function onEditRow() {
        if (this.selectedRow) {
          this.editMode = true;
          this.editCell = {
            columnName: "",
            row: this.selectedRow
          };
          this.requestUpdate();
          this.focusInputOnEdit();
        }
      }
    }, {
      kind: "method",
      key: "onDeleteRow",
      value: function onDeleteRow() {
        if (this.selectedRow) {
          const index = this.data.indexOf(this.selectedRow);
          this.data.splice(index, 1);
          this.unselect();
          this.updatePageData();
          this.dispatchEvent(new CustomEvent("change", {
            detail: {
              collection: JSON.stringify(this.data)
            }
          }));
          this.onChange(this.data);
        }
      }
    }, {
      kind: "method",
      key: "onSaveRow",
      value: function onSaveRow() {
        if (!this.selectedRow) return;
        if (this.editMode) {
          this.editMode = false;
          this.saveSelectedRow();
          this.updatePageData();
          this.onChange(this.data);
        }
      }
    }, {
      kind: "method",
      key: "onDiscardRow",
      value: function onDiscardRow() {
        if (this.selectedRow) {
          const editedRow = this.pageData.find(item => item === this.selectedRow);
          if (editedRow) {
            this.columns.forEach(column => {});
            this.editMode = false;
            this.editCell = null;
            this.requestUpdate();
            this.onChange(this.data);
          }
        }
      }
    }, {
      kind: "method",
      key: "onChange",
      value: function onChange(e) {
        const value = e;
        const args = {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: value
        };
        const event = new CustomEvent('ntx-value-change', args);
        this.dispatchEvent(event);
      }
    }, {
      kind: "method",
      key: "onLoad",
      value: function onLoad(e) {
        console.info("data: " + this.data);
        var dataCheck = this.data.toString();
        if (dataCheck == null || dataCheck == '') {
          this.onChange(this.collection);
        }
      }
    }, {
      kind: "method",
      key: "focusInputOnEdit",
      value: function focusInputOnEdit() {
        setTimeout(() => {
          const inputElement = this.shadowRoot?.querySelector(".selected")?.querySelector("input");
          if (inputElement) inputElement.focus();
        }, 50);
      }
    }]
  };
}, s);

export { AndysTable };
