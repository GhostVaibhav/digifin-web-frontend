import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg flex navbar-dark bg-primary">
                <div
                    className="container-fluid"
                    style={{ fontFamily: "Inter" }}
                >
                    <a
                        className="navbar-brand"
                        style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "1.5rem" }}
                        href="/"
                    >
                        digiFin
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse flex justify-content-between"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Dashboard
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-dark mx-2 shadow rounded-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}