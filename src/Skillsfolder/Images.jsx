import "./Skills.css"
function Image({ path, alttxt, desc }) {
  return (
    <div className="skills-image-container">
      <img src={path} alt={alttxt} className="image-path" />
      <p className="image-desc">{desc}</p>
    </div>
  );
}
export default Image;
