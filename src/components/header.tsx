function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="/">Adi Bro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fw-semibold" href="/">Message</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" href="/gautam">Gautam</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" href="/todolist">To-Do-List</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;