import "./Tools.css";

function Tools() {
  return (
    <div className="Tools-container-main">
      <div className="Tools-svg-container-1">
        <div className="Tools-in" data-before="Designer Tools">
          <div className="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="Tools-svg-icon"
            >
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
            </svg>
            <h1>Designer Tools</h1>
            <h3>
              I like to design things simple and clean and which gives ultimate
              sophistication
            </h3>
            <h3 className="head-tools">What I do</h3>
            <h3>Figma</h3>
            <h3>Microsoft Office</h3>
            <h3>Canva</h3>
            <h3>Logo</h3>
            <h3>Adobe Xd</h3>
          </div>
        </div>
      </div>

      <div className="Tools-svg-container-2">
        <div className="Tools-in" data-before="Developer Tools">
          <div className="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="Tools-svg-icon"
            >
              <path d="M384 96v224L64 320V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <h1>Developer Tools</h1>
            <h3>
              I prefer to work from scratch and enjoy the process of developing.
            </h3>
            <h3 className="head-tools">Dev Tools</h3>
            <h3>VS-Code</h3>
            <h3>Font-Awesome</h3>
            <h3>Redux</h3>
            <h3>Github</h3>
            <h3>Postman</h3>
            <h3>Anaconda Notebook</h3>
            <h3>Jupyter Notebook</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
