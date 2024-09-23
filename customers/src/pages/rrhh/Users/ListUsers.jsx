import React from 'react'

export const ListUsers = () => {
    return (
        <>
                 <header class="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                    <div class="container-fluid px-4">
                    <div class="page-header-content">
                        <div class="row align-items-center justify-content-between pt-3">
                        <div class="col-auto mb-3">
                        <h1 class="page-header-title">
                        <div class="page-header-icon">
                            <i data-feather="user">
                            </i>
                        </div>
                        Users List
                        </h1>
                        </div>
                        <div class="col-12 col-xl-auto mb-3">
                        <a class="btn btn-sm btn-light text-primary" href="user-management-groups-list.html">
                        <i class="me-1" data-feather="users">
                        </i>
                        Manage Groups
                        </a>
                        <a class="btn btn-sm btn-light text-primary" href="user-management-add-user.html">
                        <i class="me-1" data-feather="user-plus">
                        </i>
                        Add New User
                        </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    </header>
        
        </>
    )
}
