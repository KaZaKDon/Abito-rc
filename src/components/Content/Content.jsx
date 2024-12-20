import "../Content/Content.css";

export const Content = ({ title, descr, img }) => {
  return (
    <>
      <img className="content-side_list-img" src={img} alt="gruz" />
      <h5 className="content-side_list-title">{title}</h5>
      <p className="content-side_list-text">{descr}</p>
    </>
  );
};
