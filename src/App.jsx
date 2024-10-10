import './App.css'
import Layout from './components/shared/Layout'

function App() {

  return (
    <Layout>

      {/* <!-- BEGIN: Main Menu--> */}
      <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">

        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item me-auto"><a className="navbar-brand" href="../../../html/ltr/vertical-menu-template/index.html">
              <span className="brand-logo">
                iJobs
              </span>
              <h2 className="brand-text">Admin</h2>
            </a></li>
            <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i className="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i></a></li>
          </ul>
        </div>

        <div className="shadow-bottom"></div>
        <div className="main-menu-content">
          <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li className=" nav-item"><a className="d-flex align-items-center" href="index.html"><i data-feather="home"></i><span className="menu-title text-truncate" data-i18n="Dashboards">Dashboards</span><span className="badge badge-light-warning rounded-pill ms-auto me-1">2</span></a>
              <ul className="menu-content">
                <li><a className="d-flex align-items-center" href="dashboard-analytics.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Analytics">Analytics</span></a>
                </li>
                <li className="active"><a className="d-flex align-items-center" href="dashboard-ecommerce.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="eCommerce">eCommerce</span></a>
                </li>
              </ul>
            </li>
            <li className=" navigation-header"><span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span><i data-feather="more-horizontal"></i>
            </li>

            <li className=" nav-item"><a className="d-flex align-items-center" href="app-kanban.html"><i data-feather="grid"></i><span className="menu-title text-truncate" data-i18n="Kanban">Kanban</span></a>
            </li>
            <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="file-text"></i><span className="menu-title text-truncate" data-i18n="Invoice">Invoice</span></a>
              <ul className="menu-content">
                <li><a className="d-flex align-items-center" href="app-invoice-list.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="List">List</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-invoice-preview.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Preview">Preview</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-invoice-edit.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Edit">Edit</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-invoice-add.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Add">Add</span></a>
                </li>
              </ul>
            </li>

            <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="shield"></i><span className="menu-title text-truncate" data-i18n="Roles &amp; Permission">Roles &amp; Permission</span></a>
              <ul className="menu-content">
                <li><a className="d-flex align-items-center" href="app-access-roles.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Roles">Roles</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-access-permission.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Permission">Permission</span></a>
                </li>
              </ul>
            </li>

            <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="shopping-cart"></i><span className="menu-title text-truncate" data-i18n="eCommerce">eCommerce</span></a>
              <ul className="menu-content">
                <li><a className="d-flex align-items-center" href="app-ecommerce-shop.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Shop">Shop</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-ecommerce-details.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Details">Details</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-ecommerce-wishlist.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Wish List">Wish List</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="app-ecommerce-checkout.html"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Checkout">Checkout</span></a>
                </li>
              </ul>
            </li>

            <li className="disabled nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="eye-off"></i><span className="menu-title text-truncate" data-i18n="Disabled Menu">Disabled Menu</span></a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- END: Main Menu--> */}

      {/* <!-- BEGIN: Content--> */}
      <div className="app-content content ">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
          </div>
          <div className="content-body">
            {/* <!-- Dashboard Ecommerce Starts --> */}
            <section id="dashboard-ecommerce">
              <div className="row match-height">

                {/* <!-- Statistics Card --> */}
                <div className="col-xl-12 col-md-12 col-12">
                  <div className="card card-statistics">
                    <div className="card-header">
                      <h4 className="card-title">Statistics</h4>
                      <div className="d-flex align-items-center">
                        <p className="card-text font-small-2 me-25 mb-0">Updated 1 month ago</p>
                      </div>
                    </div>
                    <div className="card-body statistics-body">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-primary me-2">
                              <div className="avatar-content">
                                <i data-feather="trending-up" className="avatar-icon"></i>
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">230k</h4>
                              <p className="card-text font-small-3 mb-0">Sales</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-info me-2">
                              <div className="avatar-content">
                                <i data-feather="user" className="avatar-icon"></i>
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">8.549k</h4>
                              <p className="card-text font-small-3 mb-0">Customers</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-danger me-2">
                              <div className="avatar-content">
                                <i data-feather="box" className="avatar-icon"></i>
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">1.423k</h4>
                              <p className="card-text font-small-3 mb-0">Products</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-success me-2">
                              <div className="avatar-content">
                                <i data-feather="dollar-sign" className="avatar-icon"></i>
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">$9745</h4>
                              <p className="card-text font-small-3 mb-0">Revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/ Statistics Card --> */}
              </div>

              <div className="row match-height">
                <div className="col-lg-4 col-12">
                  <div className="row match-height">
                    {/* <!-- Bar Chart - Orders --> */}
                    <div className="col-lg-6 col-md-3 col-6">
                      <div className="card">
                        <div className="card-body pb-50">
                          <h6>Orders</h6>
                          <h2 className="fw-bolder mb-1">2,76k</h2>
                          <div id="statistics-order-chart"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Bar Chart - Orders --> */}

                    {/* <!-- Line Chart - Profit --> */}
                    <div className="col-lg-6 col-md-3 col-6">
                      <div className="card card-tiny-line-stats">
                        <div className="card-body pb-50">
                          <h6>Profit</h6>
                          <h2 className="fw-bolder mb-1">6,24k</h2>
                          <div id="statistics-profit-chart"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Line Chart - Profit --> */}

                    {/* <!-- Earnings Card --> */}
                    <div className="col-lg-12 col-md-6 col-12">
                      <div className="card earnings-card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6">
                              <h4 className="card-title mb-1">Earnings</h4>
                              <div className="font-small-2">This Month</div>
                              <h5 className="mb-1">$4055.56</h5>
                              <p className="card-text text-muted font-small-2">
                                <span className="fw-bolder">68.2%</span><span> more earnings than last month.</span>
                              </p>
                            </div>
                            <div className="col-6">
                              <div id="earnings-chart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Earnings Card --> */}
                  </div>
                </div>

                {/* <!-- Revenue Report Card --> */}
                <div className="col-lg-8 col-12">
                  <div className="card card-revenue-budget">
                    <div className="row mx-0">
                      <div className="col-md-8 col-12 revenue-report-wrapper">
                        <div className="d-sm-flex justify-content-between align-items-center mb-3">
                          <h4 className="card-title mb-50 mb-sm-0">Revenue Report</h4>
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center me-2">
                              <span className="bullet bullet-primary font-small-3 me-50 cursor-pointer"></span>
                              <span>Earning</span>
                            </div>
                            <div className="d-flex align-items-center ms-75">
                              <span className="bullet bullet-warning font-small-3 me-50 cursor-pointer"></span>
                              <span>Expense</span>
                            </div>
                          </div>
                        </div>
                        <div id="revenue-report-chart"></div>
                      </div>
                      <div className="col-md-4 col-12 budget-wrapper">
                        <div className="btn-group">
                          <button type="button" className="btn btn-outline-primary btn-sm dropdown-toggle budget-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            2020
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">2020</a>
                            <a className="dropdown-item" href="#">2019</a>
                            <a className="dropdown-item" href="#">2018</a>
                          </div>
                        </div>
                        <h2 className="mb-25">$25,852</h2>
                        <div className="d-flex justify-content-center">
                          <span className="fw-bolder me-25">Budget:</span>
                          <span>56,800</span>
                        </div>
                        <div id="budget-chart"></div>
                        <button type="button" className="btn btn-primary">Increase Budget</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/ Revenue Report Card --> */}
              </div>

            </section>
            {/* <!-- Dashboard Ecommerce ends --> */}

          </div>
        </div>
      </div>
      {/* <!-- END: Content--> */}

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>



    </Layout>
  )
}

export default App
