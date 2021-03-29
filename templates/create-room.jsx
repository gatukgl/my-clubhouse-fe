;<div style={{ padding: '50px 20%' }}>
  <div className="d-flex justify-content-center fs-5">START A ROOM</div>
  {/* Set a topic */}
  <div className="my-4 fs-5">Add a topic...</div>
  <div className="my-4 fs-5">
    <input
      className="form-control mr-sm-2"
      type="text"
      placeholder="🗒 e.g. Raising wolves - good idea?"
      aria-label="Search"
    />
  </div>
  {/* Choose moderators */}
  <div className="container" style={{ padding: '0px' }}>
    <div className="row">
      <div className="col input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-dark disabled"
            type="button"
            id="button-addon1"
          >
            Moderator 1
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="🥷🏼 username"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
      <div className="col input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-dark disabled"
            type="button"
            id="button-addon1"
          >
            Moderator 2
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="🥷🏼 username"
          aia-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </div>
  </div>
  {/*  Start a room  */}
  <div className="my-4">
    <a
      href="#"
      className="btn btn-primary btn-md active d-block mx-auto"
      role="button"
      aria-pressed="true"
      style={{
        borderRadius: '25px',
        backgroundColor: '#55ab68',
        borderColor: '#55ab68',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <i className="fas fa-check mr-2" />
      Set topic
    </a>
  </div>
</div>
