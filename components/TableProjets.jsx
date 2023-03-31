import React from 'react'
import Image from 'next/image';

function TableProjets() {
  return (
    <div class="card">
      <h5 class="card-header">Table Projet</h5>
      <div class="table-responsive text-nowrap">
        <table class="table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            <tr>
              <td>
                <i class="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                <strong>Angular Project</strong>
              </td>
              <td>Albert Cook</td>
              <td>
                <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    class="avatar avatar-xs pull-up"
                    title="Lilian Fuller"
                  >
                    <Image
                      src={require("../assets/img/avatars/5.png")}
                      alt="Avatar"
                      class="rounded-circle"
                      width={50}
                      height={50}
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    class="avatar avatar-xs pull-up"
                    title="Sophia Wilkerson"
                  >
                    <Image
                      src={require("../assets/img/avatars/6.png")}
                      alt="Avatar"
                      class="rounded-circle"
                      width={50}
                      height={50}
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    class="avatar avatar-xs pull-up"
                    title="Christina Parker"
                  >
                    <Image
                      src={require("../assets/img/avatars/7.png")}
                      alt="Avatar"
                      class="rounded-circle"
                      width={50}
                      height={50}
                    />
                  </li>
                </ul>
              </td>
              <td>
                <span class="badge bg-label-primary me-1">Active</span>
              </td>
              <td>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn p-0 dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bx bx-dots-vertical-rounded"></i>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="bx bx-edit-alt me-1"></i> Edit
                    </a>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="bx bx-trash me-1"></i> Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i class="fab fa-react fa-lg text-info me-3"></i>{" "}
                <strong>React Project</strong>
              </td>
              <td>Barry Hunter</td>
              <td>
                <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    class="avatar avatar-xs pull-up"
                    title="Lilian Fuller"
                  >
                    <Image
                      src={require("../assets/img/avatars/5.png")}
                      alt="Avatar"
                      class="rounded-circle"
                      width={50}
                      height={50}
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    class="avatar avatar-xs pull-up"
                    title="Sophia Wilkerson"
                  >
                    <Image
                      src={require("../assets/img/avatars/6.png")}
                      alt="Avatar"
                      class="rounded-circle"
                      width={50}
                      height={50}
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    class="avatar avatar-xs pull-up"
                    title="Christina Parker"
                  >
                    <Image
                      src={require("../assets/img/avatars/7.png")}
                      alt="Avatar"
                      class="rounded-circle"
                      width={50}
                      height={50}
                    />
                  </li>
                </ul>
              </td>
              <td>
                <span class="badge bg-label-success me-1">Completed</span>
              </td>
              <td>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn p-0 dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bx bx-dots-vertical-rounded"></i>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="bx bx-edit-alt me-2"></i> Edit
                    </a>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="bx bx-trash me-2"></i> Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableProjets