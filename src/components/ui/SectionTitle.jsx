import Eyebrow from './Eyebrow.jsx';

export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="h-section" dangerouslySetInnerHTML={{ __html: title }} />
      {children ? <p>{children}</p> : null}
    </div>
  );
}