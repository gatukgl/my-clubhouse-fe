;<div style={{ padding: '50px 20%' }}>
  {/*  Nav Bar  */}
  <div className="float-right my-4 d-flex align-items-center">
    {/* Events */}
    <div className="mr-5" style={{ display: 'inline-block', fontSize: '2rem' }}>
      <a href="#">
        <i className="far fa-calendar-alt" />
      </a>
    </div>
    {/* Profile image */}
    <div style={{ display: 'inline-block' }}>
      <a type="button" href="#">
        <img
          className="rounded-full"
          style={{ width: '40px', height: '40px' }}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>
  </div>
  {/* First room */}
  <div
    className="card w-100 mb-4 p-5"
    style={{ height: 'auto', border: 0, borderRadius: '22px' }}
  >
    {/* title */}
    <span className="fs-5">
      สภาชานม: เรียนรู้ไม่มีสิ้นสุด เรียนยังไง เรียนกับใคร
    </span>
    {/* Moderators */}
    <div className="container my-4">
      <div className="row">
        {/* images */}
        <div className="col-3" style={{ paddingLeft: 0 }}>
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block rounded-full ring-2 ring-white"
              style={{ borderRadius: '40%', height: '80px', width: '80px' }}
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block rounded-full ring-2 ring-white"
              style={{ borderRadius: '40%', height: '80px', width: '80px' }}
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
        {/* names and number of attendees*/}
        <div className="col fs-5">
          <div>
            <span>Rupert Grint</span>
            <span className="ml-2">💬</span>
          </div>
          <div>
            <span>Emma Watson</span>
            <span className="ml-2">💬</span>
          </div>
          <div className="mt-2" style={{ color: '#999999' }}>
            <span>
              337 <i className="fas fa-user" />
            </span>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>
              2 <i className="fas fa-comment-dots" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  Start room button  */}
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
      <i className="fas fa-plus mr-2" />
      Start a room
    </a>
  </div>
</div>
