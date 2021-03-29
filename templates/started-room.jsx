;<div style={{ padding: '50px 20% 0' }}>
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
  <div
    className="p-5"
    style={{
      height: '800px',
      marginTop: '100px',
      background: 'white',
      borderTopLeftRadius: '35px',
      borderTopRightRadius: '35px',
    }}
  >
    {/* Topic name */}
    <div>
      <span className="fs-4">
        สภาชานม: เรียนรู้ไม่มีสิ้นสุด เรียนยังไง เรียนกับใคร
      </span>
    </div>
    {/*  Speakers  */}
    <div className="my-4">
      <div>
        <div style={{ display: 'inline-block', margin: '0 20px' }}>
          <img
            style={{ width: '100px', height: '100px', borderRadius: '40%' }}
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <p className="mt-2 fs-5 text-center">Rawit</p>
        </div>
        <div style={{ display: 'inline-block', margin: '0 20px' }}>
          <img
            style={{ width: '100px', height: '100px', borderRadius: '40%' }}
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <p className="mt-2 fs-5 text-center">Tong</p>
        </div>
      </div>
    </div>
    {/* Followed by speakers */}
    <div className="my-5">
      <div className="my-4 fs-5" style={{ color: '#e0e0e0' }}>
        Followed by the speakers
      </div>
      <div>
        <div style={{ display: 'inline-block', margin: '0 12px' }}>
          <img
            style={{ width: '90px', height: '90px', borderRadius: '40%' }}
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <p className="mt-2 fs-5 text-center">Rawit</p>
        </div>
        <div style={{ display: 'inline-block', margin: '0 12px' }}>
          <img
            style={{ width: '90px', height: '90px', borderRadius: '40%' }}
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <p className="mt-2 fs-5 text-center">Tong</p>
        </div>
        <div style={{ display: 'inline-block', margin: '0 12px' }}>
          <img
            style={{ width: '90px', height: '90px', borderRadius: '40%' }}
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <p className="mt-2 fs-5 text-center">Rawit</p>
        </div>
        <div style={{ display: 'inline-block', margin: '0 12px' }}>
          <img
            style={{ width: '90px', height: '90px', borderRadius: '40%' }}
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <p className="mt-2 fs-5 text-center">Tong</p>
        </div>
      </div>
    </div>
    {/* End room */}
    <div style={{ marginTop: '80px' }}>
      <a
        href="#"
        className="btn btn-primary btn-md active d-block mx-auto"
        role="button"
        aria-pressed="true"
        style={{
          borderRadius: '25px',
          backgroundColor: '#da615c',
          borderColor: '#da615c',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <i className="fas fa-plus mr-2" />
        End room
      </a>
    </div>
  </div>
</div>
