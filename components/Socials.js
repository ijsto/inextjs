export const Socials = () => {
  return (
    <>
      <div className="socials">
        <a target="_blank" href="https://twitter.com/ijstodev">
          <img src="/static/icon/twitter.png" className="icon" alt="my image" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCk54GuQ7ha-wvviMimD8i1w"
        >
          <img src="/static/icon/youtube.png" className="icon" alt="my image" />
        </a>
        <a target="_blank" href="https://www.instagram.com/ijsto/">
          <img
            src="/static/icon/instagram.png"
            className="icon"
            alt="my image"
          />
        </a>
        <a target="_blank" href="https://www.facebook.com/IJS-349806719022014">
          <img
            src="/static/icon/facebook.png"
            className="icon"
            alt="my image"
          />
        </a>
        <a href="mailto:code@ijs.to">
          <img src="/static/icon/email.png" className="icon" alt="my image" />
        </a>
      </div>
      <style jsx>{`
        a {
          border: 1px solid white;
          padding: 0.75em;
          border-radius: 100%;
          line-height: 0;
        }
        a:hover {
          border-radius: 0;
          border: 1px solid transparent;
          border-bottom: 1px solid orange;
        }

        .icon {
          max-width: 16px;
        }
        .socials {
          align-items: center;
          display: flex;
          justify-content: space-around;
          margin: 1em auto;
          max-width: 90%;
          width: 400px;
        }
      `}</style>
    </>
  );
};

export default Socials;
