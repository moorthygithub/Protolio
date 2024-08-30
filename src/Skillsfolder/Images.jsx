function Image({ path, desc }) {
  return (
    <div className="skills-image-container">
      <img src={path} alt={desc} className="image-path" />
      <p className="image-desc">{desc}</p>
    </div>
  );
}

export default Image;
