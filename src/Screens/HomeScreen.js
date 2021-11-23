import React from "react";


function HomeScreen() {


  return (
    <>
    
   <div>
  <div className="layer" />
  {/* ! Body */}
  <a className="skip-link sr-only" href="#skip-target">Skip to content</a>
  <div className="page-flex">
    {/* ! Sidebar */}
    <aside className="sidebar">
      <div className="sidebar-start">
        <div className="sidebar-head">
          <a href="/" className="logo-wrapper" title="Home">
            <span className="sr-only">Home</span>
            <span className="icon logo" aria-hidden="true" />
            <div className="logo-text">
              <span className="logo-title">Elegant</span>
              <span className="logo-subtitle">Dashboard</span>
            </div>
          </a>
          <button className="sidebar-toggle transparent-btn" title="Menu" type="button">
            <span className="sr-only">Toggle menu</span>
            <span className="icon menu-toggle" aria-hidden="true" />
          </button>
        </div>
        <div className="sidebar-body">
          <ul className="sidebar-body-menu">
            <li>
              <a className="active" href="/"><span className="icon home" aria-hidden="true" />Dashboard</a>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon document" aria-hidden="true" />Posts
                <span className="category__btn transparent-btn" title="Open list">
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="posts.html">All Posts</a>
                </li>
                <li>
                  <a href="new-post.html">Add new post</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon folder" aria-hidden="true" />Categories
                <span className="category__btn transparent-btn" title="Open list">
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="categories.html">All categories</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon image" aria-hidden="true" />Media
                <span className="category__btn transparent-btn" title="Open list">
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="media-01.html">Media-01</a>
                </li>
                <li>
                  <a href="media-02.html">Media-02</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon paper" aria-hidden="true" />Pages
                <span className="category__btn transparent-btn" title="Open list">
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="pages.html">All pages</a>
                </li>
                <li>
                  <a href="new-page.html">Add new page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="comments.html">
                <span className="icon message" aria-hidden="true" />
                Comments
              </a>
              <span className="msg-counter">7</span>
            </li>
          </ul>
          <span className="system-menu__title">system</span>
          <ul className="sidebar-body-menu">
            <li>
              <a href="appearance.html"><span className="icon edit" aria-hidden="true" />Appearance</a>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon category" aria-hidden="true" />Extentions
                <span className="category__btn transparent-btn" title="Open list">
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="extention-01.html">Extentions-01</a>
                </li>
                <li>
                  <a href="extention-02.html">Extentions-02</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon user-3" aria-hidden="true" />Users
                <span className="category__btn transparent-btn" title="Open list">
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="users-01.html">Users-01</a>
                </li>
                <li>
                  <a href="users-02.html">Users-02</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="##"><span className="icon setting" aria-hidden="true" />Settings</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
        <a href="##" className="sidebar-user">
          <span className="sidebar-user-img">
            <picture><source srcSet="./img/avatar/avatar-illustrated-01.webp" type="image/webp" /><img src="./img/avatar/avatar-illustrated-01.png" alt="User name" /></picture>
          </span>
          <div className="sidebar-user-info">
            <span className="sidebar-user__title">Nafisa Sh.</span>
            <span className="sidebar-user__subtitle">Support manager</span>
          </div>
        </a>
      </div>
    </aside>
    <div className="main-wrapper">
      {/* ! Main nav */}
      <nav className="main-nav--bg">
        <div className="container main-nav">
          <div className="main-nav-start">
            <div className="search-wrapper">
              <i data-feather="search" aria-hidden="true" />
              <input type="text" placeholder="Enter keywords ..." required />
            </div>
          </div>
          <div className="main-nav-end">
            <button className="sidebar-toggle transparent-btn" title="Menu" type="button">
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle--gray" aria-hidden="true" />
            </button>
            <div className="lang-switcher-wrapper">
              <button className="lang-switcher transparent-btn" type="button">
                EN
                <i data-feather="chevron-down" aria-hidden="true" />
              </button>
              <ul className="lang-menu dropdown">
                <li><a href="##">English</a></li>
                <li><a href="##">French</a></li>
                <li><a href="##">Uzbek</a></li>
              </ul>
            </div>
            <button className="theme-switcher gray-circle-btn" type="button" title="Switch theme">
              <span className="sr-only">Switch theme</span>
              <i className="sun-icon" data-feather="sun" aria-hidden="true" />
              <i className="moon-icon" data-feather="moon" aria-hidden="true" />
            </button>
            <div className="notification-wrapper">
              <button className="gray-circle-btn dropdown-btn" title="To messages" type="button">
                <span className="sr-only">To messages</span>
                <span className="icon notification active" aria-hidden="true" />
              </button>
              <ul className="users-item-dropdown notification-dropdown dropdown">
                <li>
                  <a href="##">
                    <div className="notification-dropdown-icon info">
                      <i data-feather="check" />
                    </div>
                    <div className="notification-dropdown-text">
                      <span className="notification-dropdown__title">System just updated</span>
                      <span className="notification-dropdown__subtitle">The system has been successfully upgraded. Read more
                        here.</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="notification-dropdown-icon danger">
                      <i data-feather="info" aria-hidden="true" />
                    </div>
                    <div className="notification-dropdown-text">
                      <span className="notification-dropdown__title">The cache is full!</span>
                      <span className="notification-dropdown__subtitle">Unnecessary caches take up a lot of memory space and
                        interfere ...</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="notification-dropdown-icon info">
                      <i data-feather="check" aria-hidden="true" />
                    </div>
                    <div className="notification-dropdown-text">
                      <span className="notification-dropdown__title">New Subscriber here!</span>
                      <span className="notification-dropdown__subtitle">A new subscriber has subscribed.</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-to-page" href="##">Go to Notifications page</a>
                </li>
              </ul>
            </div>
            <div className="nav-user-wrapper">
              <button href="##" className="nav-user-btn dropdown-btn" title="My profile" type="button">
                <span className="sr-only">My profile</span>
                <span className="nav-user-img">
                  <picture><source srcSet="./img/avatar/avatar-illustrated-02.webp" type="image/webp" /><img src="./img/avatar/avatar-illustrated-02.png" alt="User name" /></picture>
                </span>
              </button>
              <ul className="users-item-dropdown nav-user-dropdown dropdown">
                <li><a href="##">
                    <i data-feather="user" aria-hidden="true" />
                    <span>Profile</span>
                  </a></li>
                <li><a href="##">
                    <i data-feather="settings" aria-hidden="true" />
                    <span>Account settings</span>
                  </a></li>
                <li><a className="danger" href="##">
                    <i data-feather="log-out" aria-hidden="true" />
                    <span>Log out</span>
                  </a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* ! Main */}
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title">Dashboard</h2>
          <div className="row stat-cards">
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon primary">
                  <i data-feather="bar-chart-2" aria-hidden="true" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Total visits</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit success">
                      <i data-feather="trending-up" aria-hidden="true" />4.07%
                    </span>
                    Last month
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon warning">
                  <i data-feather="file" aria-hidden="true" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Total visits</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit success">
                      <i data-feather="trending-up" aria-hidden="true" />0.24%
                    </span>
                    Last month
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon purple">
                  <i data-feather="file" aria-hidden="true" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Total visits</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit danger">
                      <i data-feather="trending-down" aria-hidden="true" />1.64%
                    </span>
                    Last month
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon success">
                  <i data-feather="feather" aria-hidden="true" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Total visits</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit warning">
                      <i data-feather="trending-up" aria-hidden="true" />0.00%
                    </span>
                    Last month
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="chart">
                <canvas id="myChart" aria-label="Site statistics" role="img" />
              </div>
              <div className="users-table table-wrapper">
                <table className="posts-table">
                  <thead>
                    <tr className="users-table-info">
                      <th>
                        <label className="users-table__checkbox ms-20">
                          <input type="checkbox" className="check-all" />Thumbnail
                        </label>
                      </th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="users-table__checkbox">
                          <input type="checkbox" className="check" />
                          <div className="categories-table-img">
                            <picture><source srcSet="./img/categories/01.webp" type="image/webp" /><img src="./img/categories/01.jpg" alt="category" /></picture>
                          </div>
                        </label>
                      </td>
                      <td>
                        Starting your traveling blog with Vasco
                      </td>
                      <td>
                        <div className="pages-table-img">
                          <picture><source srcSet="./img/avatar/avatar-face-04.webp" type="image/webp" /><img src="./img/avatar/avatar-face-04.png" alt="User Name" /></picture>
                          Jenny Wilson
                        </div>
                      </td>
                      <td><span className="badge-pending">Pending</span></td>
                      <td>17.04.2021</td>
                      <td>
                        <span className="p-relative">
                          <button className="dropdown-btn transparent-btn" type="button" title="More info">
                            <div className="sr-only">More info</div>
                            <i data-feather="more-horizontal" aria-hidden="true" />
                          </button>
                          <ul className="users-item-dropdown dropdown">
                            <li><a href="##">Edit</a></li>
                            <li><a href="##">Quick edit</a></li>
                            <li><a href="##">Trash</a></li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="users-table__checkbox">
                          <input type="checkbox" className="check" />
                          <div className="categories-table-img">
                            <picture><source srcSet="./img/categories/02.webp" type="image/webp" /><img src="./img/categories/02.jpg" alt="category" /></picture>
                          </div>
                        </label>
                      </td>
                      <td>
                        Start a blog to reach your creative peak
                      </td>
                      <td>
                        <div className="pages-table-img">
                          <picture><source srcSet="./img/avatar/avatar-face-03.webp" type="image/webp" /><img src="./img/avatar/avatar-face-03.png" alt="User Name" /></picture>
                          Annette Black
                        </div>
                      </td>
                      <td><span className="badge-pending">Pending</span></td>
                      <td>23.04.2021</td>
                      <td>
                        <span className="p-relative">
                          <button className="dropdown-btn transparent-btn" type="button" title="More info">
                            <div className="sr-only">More info</div>
                            <i data-feather="more-horizontal" aria-hidden="true" />
                          </button>
                          <ul className="users-item-dropdown dropdown">
                            <li><a href="##">Edit</a></li>
                            <li><a href="##">Quick edit</a></li>
                            <li><a href="##">Trash</a></li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="users-table__checkbox">
                          <input type="checkbox" className="check" />
                          <div className="categories-table-img">
                            <picture><source srcSet="./img/categories/03.webp" type="image/webp" /><img src="./img/categories/03.jpg" alt="category" /></picture>
                          </div>
                        </label>
                      </td>
                      <td>
                        Helping a local business reinvent itself
                      </td>
                      <td>
                        <div className="pages-table-img">
                          <picture><source srcSet="./img/avatar/avatar-face-02.webp" type="image/webp" /><img src="./img/avatar/avatar-face-02.png" alt="User Name" /></picture>
                          Kathryn Murphy
                        </div>
                      </td>
                      <td><span className="badge-active">Active</span></td>
                      <td>17.04.2021</td>
                      <td>
                        <span className="p-relative">
                          <button className="dropdown-btn transparent-btn" type="button" title="More info">
                            <div className="sr-only">More info</div>
                            <i data-feather="more-horizontal" aria-hidden="true" />
                          </button>
                          <ul className="users-item-dropdown dropdown">
                            <li><a href="##">Edit</a></li>
                            <li><a href="##">Quick edit</a></li>
                            <li><a href="##">Trash</a></li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="users-table__checkbox">
                          <input type="checkbox" className="check" />
                          <div className="categories-table-img">
                            <picture><source srcSet="./img/categories/04.webp" type="image/webp" /><img src="./img/categories/04.jpg" alt="category" /></picture>
                          </div>
                        </label>
                      </td>
                      <td>
                        Caring is the new marketing
                      </td>
                      <td>
                        <div className="pages-table-img">
                          <picture><source srcSet="./img/avatar/avatar-face-05.webp" type="image/webp" /><img src="./img/avatar/avatar-face-05.png" alt="User Name" /></picture>
                          Guy Hawkins
                        </div>
                      </td>
                      <td><span className="badge-active">Active</span></td>
                      <td>17.04.2021</td>
                      <td>
                        <span className="p-relative">
                          <button className="dropdown-btn transparent-btn" type="button" title="More info">
                            <div className="sr-only">More info</div>
                            <i data-feather="more-horizontal" aria-hidden="true" />
                          </button>
                          <ul className="users-item-dropdown dropdown">
                            <li><a href="##">Edit</a></li>
                            <li><a href="##">Quick edit</a></li>
                            <li><a href="##">Trash</a></li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="users-table__checkbox">
                          <input type="checkbox" className="check" />
                          <div className="categories-table-img">
                            <picture><source srcSet="./img/categories/01.webp" type="image/webp" /><img src="./img/categories/01.jpg" alt="category" /></picture>
                          </div>
                        </label>
                      </td>
                      <td>
                        How to build a loyal community online and offline
                      </td>
                      <td>
                        <div className="pages-table-img">
                          <picture><source srcSet="./img/avatar/avatar-face-03.webp" type="image/webp" /><img src="./img/avatar/avatar-face-03.png" alt="User Name" /></picture>
                          Robert Fox
                        </div>
                      </td>
                      <td><span className="badge-active">Active</span></td>
                      <td>17.04.2021</td>
                      <td>
                        <span className="p-relative">
                          <button className="dropdown-btn transparent-btn" type="button" title="More info">
                            <div className="sr-only">More info</div>
                            <i data-feather="more-horizontal" aria-hidden="true" />
                          </button>
                          <ul className="users-item-dropdown dropdown">
                            <li><a href="##">Edit</a></li>
                            <li><a href="##">Quick edit</a></li>
                            <li><a href="##">Trash</a></li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="users-table__checkbox">
                          <input type="checkbox" className="check" />
                          <div className="categories-table-img">
                            <picture><source srcSet="./img/categories/03.webp" type="image/webp" /><img src="./img/categories/03.jpg" alt="category" /></picture>
                          </div>
                        </label>
                      </td>
                      <td>
                        How to build a loyal community online and offline
                      </td>
                      <td>
                        <div className="pages-table-img">
                          <picture><source srcSet="./img/avatar/avatar-face-03.webp" type="image/webp" /><img src="./img/avatar/avatar-face-03.png" alt="User Name" /></picture>
                          Robert Fox
                        </div>
                      </td>
                      <td><span className="badge-active">Active</span></td>
                      <td>17.04.2021</td>
                      <td>
                        <span className="p-relative">
                          <button className="dropdown-btn transparent-btn" type="button" title="More info">
                            <div className="sr-only">More info</div>
                            <i data-feather="more-horizontal" aria-hidden="true" />
                          </button>
                          <ul className="users-item-dropdown dropdown">
                            <li><a href="##">Edit</a></li>
                            <li><a href="##">Quick edit</a></li>
                            <li><a href="##">Trash</a></li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-3">
              <article className="customers-wrapper">
                <canvas id="customersChart" aria-label="Customers statistics" role="img" />
                {/*              <p class="customers__title">New Customers <span>+958</span></p>
        <p class="customers__date">28 Daily Avg.</p>
        <picture><source srcset="./img/svg/customers.svg" type="image/webp"><img src="./img/svg/customers.svg" alt=""></picture> */}
              </article>
              <article className="white-block">
                <div className="top-cat-title">
                  <h3>Top categories</h3>
                  <p>28 Categories, 1400 Posts</p>
                </div>
                <ul className="top-cat-list">
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Lifestyle <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Dailiy lifestyle articles <span className="purple">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Tutorials <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Coding tutorials <span className="blue">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Technology <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Dailiy technology articles <span className="danger">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        UX design <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        UX design tips <span className="success">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Interaction tips <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Interaction articles <span className="warning">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        App development <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Mobile development articles <span className="warning">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Nature <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Wildlife animal articles <span className="warning">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Geography <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Geography articles <span className="primary">+472</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </main>
      {/* ! Footer */}
      <footer className="footer">
        <div className="container footer--flex">
          <div className="footer-start">
            <p>2021 © Elegant Dashboard - <a href="elegant-dashboard.com" target="_blank" rel="noopener noreferrer">elegant-dashboard.com</a></p>
          </div>
          <ul className="footer-end">
            <li><a href="##">About</a></li>
            <li><a href="##">Support</a></li>
            <li><a href="##">Puchase</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
  {/* Chart library */}

</div>

    </>
  );
}

export default HomeScreen;
